import React, {Component} from 'react';

class RandomColors extends Component{

    state={backgroundColor:"#000", timerStarted: false}

    randNum = () => Math.floor(Math.random()*100);

    changeColor = () =>{
        this.setState({backgroundColor:`rgb(${this.randNum()},${this.randNum()},${this.randNum()})`});
    }

    startTimer = () =>{
        if(!this.state.timerStarted)
        {
            this.setState({timerStarted: true});
            let myTimer = setInterval(this.changeColor, 400);

        }
    }

    render(){
        this.startTimer();
        return (
            <div id="colour-changer" style={{backgroundColor:this.state.backgroundColor, height:"100%", width:"100%", borderRadius:"8px", transition:"background-color 0.7s"}}></div>
        );
    }
}

export default RandomColors;