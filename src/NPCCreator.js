import React from "react";

export class NpcCreator extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            faction: "",
            reputation:"green"
            }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        let inputName=event.target.name
        let inputValue=event.target.value
        let newstate={};
        newstate[inputName]=inputValue
        this.setState(newstate)

    }
    render()
    {
        return(
            <>
            
            <label>Name</label>
            <br/>
            <input name="name" onChange={this.handleChange} value={this.state.name}></input>
            <br/><br/>
            <label>Faction</label>
            <br/>
            <input name="faction" onChange={this.handleChange} value={this.state.faction}></input>
            <br/><br/>
            <label>Reputation</label>
            <br/>
            <select name="reputation" onChange={this.handleChange}>
               <option value="green">Friendly</option>
               <option value="yellow">Neutral</option>
               <option value="red">Hostile</option>
            </select>
            <br/>
            <br/>
            <ShowPlayerData name={this.state.name} faction={this.state.faction} reputation={this.state.reputation}/>
            </>
        )
    }
}

function ShowPlayerData(props){
    let color=props.reputation
    return(
        <div style={{color: color, float: "right", width:"200 px"}}>
            <p><i>{props.name}</i></p>
            <p><b>&lt;{props.faction}&gt;</b></p>
        </div>
    )
}