var conn = require("../util/connection");
var Book = require("../entities/book");

var getItemsPublic = function(offset, callback) {
	var sql = "select books.id as id, books.name as name, books.summary as summary, cat_id, series_id, user_create_id, author, books.create_at as create_at, user_update_id, books.update_at as update_at, link_video, file_name, image, sum_vote, sum_score, (sum_score / sum_vote) as avg_score, status, categories.name as cat_name, series.name as series_name, username, play_list from books inner join categories on books.cat_id = categories.id inner join users on books.user_create_id = users.id left outer join series on books.series_id = series.id where status = 1 limit ?,?";
	var books = new Array();
	conn.query(sql, [offset, 10], function (err, result) {
		if (err) throw err;

	    for(var i = 0; i < result.length; i++){
	    	var book = new Book(result[i].id, result[i].name, result[i].summary, result[i].series_id, result[i].cat_id, result[i].user_create_id, result[i].create_at, result[i].author, result[i].user_update_id, result[i].update_at, result[i].link_video, result[i].file_name, result[i].image, result[i].sum_vote, result[i].sum_score, result[i].avg_score, result[i].status, result[i].cat_name, result[i].series_name, result[i].username, result[i].play_list);
	    	books.push(book);
	    }
	    callback(books);
	});
	conn.end();
}

var getItemsByCategory = function(id, offset, callback) {
	var sql = "select books.id as id, books.name as name, books.summary as summary, cat_id, series_id, user_create_id, author, books.create_at as create_at, user_update_id, books.update_at as update_at, link_video, file_name, image, sum_vote, sum_score, (sum_score / sum_vote) as avg_score, status, categories.name as cat_name, series.name as series_name, username, play_list from books inner join categories on books.cat_id = categories.id inner join users on books.user_create_id = users.id left outer join series on books.series_id = series.id where status = 1 and cat_id = ? limit ?,?";
	var books = new Array();
	conn.query(sql, [id, offset, 10], function (err, result) {
		if (err) throw err;

	    for(var i = 0; i < result.length; i++){
	    	var book = new Book(result[i].id, result[i].name, result[i].summary, result[i].series_id, result[i].cat_id, result[i].user_create_id, result[i].create_at, result[i].author, result[i].user_update_id, result[i].update_at, result[i].link_video, result[i].file_name, result[i].image, result[i].sum_vote, result[i].sum_score, result[i].avg_score, result[i].status, result[i].cat_name, result[i].series_name, result[i].username, result[i].play_list);
	    	books.push(book);
	    }
	    callback(books);
	});
	conn.end();
}

var getItemsBySeries = function(id, offset, callback) {
	var sql = "select books.id as id, books.name as name, books.summary as summary, cat_id, series_id, user_create_id, author, books.create_at as create_at, user_update_id, books.update_at as update_at, link_video, file_name, image, sum_vote, sum_score, (sum_score / sum_vote) as avg_score, status, categories.name as cat_name, series.name as series_name, username, play_list from books inner join categories on books.cat_id = categories.id inner join users on books.user_create_id = users.id left outer join series on books.series_id = series.id where status = 1 and series_id = ? limit ?,?";
	var books = new Array();
	conn.query(sql, [id, offset, 10], function (err, result) {
		if (err) throw err;

	    for(var i = 0; i < result.length; i++){
	    	var book = new Book(result[i].id, result[i].name, result[i].summary, result[i].series_id, result[i].cat_id, result[i].user_create_id, result[i].create_at, result[i].author, result[i].user_update_id, result[i].update_at, result[i].link_video, result[i].file_name, result[i].image, result[i].sum_vote, result[i].sum_score, result[i].avg_score, result[i].status, result[i].cat_name, result[i].series_name, result[i].username, result[i].play_list);
	    	books.push(book);
	    }
	    callback(books);
	});
	conn.end();
}

var getItemsTopRate = function(callback) {
	var sql = "select books.id as id, books.name as name, books.summary as summary, cat_id, series_id, user_create_id, author, books.create_at as create_at, user_update_id, books.update_at as update_at, link_video, file_name, image, sum_vote, sum_score, (sum_score / sum_vote) as avg_score, status, categories.name as cat_name, series.name as series_name, username, play_list from books inner join categories on books.cat_id = categories.id inner join users on books.user_create_id = users.id left outer join series on books.series_id = series.id where status = 1 order by avg_score desc limit 5";
	var books = new Array();
	conn.query(sql, function (err, result) {
		if (err) throw err;

	    for(var i = 0; i < result.length; i++){
	    	var book = new Book(result[i].id, result[i].name, result[i].summary, result[i].series_id, result[i].cat_id, result[i].user_create_id, result[i].create_at, result[i].author, result[i].user_update_id, result[i].update_at, result[i].link_video, result[i].file_name, result[i].image, result[i].sum_vote, result[i].sum_score, result[i].avg_score, result[i].status, result[i].cat_name, result[i].series_name, result[i].username, result[i].play_list);
	    	books.push(book);
	    }
	    callback(books);
	});
	conn.end();
}

var getItemsAdmin = function(callback) {
	var sql = "select books.id as id, books.name as name, books.summary as summary, cat_id, series_id, user_create_id, author, books.create_at as create_at, user_update_id, books.update_at as update_at, link_video, file_name, image, sum_vote, sum_score, (sum_score / sum_vote) as avg_score, status, categories.name as cat_name, series.name as series_name, username, play_list from books left outer join categories on books.cat_id = categories.id inner join users on books.user_create_id = users.id left outer join series on books.series_id = series.id";
	var books = new Array();
	conn.query(sql, function (err, result) {
		if (err) throw err;

	    for(var i = 0; i < result.length; i++){
	    	var book = new Book(result[i].id, result[i].name, result[i].summary, result[i].series_id, result[i].cat_id, result[i].user_create_id, result[i].create_at, result[i].author, result[i].user_update_id, result[i].update_at, result[i].link_video, result[i].file_name, result[i].image, result[i].sum_vote, result[i].sum_score, result[i].avg_score, result[i].status, result[i].cat_name, result[i].series_name, result[i].username, result[i].play_list);
	    	books.push(book);
	    }
	    callback(books);
	});
	conn.end();
}

