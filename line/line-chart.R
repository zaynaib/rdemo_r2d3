setwd("../Desktop/rDemo")
library("jsonlite")
library(r2d3)

btc <- jsonlite::fromJSON("https://raw.githubusercontent.com/zaynaib/dataVizPractice/master/Day1/my_weather_data.json")
btc$date <- as.Date(btc$date, format =  "%Y-%m-%d")

class(btc$date)
write.csv(btc, "line-data.csv")

x <- read.csv("line-data.csv")

r2d3(data=x, script = "line.js")

View(btc)

class(btc$date)

