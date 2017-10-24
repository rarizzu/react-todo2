var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require("AddTodo");
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: "walk the dog"
                }, {
                    id: 2,
                    text: "clean the yard"
                }, {
                    id:3,
                    text:"clean kitchen"
                },
                {
                    id: 4,
                    text:"clean car"
                }
            ]
         }
    },

    handleAddTodo: function (text) {
        alert('new todo: ' + text);
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
            <TodoList todos = {todos}/>
            <AddTodo onSearch={this.handleAddTodo} />
        </div>
    )
}

});

module.exports = TodoApp;