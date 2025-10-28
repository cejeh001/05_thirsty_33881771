// setup express app
var express = require("express")
var ejs = ("ejs")

// create the express app onject
const app = express()
const port = 8000

// tell express we want to use ejs as the templating engine
app.set("view engine", "ejs");

// load route handlers
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes)

// start web app listening
app.listen(port, () => console.log("example app is listening on port ${port}!"))