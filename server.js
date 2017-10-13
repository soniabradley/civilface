// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// BLH adding this line below temporarily to see if styles show up
// var path = require("path");

// Create an instance of the express app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static("img_upload"));

// BLH adding this line below temporarily to see if styles show up
app.use(express.static('app/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Specify the port.
var PORT = process.env.PORT || 3002;
// Set Handlebars as the default templating engine.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use("/", routes);


app.listen(PORT, function(){
  console.log("Start listen on PORT: " + PORT);
})
