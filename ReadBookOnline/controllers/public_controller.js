

var category_dao = require("../dao/category_dao");
module.exports = function(app){
	app.get('/', function(req, res){
		var categories = new Array();
		category_dao.getItems(function(results){
			categories = results //lấy được cái categories tại đây
			console.log(categories);
			res.render("pages/public/index",{categories:categories, msg: msg});
		});

	})

	app.get('/category', function(req, res){
		res.render("pages/public/category");
	})
	app.get('/detail', function(req, res){
		res.render("pages/public/detail");
	})
	app.get('/series', function(req, res){
		res.render("pages/public/series");
	})

	app.get('/add', function(req, res){
		res.render("pages/public/add");
	})
}
