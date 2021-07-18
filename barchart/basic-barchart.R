#setwd("../Desktop/rdemo_r2d3")

# This is an example of a basic bar chart from the r2d3 website
# Tutorial can be found here https://rstudio.github.io/r2d3/

library(r2d3)
#r2d3(data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20), script = "basic-bar.js",css="style.css")

#same script but you can use the options argument to change color of the chart instead of using css

r2d3(data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20), script = "barchart-options.js",options = list(color = "orange"))
