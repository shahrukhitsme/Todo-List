import React, {Component} from 'react';
import '../styles/ListItem.css';
import { findAllByPlaceholderText } from '@testing-library/dom';
let openNoteFlag = true;

class ListItem extends Component{
    state = {body: "", title: "", id:""};

    createTitle = () =>{
        let title = this.props.title;
        let body = this.props.body;
        let id = this.props.id;
        
        if(title.length >= 50 || title=="")
        {
            title = body.substr(0, 50);
        }
        
        this.state = {body: body, title: title, id: id};
        return title;
    }

    openNote = () =>{
        if(openNoteFlag)
            this.props.openTodo({type:"openItem",title:this.state.title,body:this.state.body,id:this.state.id});
        openNoteFlag=true;
    }

    keyDown = (e) => {
        let row = e.target.parentElement.parentElement;
        row.style.transform = "translateY(0)";
        row.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.4)";
    }

    keyUp = (e) => {
        let row = e.target.parentElement.parentElement;
        row.style="";
    }

    deleteTodo = () => {
        openNoteFlag = false;
        this.props.removeTodo(this.state);
    }

    render(){
        return (
            <tr className="listItem" onClick={this.openNote}>
                <td id="titleColumn">
                    <blockquote>{this.createTitle()}</blockquote>
                </td>
                <td id="deleteBtnColumn">
                    <button id="deleteBtn" class="waves-effect waves-light" onMouseDown={this.keyDown} onMouseUp={this.keyUp} onClick={this.deleteTodo}>-</button>
                </td>
            </tr>
        );
    }
}

export default ListItem;