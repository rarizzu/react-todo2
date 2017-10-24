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
                    text: "walk the dog"
                }, {
                    id: uuid(),
                    text: "clean the yard"
                }, {
                    id: uuid(),
                    text:"clean kitchen"
                },
                {
                    id: uuid(),
                    text:"clean car"
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
            }]

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
            <TodoList todos = {todos}/>
            <AddTodo onSearch={this.handleAddTodo} />
        </div>
    )
}

});

module.exports = TodoApp;