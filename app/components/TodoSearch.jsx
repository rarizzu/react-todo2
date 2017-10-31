//for this component, instead of submitting a form, you will listen for changes

var React = require('react');

var TodoSearch = React.createClass({

handleSearch: function () {
    //checks the checkbox to see if it is actually checked
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
},

    render: function () {
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch} />  
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
                        Show Completed Todos
                    </label>
                </div>
            </div>
        )
    }


});

module.exports = TodoSearch;