var React = require('react');
var uuid = require('node-uuid');
var moment = require("moment");
////////////////////////////////////
var TodoList = require('TodoList');
var AddTodo = require("AddTodo");
var TodoSearch = require('TodoSearch');
var TodoAPI = require("TodoAPI");
/////////////////////////////////////
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
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
            }]
        });
    },

    handleToggle: function (id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                todo.completedAt = todo.completed ? moment().unix() : undefined
            }
            return todo
        });

        this.setState({
            todos : updatedTodos,
            
        })

    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted : showCompleted,
            searchText: searchText.toLowerCase()
        })
    },


render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
        <div>
            <h1 className="page-title">TodoApp</h1>

            <div className="row">  
                <div className="column small-centered small-11 medium-6 large-5">
                    <div className="container">
                        <TodoSearch onSearch = {this.handleSearch} />
                        <TodoList todos = {filteredTodos} onToggle={this.handleToggle}/>
                        <AddTodo onSearch={this.handleAddTodo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

});

module.exports = TodoApp;