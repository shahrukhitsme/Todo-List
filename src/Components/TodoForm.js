import React, {Component} from 'react';

class TodoForm extends Component{
    componentDidMount(){
        let title = document.getElementById("title");
        if(title)
        {
            title.value=this.props.data.title
            document.getElementById("body").value = this.props.data.body;
        }
    }

    render(){
        return (<div/>);
    }
}

export default TodoForm;