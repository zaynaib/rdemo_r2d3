#Full tutorial
library(r2d3)

example_csv <- read.csv("ex.csv")
View(example_csv)

r2d3(data=example_csv,script="bar.js")