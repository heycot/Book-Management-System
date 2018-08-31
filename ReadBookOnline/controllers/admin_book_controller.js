
module.exports = function(app){
	app.get('/admin/book', function(req, res){
		res.render("pages/admin/books/index");
	})

	app.get('/admin/book/add', function(req, res){
		res.render("pages/admin/books/add");
	})
	app.get('/admin/book/edit', function(req, res){
		res.render("pages/admin/books/edit");
	})
}