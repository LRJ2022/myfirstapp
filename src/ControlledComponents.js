//dvs. input eller dropdown elementer

import React from "react";


export class App extends React.Component{
    constructor(){
        super()
        this.state={
            valueA: "Value from A",
            valueB: "value from B"
        }
        this.HandleChange=this.HandleChange.bind(this)
    }

    HandleChange(event){ 
        let inputname=event.target.name;
        let inputValue=event.target.value;
       let newstate={ };
        newstate[inputname]=inputValue;
        this.setState(newstate)
    }
    render(){
return (
    <>
        <input name="valueA" onChange={this.HandleChange} value={this.state.valueA}></input>
        <input name="valueB" onChange={this.HandleChange} value={this.state.valueB}></input>

    </>
    )   
}
}