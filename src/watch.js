import React from "react";
export class Watch extends React.Component {
    constructor(props){
        super(props);
        this.state={time: new Date()};
        this.UpdateTime=this.UpdateTime.bind(this);
       
    }
    componentDidMount(){
        this.intervalID=setInterval(this.UpdateTime,1000)
    }

    UpdateTime(){
        this.setState({time: new Date()})  
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    render(){
        return(
            <>
            <h1>Current time: {this.state.time.toLocaleTimeString()}</h1>
            </>
        );
    }
}

