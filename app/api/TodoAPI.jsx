var $ = require('jquery');



module.exports = {
    setTodos:  (todos) => {
        //this $.isArray will return true of false if that is an array or not
        if($.isArray(todos)) {
            //need to store is as a JSON string, Local storage cannot store your objects or arrays
            localStorage.setItem("todos", JSON.stringify(todos));
            //need to still return something, so then you will know when you 
            //pass in bad data because it will return undefined
            return todos;
        }
    },

    getTodos: () => {
        var stringTodos = localStorage.getItem("todos");
        var todos = [];
        
        try {
            todos = JSON.parse(stringTodos);
        }
        catch (e) {        
        }
        
        return $.isArray(todos) ? todos : []
            
    }
};