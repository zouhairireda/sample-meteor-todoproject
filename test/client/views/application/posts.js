Template.post.helpers({
	initNumber: function(number) {
		return number;
	}
});

Template.posts.events({
	'click .alert': function(e) {
		alert("CLiiiiick done");
	}
});