var getItemPubLic = function(id, callback) {
	var sql = "select books.id as id, books.name as name, books.summary as summary, cat_id, series_id, user_create_id, author, books.create_at as create_at, user_update_id, books.update_at as update_at, link_video, file_name, image, sum_vote, sum_score, (sum_score / sum_vote) as avg_score, status, categories.name as cat_name, series.name as series_name, username, play_list from books inner join categories on books.cat_id = categories.id inner join users on books.user_create_id = users.id left outer join series on books.series_id = series.id where status = 1 and books.id = ?";
	conn.query(sql, [id], function (err, result) {
		if (err) throw err;
	    var book = new Book(result[0].id, result[0].name, result[0].summary, result[0].series_id, result[0].cat_id, result[0].user_create_id, result[0].create_at, result[0].author, result[0].user_update_id, result[0].update_at, result[0].link_video, result[0].file_name, result[0].image, result[0].sum_vote, result[0].sum_score, result[0].avg_score, result[0].status, result[0].cat_name, result[0].series_name, result[0].username, result[0].play_list);
	    callback(book);
	});
	conn.end();
}

var getItemAdmin = function(id, callback) {
	var sql = "select id, name, summary, series_id, cat_id, author, link_video, file_name, image from books where id = ?"

	conn.query(sql,[id], function (err, result) {
		if (err) throw err;
	    var book = new Book(result[0].id, result[0].name, result[0].summary, result[0].series_id, result[0].cat_id, result[0].user_create_id, result[0].create_at, result[0].author, result[0].user_update_id, result[0].update_at, result[0].link_video, result[0].file_name, result[0].image, result[0].sum_vote, result[0].sum_score, result[0].avg_score, result[0].status, result[0].cat_name, result[0].series_name, result[0].username, result[0].play_list);
	    callback(book);
	});
	conn.end();
}

var getItemsSearch = function(keyword, offset, callback) {
	var sql = "select books.id as id, books.name as name, books.summary as summary, cat_id, series_id, user_create_id, author, books.create_at as create_at, user_update_id, books.update_at as update_at, link_video, file_name, image, sum_vote, sum_score, (sum_score / sum_vote) as avg_score, status, categories.name as cat_name, series.name as series_name, username, play_list from books inner join categories on books.cat_id = categories.id inner join users on books.user_create_id = users.id left outer join series on books.series_id = series.id where status = 1 and books.name like '%"+keyword+"%' limit ?,?";
	var books = new Array();
	conn.query(sql, [offset, 10], function (err, result) {
		if (err) throw err;
	    for(var i = 0; i < result.length; i++){
	    	var book = new Book(result[i].id, result[i].name, result[i].summary, result[i].series_id, result[i].cat_id, result[i].user_create_id, result[i].create_at, result[i].author, result[i].user_update_id, result[i].update_at, result[i].link_video, result[i].file_name, result[i].image, result[i].sum_vote, result[i].sum_score, result[i].avg_score, result[i].status, result[i].cat_name, result[i].series_name, result[i].username, result[i].play_list);
	    	books.push(book);
	    }
	    callback(books);
	});
	conn.end();
}

var updateItemStatus = function(id, status, callback) {
	var sql = "update books set status = ? where id = ?";
	conn.query(sql, [status, id], function(err, result) {
		if(err) throw err;
		callback(result);
	});
	conn.end();
}



var updateItem = function(item, callback) {
	var sql = "update books name = ?, summary = ?, series_id, cat_id = ?, author = ?, link_video = ?, file_name = ?, image = ? where id = ?";
	conn.query(sql, [item.mName, item.mSummary, item.mSeriesId, item.mCatId, item.mAuthor, item.mLinkVideo, item.mFileName, item.mImage, item.mId], function(err, result) {
		if(err) throw err;
		callback(result);
	});
	conn.end();
}

var addItem = function(item, callback) {

	console.log(item.mName);
	var sql = "insert into books(name, summary, series_id, cat_id, user_create_id, author, link_video, file_name, image) values(?,?,?,?,?,?,?,?,?)";
	conn.query(sql, [item.mName, item.mSummary, item.mSeriesId, item.mCatId, item.mUserCreateId, item.mAuthor, item.mLinkVideo, item.mFileName, item.mImage], function(err, result) {
		if(err) throw err;
		callback(result);
	});
	conn.end();
}

var deleteItem = function(id, callback) {
	var sql = "delete from books where id = ?";
	conn.query(sql, [id], function(err, result) {
		if(err) throw err;
		callback(result);
	});
	conn.end();
}

module.exports = {
	getItemsPublic : getItemsPublic,
	getItemsByCategory : getItemsByCategory,
	getItemsBySeries : getItemsBySeries,
	getItemsTopRate : getItemsTopRate,
	getItemsAdmin : getItemsAdmin,
	getItemsSearch : getItemsSearch,
	getItemPubLic : getItemPubLic,
	getItemAdmin : getItemAdmin,
	updateItemStatus : updateItemStatus,
	updateItem : updateItem,
	addItem : addItem,
	deleteItem : deleteItem,
};
