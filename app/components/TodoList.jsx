var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        //pull todos off of props which is an array
        var {todos, onToggle} = this.props;
        var renderTodos = () => {
            return todos.map(function (todo) {
                return(
                    //pass in the spread operator so everu attribute of the todo is passed down as a prop
                    <Todo key={todo.id} {...todo} onToggle={onToggle}/>
                )
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;