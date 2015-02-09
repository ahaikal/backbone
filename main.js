

$(document).ready(function() {

	var app ={};

	app.Todo = Backbone.Model.extend({

		defaults: {
			title: '',
			completed: false
		}
	});

	app.TodoList = Backbone.Collection.extend({
      model: app.Todo,
      localStorage: new Store("backbone-todo")
    });

    app.todoList = new app.TodoList();
    var todoList = new app.TodoList()
	todoList.create({title: 'Learn Backbone\'s Collection'});
	console.log(todoList.pluck('title'));
});

