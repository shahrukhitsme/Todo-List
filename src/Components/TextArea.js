import React, {Component} from 'react';
import RandomColors from './RandomColors';
import TodoForm from './TodoForm';
import '../styles/TextArea.css';

class TextArea extends Component{

    guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    cancelNote = () =>{
        let response = {
            noteSaved : false,
            title: "",
            body: "",
            id: ""
        };
        this.props.closeNote(response);
    }

    saveNote = () => {
        let ID;
        if(this.props.data.id!="")
            ID = this.props.data.id;
            else
            ID=this.guidGenerator();
        let response = {
            noteSaved : true,
            title: document.getElementById("title").value,
            body: document.getElementById("body").value,
            id: ID
        };
        this.props.closeNote(response);
    }

    openNote = () =>{
        if(this.props.openNote==true){
            return (
                <div style={{height: "100%"}}>
                    <table style={{height: "91%"}}>
                        <tr id="titleRow" style={{height: "10%"}}>
                            <div class="input-field col s6" style={{marginLeft: "17px", marginRight: "11px"}}>
                            <input autoFocus id="title" type="text" autoComplete="off"/>
                            <label for="title" style={{left:0, color: "white"}}>Title</label>
                            </div>
                        </tr>
                        <tr id="bodyRow">
                            <div class="row" style={{marginLeft: "7px"}}>
                                <div class="input-field col s12">
                                    <textarea id="body" class="materialize-textarea"></textarea>
                                    <label for="body" style={{color: "white"}}>Body</label>
                                </div>
                            </div>
                        </tr>
                    </table>
                    <table>
                        <tr id="buttonsRow">
                            <td id="cancelBtnColumn"><a class="waves-effect waves-light btn" id="cancelBtn" onClick={this.cancelNote}>Cancel</a></td>
                            <td id="saveBtnColumn"><a class="waves-effect waves-light btn" id="saveBtn" onClick={this.saveNote}>Save</a></td>
                        </tr>
                    </table>
                    <TodoForm data={this.props.data}/>
                </div>
            );
        }
        else
        {
            return (<RandomColors/>);
        }
    }

    render(){
            return (
                <div id="textArea">{this.openNote()}</div>
            );
        }
}

export default TextArea;