var React = require('react');
var ReactDom = require('react-dom');
var TestUtils= require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it("should exist", () => {
        expect(TodoSearch).toExist();
    });

    it('should call on search with entered input text', () => {
        var searchText = "dog";
        //spy allows you to pass a function to your component to make sure that it gets called
        var spy = expect.createSpy();    
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

        todoSearch.refs.searchText.value = searchText;
    });


});

