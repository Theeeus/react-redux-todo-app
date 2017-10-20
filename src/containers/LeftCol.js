import React, { Component } from 'react';
import './LeftCol.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/index'

class LeftCol extends Component {

    newTodo(event) {
        event.preventDefault();
        var name = event.target.name.value;
        var isDaily = event.target.checkbox.checked;
        this.props.newTodo(name, isDaily, this.props.todos); //Ver se tem como pegar os todos dentro do actions/index.js
        document.getElementById("addTodoForm").reset();
    }

    render() {
        return (
            <div className="LeftColContainer">
                <h3>Add new Task</h3>
                <form onSubmit={this.newTodo.bind(this)} id="addTodoForm">                      
                    <label>
                        <input type="checkbox" name="checkbox" />
                        <span>Repeat daily?</span>
                    </label>
                    <input type="name" name="name" placeholder="Task name" />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({newTodo: actions.addTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftCol);