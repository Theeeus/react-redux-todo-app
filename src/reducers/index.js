import {combineReducers} from 'redux';
import TodosReducer from './reducer-todos.js';
import NewTodoReducer from './reducer-new-todo.js';
import CompleteTodoReducer from './reducer-complete-todo.js';
import RemoveTodoReducer from './reducer-remove-todo.js';
import HighlightTodoReducer from './reducer-highlight-todo.js';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    todos: TodosReducer,
    newTodo: NewTodoReducer,
    completeTodo: CompleteTodoReducer,
    removeTodo: RemoveTodoReducer,
    hightlightTodo: HighlightTodoReducer
});

export default allReducers;