import moment from 'moment';

export default class Actions {

    static addTodo = (name, isDaily, todos) => {
        var nextTodoId = (todos[todos.length-1].id) + 1;
        var yesterday = moment().subtract(1,'days');
        var newObj = {
            id: nextTodoId,
            name: name, 
            isDone: false,
            isDaily: isDaily,
            lastDone: yesterday
        };
        var newTodos = todos;
        newTodos.push(newObj);
        localStorage.setItem('todos',JSON.stringify(newTodos));
        return {
            type: 'TODO_ADDED',
            payload: newTodos
        }
    }

    static completeTodo = (todo, todos) => {
        var newTodos = todos.map((item) => {
            if (item.id === todo.id) {
                item['isDone'] = true;
                if (item.isDaily) {
                    let today = moment();
                    item['lastDone'] = today;
                }
            }
            
            return item;          
        });
        localStorage.setItem('todos',JSON.stringify(newTodos));
        return {
            type: 'TODO_DONE',
            payload: newTodos
        }
    }

    static removeTodo = (todo, todos) => {
        var newTodos = todos.filter((item) => {
            return item.id !== todo.id;    
        });
        localStorage.setItem('todos',JSON.stringify(newTodos));
        return {
            type: 'TODO_REMOVED',
            payload: newTodos
        }
    }

}