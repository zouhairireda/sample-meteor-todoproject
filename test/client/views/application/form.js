Template.form.events({
	'submit form': function(e) {
		e.preventDefault();

		var author = $('input[name="auteur"]').val();
		var title = $('input[name="titre"]').val();
		var content = $('textarea[name="contenu"]').val();

		var post = {
			author: author,
			title: title,
			content: content
		};

		Posts.insert(post, function(err, id) {
			if(err) {
				alert(err.reason);
			} else {
				$("form input, form textarea").val("");
			}

		});

		/*Meteor.call("insertPost", post, function(err, id) {
			if(err) {
				alert(err.reason);
			} else {
				$('form input, form textarea').val("");
			}
		});*/
	}
});