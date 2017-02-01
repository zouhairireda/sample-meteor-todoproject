Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: "accueil",
    action: function() {
    	Session.set("title", "MeteorJS Course");
    },
	data: function(){

		var posts = Posts.find();

		return {
			posts: posts
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPostHeaders");
	}
});

Router.route('/form', {
	name: "form",
	data: function() {
		var posts = Posts.find();
		return {
			posts: posts
		};
	},
	waitOn: function() {
		return Meteor.subscribe("allPostHeaders");
	}
	/*data: function(){

	}*/
});

Router.route('/post/:_id', {
	name: "post",
	data: function() {
		return {
			id: this.params._id
		}
	}
});

Router.route('/posts', {
	name: "posts",
	data: function(){
		return {
			posts: [
				{
					title: "Premier post",
					hide: true
				},
				{
					title: "Second post",
					hide: false
				},
				{
					title: "Troisième post",
					hide: false
				}
			]
		};
	}
});

Router.route('/register', {
	name: "register"
});

Router.route('/login');

Router.route('/addPost');

Router.onBeforeAction(function() {
	if(!Meteor.userId()) {
		this.render("login");
	} else {
		this.next();
	}
}, {
	except: [
		"login"
	]
});

/*Router.route('/add/:num1/:num2', {
	name: "add",
	template: "calc",
	data: function() {
		var num1 = parseInt(this.params.num1);
		var num2 = parseInt(this.params.num2);
		return {
			res: num1 + num2
		};
	}
});

Router.route('/sub/:num1/:num2', {
	name: "sub",
	template: "calc",
	data: function() {
		var num1 = parseInt(this.params.num1);
		var num2 = parseInt(this.params.num2);
		return {
			res: num1 - num2
		}
	}
});

Router.route('/multi/:num1/:num2', {
	name: "multi",
	template: "calc",
	data: function() {
		var num1 = parseInt(this.params.num1);
		var num2 = parseInt(this.params.num2);
		return {
			res: num1 * num2
		}
	}
});

Router.route('/div/:num1/:num2', {
	name: "div",
	template: "calc",
	data: function() {
		var num1 = parseInt(this.params.num1);
		var num2 = parseInt(this.params.num2);
		return {
			res: num1 / num2
		}
	}
});*/