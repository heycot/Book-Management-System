var mysql = require('mysql');
var Comment = require('.././entities/comment');
var connection = require('../util/connection');

var getCommentsPublic = function(callback) {
	 var sql = 'SELECT * FROM comments INNER JOIN books ON books.id=comments.book_id INNER JOIN users ON comments.user_id=users.id';
    var comments = new Array();
    connection.query(sql, function(err, result){
      if(err) throw err;
      for(var i = 0; i < result.length; i++) {
        var comment = new Comment(result[i].id, result[i].user_id, result[i].username, result[i].book_id, result[i].name, result[i].create_at, result[i].comment, result[i].status);
		console.log("comment " + comment);
		comments.push(comment);
      }
      callback(comments);
    });
}

var getCommentsAdmin = function(callback){
	var sql = "SELECT comments.id, users.username, books.name, comments.create_at, comments.content, comments.status FROM comments INNER JOIN books ON books.id=comments.book_id INNER JOIN users ON comments.user_id=users.id WHERE comments.status=1";
	var comments = new Array();
   connection.query(sql, function(err, result){
	 if(err) throw err;
	 for(var i = 0; i < result.length; i++) {
	   var comment = new Comment(result[i].id, null, result[i].username, null, result[i].name, result[i].create_at, result[i].content, result[i].status);
	   comments.push(comment);
	 }
	 callback(comments);
   });
}

var getComments = function(callback){
    var sql = 'SELECT * FROM comments INNER JOIN books ON books.id = comments.book_id INNER JOIN users ON comments.user_id = users.id'
    var comments = new Array();
    connection.query(sql, function(err, result){
      if(err) throw err;
      for(var i = 0; i < result.length; i++) {
        var comment = new Comment(result[i].id, result[i].user_id, result[i].username, result[i].book_id, result[i].name, result[i].create_at, result[i].comment, result[i].status);
        comments.push(comment);
      }
      callback(comments);
    });
}


var getComment = function(callback, id) {
  var sql = 'SELECT * FROM comments INNER JOIN books ON books.id=comments.book_id INNER JOIN users ON comments.user_id=users.id WHERE comments.id=' + id;
  connection.query(sql, function(err, result){
    if(err) throw err;
      var comment = new Comment(result[0].id, result[0].user_id, result[0].username, result[0].book_id, result[0].name, result[0].create_at, result[0].comment, result[0].status);
    callback(comment);
  })
}

var insertComment = function(comment){
	 var sql = 'INSERT INTO comments(??, ??, ??, ??) VALUES(?, ?, ?, ?)';
	 var insert = ['user_id', 'book_id', 'comment, status', comment.mUserId, comment.mBookId, comment.mComment, comment.mStatus];
	 sql = mysql.format(sql, insert);
	 connection.query(sql, function(err, result) {
	   if(err) throw err;
	   console.log("insert success");
	});
}

var deleteComment = function(id, callback) {
  var sql = "DELETE FROM comments WHERE comments.id="+id;
  connection.query(sql, function(err, result){
      if(err) throw err;
      console.log("delete success");
	  callback(result);
  });
}

module.exports = {
  getComments,
  getComment,
  insertComment,
  deleteComment,
  getCommentsPublic,
  getCommentsAdmin
}
