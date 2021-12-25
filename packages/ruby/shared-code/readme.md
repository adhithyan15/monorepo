# Shared Code

All the shared code that is shared between different packages stay here in this folder. Each folder inside this folder will correspond to a package that is published as a gem. If you want to consume the shared code, consume the code directly. Do not add them as a gem dependency as we want all packages to have no dependencies other than the standard library that Ruby comes with.