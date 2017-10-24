var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require("AddTodo");
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: "walk the dog",
                    completed: false
                }, {
                    id: uuid(),
                    text: "clean the yard",
                    completed: true
                }, {
                    id: uuid(),
                    text:"clean kitchen",
                    completed: false
                },
                {
                    id: uuid(),
                    text:"clean car",
                    completed: true
                }
            ]
         }
    },

    handleAddTodo: function (text) {
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