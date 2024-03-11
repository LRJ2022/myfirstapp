import React from "react";

export class Count2 extends React.Component{
    constructor(props){
        super(props)
        this.state={counter: 0, width:window.innerWidth, Height: window.innerHeight};
        this.HandleClick = this.HandleClick.bind(this)
    } 

    HandleClick(){
        var newWidth = window.innerWidth
        this.setState({with: newWidth
        })   
    }
    render(){
        return(
            <>
            <button onClick={this.HandleClick}> 
                Click! {this.state.counter}
            </button>
            <h4>Window Width: {this.state.width}</h4>
            </>
        )
    }
}