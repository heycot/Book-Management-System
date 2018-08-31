'use strict';
module.exports = class Series {
	constructor(id, name, summary, createAt, updateAt) {
		this.mId = id;
		this.mName = name;
		this.mSummary = summary;
		this.mCreateAt = createAt;
		this.mUpdateAt = updateAt;
	}

	getMId(){
		return this.mId;
	}

	getMName(){
		return this.mName;
	}

	getMSummary(){
		return this.mSummary;
	}

	getMCreateAt(){
		return this.mCreateAt;
	}

	getMUpdateAt(){
		return this.mUpdateAt;
	}

	setMId(id){
		this.mId = id;
	}

	setMNmae(name){
		this.mName = name;
	}

	setMSummary(summary){
		this.mSummary = summary;
	}

	setMCreatAt(createAt){
		this.mCreateAt = createAt;
	}

	setMUpdateAt(updateAt){
		this.mUpdateAt = updateAt;
	}
}
