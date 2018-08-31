
var express = require("express");
var mysql = require("mysql");
var bodyParser = require('body-parser');
var app = express();
var port = 8080;
var redirect = require('express-redirect');
const Window = require("window");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views")
app.use(express.static(__dirname + '/templates'));
app.use(require('express-ajax'));

var adminBookController = require("./controllers/admin_book_controller");
var publicCotroller = require("./controllers/public_controller");
var adminCategoryController = require('./controllers/admin_category_controller');
var adminSeriesController = require('./controllers/admin_series_controller');
var adminCommentController = require('./controllers/admin_comment_controller');


adminBookController(app);
publicCotroller(app);
adminCategoryController(app);
adminSeriesController(app);
adminCommentController(app);

app.listen(port, function(){
	console.log("started");
})
