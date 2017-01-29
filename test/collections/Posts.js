Posts = new Mongo.Collection("posts");

Posts.allow({
	insert: function(userId, doc) {
		if(doc.author!=='Bibi') {
			throw new Meteor.Error(403, "You don't have authorizations to insert a new posts");
		}

		return true;
	}
});

Meteor.methods({
	"insertPost": function(doc) {
		if(doc.author!=='Bibi') {
			throw new Meteor.Error(403, "No Authorization");
		}
		return Posts.insert(doc);
	}
})