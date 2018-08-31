var comment_dao = require('../dao/comment_dao');
var Comment = require('../entities/comment');

module.exports = function(app){

	app.get('/admin/comment', function(req, res){
		var msg = "";
		var st = "";
		if(req.param('msg') !== undefined){
			msg = req.param('msg');
			if(msg == 3){
				msg = "Delete success";
				st = "success";
			}else if(msg == 0){
				msg = "Could not delete comment";
				st = "error";
			}else{
				msg = "There is something wrong";
				st = "error";
			}
		}
		comment_dao.getCommentsAdmin(function(results){
			if( results !== undefined && results.length !== "" ){
				res.render('pages/admin/comment/index', {comments: results, msg: msg, st: st});
			}else{
				res.render('pages/admin/comment/index', {msg: msg, st: st});
			}

		});
	})

    app.get('/admin/comment/delete', function(req, res){
		if(req.param('id') !== undefined){
			var id = req.param('id');
			comment_dao.deleteComment(id, function(result){
				if(result.affectedRows > 0){
                    res.redirect("/admin/comment/?msg=3");
                }else{
                    res.redirect("/admin/comment/?msg=0");
                }
			})
		}
	})

	app.post('/admin/comment/delete', function(req, res){

		var arrid = req.body.item.toString().split(",");
		var check = false;
		for(var i = 0; i < arrid.length; i++){
			if(arrid[i] !== ""){
				comment_dao.deleteComment(arrid[i], function(result){
					if(result.affectedRows > 0){
	                    check = true;
						console.log(check);
	                }else{
	                    check = false;
						return;
	                }
				})
			}
		}
		setTimeout(function(){
			if(check === true){
				res.redirect("/admin/comment/?msg=3");
			}else{
				res.redirect("/admin/comment/?msg=0");
			}
		}, 1000);
	})
}
