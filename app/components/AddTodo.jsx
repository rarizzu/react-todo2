var React = require('react');


var AddTodo = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var searchValue = this.refs.search.value;
        if(searchValue.length > 0) {
           this.refs.search.value= '';
           this.props.onSearch(searchValue)
        }
        else {
            this.refs.search.focus();
        } 
    },


    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.onSearch}>
                     <input type="text" placeholder="Add Todo" ref="search" />
                     <button className="button expanded"> Add Todo </button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;