import React, {Component} from 'react';
import '../styles/TodoList.css';
import ListItem from './ListItem';

class TodoList extends Component{
    state={num : 0}

    addTodo = () => {
        this.props.newItemTrigger({type:"newItem",title: "",body: "",id: ""});
    }

    openTodo = (todo) => {
        this.props.newItemTrigger(todo);
    }

    removeTodo = (todo) => {
        this.props.removeItemTrigger(todo);
    }

    TodoItems = () =>{
        let listItems = [];
        let todos = this.props.listArray;
        for(let i=0; i< todos.length; i++)
            listItems.push(<ListItem title={todos[i].title} body={todos[i].body} id={todos[i].id} openTodo={this.openTodo} removeTodo={this.removeTodo}/>);
        return listItems;
    }

    render(){
        return (
            <div id="listArea">
            <label id="myNotes">My Notes</label>    
            <a class="btn-floating btn-small waves-effect waves-light red" id="addTodoBtn" onClick={this.addTodo}>+</a>

            <table id="listTable">
            {this.TodoItems()}
            </table>
            </div>
        );
    }
}

export default TodoList;