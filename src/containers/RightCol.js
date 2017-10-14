import React, { Component } from 'react';
import './RightCol.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/index'
import moment from 'moment';

class RightCol extends Component {

    render() {
        let todaysTodos = this.props.todos.filter((todo) => {
            return !todo.isDaily;
        });
        let todaysTasks = todaysTodos.map(this.renderTodos.bind(this));

        let dailyTodos = this.props.todos.filter((todo) => {
            return todo.isDaily;
        });
        let dailyTasks = dailyTodos.map(this.renderTodos.bind(this));

        return (
            <div className="RightColContainer">
                <div className="taskCont">
                    <h3>Today's Tasks</h3>
                    <ul>{todaysTasks}</ul>
                </div>
                <div className="taskCont">
                    <h3>Daily Tasks</h3>
                    <ul>{dailyTasks}</ul>
                </div>
            </div>
        );
    }

    renderTodos(todo) {
        let todoClass;
        if (!todo.isDaily && todo.isDone) {
            todoClass = 'todoItem completed';
        } else if (todo.isDaily) {
            let today = moment();
            let diff = today.diff(todo.lastDone, 'days');
            if (!todo.lastDone) {
                todoClass = 'todoItem';
            } else if (diff === 0) {
                todoClass = 'todoItem completed';
            } else if (diff === 1) {
                todoClass = 'todoItem';
            } else if (diff > 1) {
                todoClass = 'todoItem overdue';
            }
        } else {
            todoClass = 'todoItem';
        }

        return (
            <li className={todoClass} key={todo.id}>
                <div className="todoName">{todo.name}</div>
                <div className="iconCont">
                    <span className="glyphicon glyphicon-ok" onClick={() => this.props.completeTodo(todo, this.props.todos)}></span>
                    <span className="glyphicon glyphicon-remove" onClick={() => this.props.removeTodo(todo, this.props.todos)}></span>
                </div>
            </li>
        );
    }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({completeTodo: actions.completeTodo, removeTodo: actions.removeTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RightCol);