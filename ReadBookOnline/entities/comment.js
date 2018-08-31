'use strict';
module.exports = class Comment {
	constructor(id, userId, userName, bookId, bookName, createAt, content) {
		this.mId = id;
		this.mUserId = userId;
		this.mUserName = userName;
		this.mBookId = bookId;
		this.mBookName = bookName;
		this.mCreateAt = createAt;
		this.mContent = content;
	}
}
