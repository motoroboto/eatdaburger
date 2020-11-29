var express = require("express");


const PORT = process.env.PORT || 3000;

var server = express();

// Serve static content for the server from the "public" directory in the serverlication directory.
server.use(express.static("public"));

// Parse request body as JSON
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

server.use(routes);

server.listen(PORT, () => {
    console.log("server now listening at localhost:" + PORT);
});