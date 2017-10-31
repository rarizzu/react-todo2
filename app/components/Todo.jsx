var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {text, id, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
            if (completed) {
                var currentMoment = moment.unix(completedAt).format("MMM Do YYYY @ h:mm a");
                return "Completed on " + currentMoment
         }

            else {
                var currentMoment = moment.unix(createdAt).format("MMM Do YYYY @ h:mm a");
                return "Created at " + currentMoment

            }
           
        }
        return (
            //you can add functions 
            <div onClick = {() => 
                {this.props.onToggle(id);   
                }}>
                
                <input type="checkbox" checked ={completed} ref="completed" />
                <p> {text} {renderDate()} </p>
            </div>
        )
    }
});


module.exports = Todo;