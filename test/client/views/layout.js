Template.mainLayout.events({
	"click .logout": function(event, template) {
		Meteor.logout();
	}
});

Template.mainLayout.helpers({
	"setTitle": function() {
		if(Session.get('title')) {
			document.title = Session.get('title');
		}
	}
});