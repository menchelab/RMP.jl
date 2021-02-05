module RMP
export  logtransform,
        logtransform!,
        normtransform, 
        normtransform!, 
        decorrelate, 
        decorrelate!, 
        decorrelate_by_mad!,
        mahalanobis, 
        hellinger, 
        Filter, 
        CombinationFilter, 
        Experiment, 
        filterEntriesExperiment!, 
        filterEntriesExperiment,
        Selector,
        NameSelector,
        CombinationSelector,
        selectFeaturesExperiment,
        selectFeaturesExperiment!,
        selectExperiment!,
        filterExperiment!,
        diagnostic,
        diagnosticURLImage,
        diagnosticImages,
        negation,
        getdata, 
        shuffled_distance_robust_mahalanobis_median,
        distance_robust_mahalanobis_median,
        shuffled_distance_robust_hellinger,
        distance_robust_hellinger,
        shuffled_distance_mahalanobis_center,
        distance_mahalanobis_center,
        shuffled_distance_mahalanobis_median,
        distance_mahalanobis_median,
        umap
using Statistics, StatsBase, DataFrames, Images, ImageMagick, UMAP, RCall
using LinearAlgebra: det

include("struct.jl")
include("transform.jl")
include("distances.jl")
include("diagnostic.jl")
include("visu.jl")
include("rmpv.jl")

end # module