var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine','handlebars');

var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});