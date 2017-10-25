var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require("AddTodo");
var TodoSearch = require('TodoSearch');
var TodoAPI = require("TodoAPI");

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
         }
    },
//gets fired after the props or the state updates, so then you need to set your todos based off of the state
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },

    handleAddTodo: function (text) {
        //set it as its orginal state, with the new todo on the back
        this.setState({
            todos : [
                ...this.state.todos,
                {
                    //uuid is a node library that can generate random ids for you
                    id: uuid(),
                    text: text,
                    completed: false
            }]
        });
    },

    handleToggle: function (id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        });

        this.setState({
            todos : updatedTodos
        })

    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted : showCompleted,
            searcText: searchText.toLowerCase()
        })
    },


render: function () {
    var {todos} = this.state;

    return (
        <div>
            <TodoSearch onSearch = {this.handleSearch} />
            <TodoList todos = {todos} onToggle={this.handleToggle}/>
            <AddTodo onSearch={this.handleAddTodo} />
        </div>
    )
}

});

module.exports = TodoApp;