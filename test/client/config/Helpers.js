UI.registerHelper('setAuthor', function() {
	return '<b>Bibi</b>'
});

UI.registerHelper('setTitle', function() {
	if(Session.get('title')) {
		document.title = Session.get('title');
	}
});