module RMP
export logtransform, normtransform, decorrelate, mahalanobis, hellinger, Filter, Experiment, filterEntriesExperiment!
using Statistics, StatsBase, DataFrames
using LinearAlgebra: det

# Approximate normal distribution
logtransform(x) = log.(x .+ 1 .- minimum(x))

# Center and scale on control values
normtransform(x,y) = (x .- median(y)) ./ mad(y, normalize = true)

"""Returns column  of 'data' that are never pairwise-correlated more than 'threshold',
   prioritizing columns by a given order 'orderCol' (defaults to left to right).
"""
function decorrelate(data::DataFrame; orderCol = nothing, threshold = 0.8)
    if orderCol === nothing
        orderCol = collect(1:size(data, 2))
    end
    # Columns to sort
    L1 = copy(orderCol) # Copy to avoid modifying the input list
    # Sorted columns to keep
    L2 = Array{Int64,1}() 
    while length(L1) > 0
        # Use the first non-correlated term as "pivot"
        refFt = first(L1)
        append!(L2, refFt)
        popfirst!(L1)
        stillToKeep = []
        # Which remaining terms are non correlated?
        for (ift, ft) in enumerate(L1)
            if abs(cor(data[:,refFt], data[:,ft])) < threshold
                append!(stillToKeep, ift)
            end
        end
        # Remove remaining correlated terms
        L1 = L1[stillToKeep]
    end
    return(L2)
end

# Allows the computation to be mapped on  of a DataFrame
decorrelate(data::AbstractMatrix; orderCol = nothing, threshold = 0.8) =
	decorrelate(DataFrame(data), orderCol = orderCol, threshold = threshold)

"""Squared mahalanobis distance for covariance estimator S and center µ"""
function mahalanobis(arrX::AbstractVector{Float64}, 
					 µ::AbstractVector{Float64}, S::AbstractArray{Float64,2})
    return((arrX - µ)'*inv(S)*(arrX - µ))
end


# Allows the computation to be mapped on rows of a DataFrame
mahalanobis(x::DataFrameRow, µ::AbstractVector{Float64}, S::AbstractArray{Float64,2}) = 
    mahalanobis(convert(Vector, x), µ, S)

"""Squared hellinger distance for covariance estimators S and centers µ"""
function hellinger(µ1::AbstractVector{Float64}, S1::AbstractArray{Float64,2}, 
				   µ2::AbstractVector{Float64}, S2::AbstractArray{Float64,2})
    S = (S1 + S2)/2
    H = 1 - (det(S1)^(1/4))*(det(S2)^(1/4))/(det(S)^(1/2))*
    	exp((-1/8)*(µ1-µ2)'*inv(S)*(µ1-µ2))
    return(H)
end


# This is used to store experiment details
abstract type AbstractExperiment end

mutable struct Experiment <: AbstractExperiment
    data::DataFrame
    description::String
    selectedFeatures::Array{Int64,1}
    selectedEntries::Array{Int64,1}
end

# Constructor
function Experiment(data; description = "No description provided")
    return Experiment(data, description, 1:ncol(data), 1:nrow(data))
end

abstract type AbstractFilter end

mutable struct Filter <: AbstractFilter
    value::Any
    feature::Symbol
    comparison::Function
    description::String
end

# Constructor
function Filter(value, feature; 
                comparison = isequal, description = "No description provided")
    return Filter(value, feature, comparison, description)
end

# Methods

"""Filter entries in an Experiment `e` based on filter(s) `f`,
updating `e.selectedEntries` in place accordingly.
"""
function filterEntriesExperiment!(e::AbstractExperiment, f::AbstractFilter)
    expEntries = e.data[e.selectedEntries, f.feature]
    e.selectedEntries = e.selectedEntries[f.comparison.(expEntries, f.value)]
end


function filterEntriesExperiment!(e::AbstractExperiment, filters::Array{T,1}) where {T<:AbstractFilter}
    for f in filters
        filterEntriesExperiment!(e, f)
    end
end

end # module