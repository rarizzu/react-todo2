var React = require('react');

var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {text, id, completed} = this.props
        return (
            //you can add functions 
            <div onClick = {() => 
                {this.props.onToggle(id);   
                }}>
                <input type="checkbox" checked ={completed} ref="completed" />
                {text}
            </div>
        )
    }
});


module.exports = Todo;