#setwd("../Desktop/rdemo_r2d3")
library(r2d3)
r2d3(data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20), script = "basic-bar.js",css="style.css")

animation_d = read.csv(url("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"))
r2d3(data=animation_d,script="anime.js")