var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
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


render: function () {
    var {todos} = this.state;

    return (
        <div>
            <TodoList todos = {todos}/>
        </div>
    )
}

});

module.exports = TodoApp;