const express = require("express");
const routes = require("./controllers/burger_controllers");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Set Handlebars.
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
	console.log("App now listening at localhost:" + PORT);
});
