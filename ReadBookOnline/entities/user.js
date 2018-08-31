'use strict';
module.exports = class User {
	constructor(id, username, fullname, email, password, roleId, playList) {
		this.mId = id;
		this.mUsername = username;
		this.mFullname = fullname;
		this.mEmail = email;
		this.mPassword = password;
		this.mRoleId = roleId;
		this.mPlayList = playList;
	}
} 