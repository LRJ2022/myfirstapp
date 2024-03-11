import React from "react";

function Darkness(){
    return(
        <div style={{width:"500 px", height:"500px", background:"black"}}></div>
    )
}



export class LightSwitch extends React.Component{
    constructor(props){
        super(props)
        this.state=({lightstate:"off"})
        this.HandleState=this.HandleState.bind(this)
    }
    
    HandleState(){
        this.setState((prevState)=>{   
            let newState = prevState.lightstate ==="off" ? "on" : "off"
            return {state: newState}
         })           
    }
    

    render(){
        let darkness=this.state.lightstate==="off" &&<Darkness/>;
        return(
            <>
            <button onClick={this.HandleState}>Turn {this.state.lightstate}</button>
            {darkness}
            </>
        )
    }

}