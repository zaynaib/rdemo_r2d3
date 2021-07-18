#setwd("../Desktop/rDemo")
library("jsonlite")
library(r2d3)

x <- read.csv(url("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv"))

View(x)

r2d3(data=x, script = "scatter.js")