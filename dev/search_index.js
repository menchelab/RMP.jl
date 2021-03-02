var documenterSearchIndex = {"docs":
[{"location":"api/#RMP.jl-API","page":"API","title":"RMP.jl API","text":"","category":"section"},{"location":"api/#Table-of-contents","page":"API","title":"Table of contents","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/#Functions","page":"API","title":"Functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [RMP]\nPrivate = false\nOrder   = [:module, :type, :constant, :function, :macro]","category":"page"},{"location":"api/#RMP.decorrelate!-Tuple{Experiment}","page":"API","title":"RMP.decorrelate!","text":"Returns column  of selected data in Experiment e that are never      pairwise-correlated more than 'threshold', prioritizing columns by      a given order 'ordercol' (defaults to left to right).\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.decorrelate-Tuple{DataFrames.DataFrame}","page":"API","title":"RMP.decorrelate","text":"Returns column  of 'data' that are never pairwise-correlated more than 'threshold',    prioritizing columns by a given order 'ordercol' (defaults to left to right).\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.decorrelate_by_mad!-Tuple{Experiment}","page":"API","title":"RMP.decorrelate_by_mad!","text":"Returns column  of selected data in Experiment e that are never      pairwise-correlated more than 'threshold', prioritizing columns      with largest median absolute deviation.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.diagnostic-Tuple{Experiment,RMP.AbstractFilter}","page":"API","title":"RMP.diagnostic","text":"Return information in an experiment e in column(s) feature after filtering with filter f.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.diagnosticImages-Tuple{Experiment,RMP.AbstractFilter,Symbol}","page":"API","title":"RMP.diagnosticImages","text":"Get images in an experiment e whose location is stored in feature s after filtering with filter f. Images will be saved at the path provided if saveimages is set to true,  while keeping up to keepsubfolders folders from the original folder structure of the images.  If center is true, crosses will indicate the center of selected objects,  assuming they are stored in variables :AreaShape_Center_X, :AreaShape_Center_X_1,  :AreaShape_Center_Y and :AreaShape_Center_Y_1 (default if you merge nuclear and cytoplasm  measurements from CellProfiler outputs).   Display up to showlimit images if show is true.   If rgx provides a list of regex substitutions, it will be applied on all image paths  (which is useful if you're in a different file system or environment as the one described in the Experiment's data). If rgb provides a list of 3 lists of regex substitutions, it will be applied to generate the path to 3 images.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.diagnosticURLImage-Tuple{Experiment,RMP.AbstractFilter,Symbol}","page":"API","title":"RMP.diagnosticURLImage","text":"Get path to images in an experiment e stored in feature s after filtering with filter f. If center is true, the path will be returned together with the center of the filtered entries,  assuming they are stored in variables AreaShape_Center_X, AreaShape_Center_X_1,  AreaShape_Center_Y and AreaShape_Center_Y_1.   If rgx provides a list of regex substitutions, it will be applied on all file paths in the  output (which is useful if you're in a different file system or environment as the one described in the Experiment's data).\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.distance_mahalanobis_center-Tuple{Any,Any,Any}","page":"API","title":"RMP.distance_mahalanobis_center","text":"Compute the Mahalanobis Distance to center (MDC) in a dataset 'data' for a given perturbation of indices 'iPert'  compared to a reference of indices 'iRef'.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.distance_mahalanobis_median-Tuple{Any,Any,Any}","page":"API","title":"RMP.distance_mahalanobis_median","text":"Compute the median Mahalanobis Distance (MD) in a dataset 'data' for a given perturbation of indices 'iPert'  compared to a reference of indices 'iRef'.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.distance_robust_hellinger-Tuple{Any,Any,Any}","page":"API","title":"RMP.distance_robust_hellinger","text":"Compute the Robust Hellinger Distance (RHD) in a dataset data for a given perturbation of indices iPert  compared to a reference of indices iRef.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.distance_robust_mahalanobis_median-Tuple{Any,Any,Any}","page":"API","title":"RMP.distance_robust_mahalanobis_median","text":"Compute the median Robust Mahalanobis Distance (RMD) in a dataset 'data' for a given perturbation of indices 'iPert'  compared to a reference of indices 'iRef'. See https://e-archivo.uc3m.es/bitstream/handle/10016/24613/ws201710.pdf \n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.filterEntriesExperiment!-Tuple{RMP.AbstractExperiment,RMP.AbstractFilter}","page":"API","title":"RMP.filterEntriesExperiment!","text":"Filter entries in an Experiment e based on filter(s) f, updating e.selectedEntries in place accordingly.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.filterEntriesExperiment-Tuple{RMP.AbstractExperiment,RMP.AbstractSimpleFilter}","page":"API","title":"RMP.filterEntriesExperiment","text":"Return filtered entries in an Experiment e based on filter f\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.filterExperiment!-Union{Tuple{T}, Tuple{RMP.AbstractExperiment,Array{T,1}}} where T<:RMP.AbstractReduce","page":"API","title":"RMP.filterExperiment!","text":"For an experiment e, update in place e.selectedFeatures and  e.selectedEntries based on an array arr of feature selectors and  entry filters. Filters and selectors are applied sequentially.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.getdata-Tuple{Experiment}","page":"API","title":"RMP.getdata","text":"Return a copy of the data in Experiment e for its  selected entries and features.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.hellinger-Tuple{AbstractArray{Float64,1},AbstractArray{Float64,2},AbstractArray{Float64,1},AbstractArray{Float64,2}}","page":"API","title":"RMP.hellinger","text":"Squared hellinger distance for covariance estimators S and centers µ\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.logtransform!-Tuple{Experiment}","page":"API","title":"RMP.logtransform!","text":"Approximate normal distribution of selected entries  for all selected features of an Experiment e.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.logtransform-Tuple{Any}","page":"API","title":"RMP.logtransform","text":"Approximate normal distribution\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.mahalanobis-Tuple{AbstractArray{Float64,1},AbstractArray{Float64,1},AbstractArray{Float64,2}}","page":"API","title":"RMP.mahalanobis","text":"Squared mahalanobis distance for covariance estimator S and center µ\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.negation-Tuple{Union{RMP.AbstractNameSelector, RMP.AbstractSimpleSelector}}","page":"API","title":"RMP.negation","text":"Return a negative Filter or Selector by inverting  the entries or features that are kept and excluded.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.normtransform!-Tuple{Experiment,RMP.AbstractFilter}","page":"API","title":"RMP.normtransform!","text":"Center and scale all selected entries for each selectead features of an Experiment e on control values matching a Filter f\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.normtransform-Tuple{Any,Any}","page":"API","title":"RMP.normtransform","text":"Center and scale on control values\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.robust_morphological_perturbation_value","page":"API","title":"RMP.robust_morphological_perturbation_value","text":"Compute the Robust Morphological Perturbation Value (RMPV) for a given Experiment e, for all levels of a column s, compared to rows matching a given filter f or where s is equal to ref.  The RMPV quantifies the significance of changes between all conditions (levels in s) and a reference condition (defined by the filter f).  In brief, the distance of type dist between points of each  perturbation and points of the reference is computed and its  statistical significance is defined using a permutation test in which the perturbation and reference labels are shuffled  nb_rep times. If process_pool is a pool of worker processes, they will be used for parallel computation in the permutation test. This returns a DataFrame with three columns:\n\nCondition: the levels in s\nDistance: the distance between a condition and the \n\nreference \n\nRMPV: the RMPV (empirical p-value corrected for multiple\n\ntesting)\n\n\n\n\n\n","category":"function"},{"location":"api/#RMP.selectFeaturesExperiment!-Tuple{RMP.AbstractExperiment,RMP.AbstractSelector}","page":"API","title":"RMP.selectFeaturesExperiment!","text":"Return selected features in an Experiment e based on selectors s, updating e.selectedFeatures in place accordingly.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.selectFeaturesExperiment-Tuple{RMP.AbstractExperiment,RMP.AbstractSimpleSelector}","page":"API","title":"RMP.selectFeaturesExperiment","text":"Return selected features in an Experiment e based on selectors s\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.shuffled_distance_mahalanobis_center-Tuple{Any,Any,Any}","page":"API","title":"RMP.shuffled_distance_mahalanobis_center","text":"Permute labels and compute the Mahalanobis Distance to center (MDC) in a dataset 'data' for a given perturbation of indices 'iPert'  compared to a reference of indices 'iRef', to create an empirical distribution.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.shuffled_distance_mahalanobis_median-Tuple{Any,Any,Any}","page":"API","title":"RMP.shuffled_distance_mahalanobis_median","text":"Permute labels and compute the median Mahalanobis Distance (RMD) in a dataset 'data' for a given perturbation of indices 'iPert'  compared to a reference of indices 'iRef', to create an empirical distribution.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.shuffled_distance_robust_hellinger-Tuple{Any,Any,Any}","page":"API","title":"RMP.shuffled_distance_robust_hellinger","text":"Permute labels and compute the Robust Hellinger Distance (RHD) in a dataset data for a given perturbation of indices iPert  compared to a reference of indices iRef, to create an empirical distribution.\n\n\n\n\n\n","category":"method"},{"location":"api/#RMP.shuffled_distance_robust_mahalanobis_median-Tuple{Any,Any,Any}","page":"API","title":"RMP.shuffled_distance_robust_mahalanobis_median","text":"Permute labels and compute the median Robust Mahalanobis Distance (RMD) in a dataset 'data' for a given perturbation of indices 'iPert'  compared to a reference of indices 'iRef', to create an empirical distribution.\n\n\n\n\n\n","category":"method"},{"location":"api/#Index","page":"API","title":"Index","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"examples/#RMP.jl-examples","page":"Examples","title":"RMP.jl examples","text":"","category":"section"},{"location":"examples/#Introduction","page":"Examples","title":"Introduction","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"This package provides multidimensional profiling tools to quantify complex biological changes via robust statistical distances. It is particularly suitable for morphological profiling on high-content imaging data. ","category":"page"},{"location":"examples/#Getting-started","page":"Examples","title":"Getting started","text":"","category":"section"},{"location":"examples/#Generate-an-example-dataset","page":"Examples","title":"Generate an example dataset","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"The package requires data describing your experiment in a tabular format. Here we simulate such a dataset with 100 profiles, composed of five columns with numerical features (e.g. morphological measurements) and one metadata column (e.g. experimental condition).","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"using RMP, DataFrames, Random, StatsBase\n\nd = DataFrame(rand(100,5))\nd.Condition = sample('A':'D', 100);\n\n# Make one condition stand out\nd[d.Condition .== 'D',1:5] .+= 1;","category":"page"},{"location":"examples/#Create-and-filter-your-Experiment","page":"Examples","title":"Create and filter your Experiment","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"# Create Experiment object from DataFrame\ne = Experiment(d, description = \"Small simulated experiment\")\n\n# Exclude metadata from the downstream computations\nslt = NameSelector(x -> x != \"Condition\")\n\n# Apply your NameSelector to the Experiment\nselectFeaturesExperiment!(e, slt);","category":"page"},{"location":"examples/#Compute-statistical-significance-of-changes-to-a-reference","page":"Examples","title":"Compute statistical significance of changes to a reference","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"# This filter defines our reference condition (when :Condition is equal to 'C')\nf = Filter('C', :Condition)\n\n# Compute the significance of changes compared to the reference\nrmpv = robust_morphological_perturbation_value(e, :Condition, f)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Note from the statistical distance that 'C' is identical to itself, while the condition 'D' is the most different, as all values for the profiles of condition 'D' where incremented when we constructed the dataset.","category":"page"},{"location":"examples/#Vignette","page":"Examples","title":"Vignette","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"You can find a full example use case of the package in a series of notebooks collected in a dedicated repository: BioProfilingNotebooks.","category":"page"},{"location":"#RMP.jl","page":"RMP.jl","title":"RMP.jl","text":"","category":"section"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"(Image: Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.) (Image: ) (Image: )","category":"page"},{"location":"#Robust-multidimensional-profiling-to-quantify-complex-changes-via-the-minimum-covariance-determinant.","page":"RMP.jl","title":"Robust multidimensional profiling to quantify complex changes via the minimum covariance determinant.","text":"","category":"section"},{"location":"#Disclaimer","page":"RMP.jl","title":"Disclaimer","text":"","category":"section"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"This package is under active development and is not intended for external use yet. Test at your own risk.","category":"page"},{"location":"#Introduction","page":"RMP.jl","title":"Introduction","text":"","category":"section"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"This package allows to perform robust multidimensional profiling in 'Julia' and comes with helper functions, especially designed for high-content imaging-based morphological profiling.","category":"page"},{"location":"#Installation","page":"RMP.jl","title":"Installation","text":"","category":"section"},{"location":"#Local-installation","page":"RMP.jl","title":"Local installation","text":"","category":"section"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"Use the following to load this package:","category":"page"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"import Pkg\nPkg.activate(<pathToThisFolder>)\nusing RMP\nPkg.activate()","category":"page"},{"location":"#Installation-from-GitHub","page":"RMP.jl","title":"Installation from GitHub","text":"","category":"section"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"Use the following to install the package:","category":"page"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"import Pkg\nPkg.add(Pkg.PackageSpec(url = \"https://github.com/menchelab/RMP.jl.git\"))","category":"page"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"Use can then use the package:","category":"page"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"using RMP","category":"page"},{"location":"#Credits","page":"RMP.jl","title":"Credits","text":"","category":"section"},{"location":"","page":"RMP.jl","title":"RMP.jl","text":"This package was created by Loan Vulliard @ Menche lab.   This package relies on many other open-source Julia packages, listed in the requirement file (see Project.toml).","category":"page"}]
}
