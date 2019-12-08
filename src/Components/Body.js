import React, {Component} from 'react';
import TodoList from './TodoList';
import TextArea from './TextArea';
import '../styles/Body.css';
import dataFile from '../data/Todos.json';

let notes=dataFile;

class Body extends Component{
    state={noteOpen: false, data:{}};

    newItem = (todo) => {
        if(!this.state.noteOpen)
        {
            this.setState({noteOpen: true, data:todo, justForRefreshing:true});
        }
    }

    removeItem = (todo) => {
        for(let i=0; i<notes.length; i++)
        {
            if(notes[i].id == todo.id)
            {
                notes.splice(i,1);
                break;
            }
        }
        this.setState({justForRefreshing: !this.state.justForRefreshing});
    }

    closeTheNote = (reponse) =>{
        if(reponse.noteSaved)
        {
            let f=0;
            for(let i=0; i<notes.length; i++)
            {
                if(notes[i].id == reponse.id)
                {
                    notes[i].title = reponse.title;
                    notes[i].body = reponse.body;
                    f=1;
                    break;
                }
            }
            if(f==0)
                notes.push(reponse);
        }
        this.setState({noteOpen: false});
    }

    render(){
        //let fs = require("fs");
        //fs.writeFile(dataFile, notes);
        //alert(dataFile.data[0].title);
        //dataFile = notes;
        return(
            <div id="mainBody">
                <TodoList newItemTrigger={this.newItem} removeItemTrigger={this.removeItem} listArray={notes}/>
                <TextArea openNote={this.state.noteOpen} closeNote={this.closeTheNote} data={this.state.data}/>
            </div>
        );
    }
}

export default Body;