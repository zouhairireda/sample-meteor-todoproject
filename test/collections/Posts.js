Posts = new Mongo.Collection("posts");

/*Posts.allow({
	insert: function(userId, doc) {
		if(doc.author!=='Bibi') {
			throw new Meteor.Error(403, "You don't have authorizations to insert a new posts");
		}

		return true;
	}
});*/

Posts.allow({
	insert: function() {return true;},
	update: function() {return true;},
	remove: function() {return true;}
});

Meteor.methods({
	"insertPost": function(doc) {
		if(doc.author!=='Bibi') {
			throw new Meteor.Error(403, "No Authorization");
		}
		return Posts.insert(doc);
	}
});

Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		max: 200
	},
	author: {
		type: String,
		max: 200
	},
	content: {
		type: String,
		max: 2000
	},
	createdAt: {
		type: Date,
		denyUpdate: true,
		autoValue: function() {
			if(this.isInsert) {
				return new Date;
			} else if(this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	}
}));