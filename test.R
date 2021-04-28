setwd("../Desktop/rdemo")

library(r2d3)
library("rjson")

library("jsonlite")


r2d3(data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20), script = "barchart1.js",options = list(color="orange"))

x <- read.csv(url("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"))

View(x)


r2d3(data=x, script = "barchart.js")

btc <- jsonlite::fromJSON("https://raw.githubusercontent.com/zaynaib/dataVizPractice/master/Day1/my_weather_data.json")


View(btc)

r2d3(data=btc, script = "line.js")
