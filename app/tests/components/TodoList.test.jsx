var React = require('react');
var ReactDom = require('react-dom');
var TestUtils= require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe("TodoList", () => {
    it("should exist", () => {
        describe("should exist" , () => {
            expect(TodoList).toExist();
        })
    });

    it("should render Todos", () => {
        var todos = [{
            id: 1,
            text: 'Do Something'
        },
          { id: 2,
            text: 'Check mails'
          }];

          var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
          var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)
    
    expect(todosComponents.length).toBe(todos.length);


})
})