import React, {useState} from "react"

function InputHooks(props){                 //denne komponent kalder samme funktion, men har tra forskellige "stat"-værdier
    let inputName=useFormInputHook("")
    let inputFaction=useFormInputHook("")
    let inputReputation=useFormInputHook("green")
    return(
        <>
       <label>Name</label>
       <br/>

        <input {...inputName}></input>
        <br/>        <br/>
        <label>Faction</label>
        <br/>
        <input {...inputFaction}></input>
        <br/>        <br/>
        <label>Reputation</label>
           <br/>
            <select {...inputReputation}>
               <option value="green">Friendly</option>
               <option value="yellow">Neutral</option>
               <option value="red">Hostile</option>
            </select>
            <br/>        <br/>
            <ShowPlayerData reputation={inputReputation.inputValue} name={inputName.inputValue} faction={inputFaction.inputValue}/>
        </>
       
    )
}
export default InputHooks

function useFormInputHook(initialValue){
    const[inputValue, setInputValue]= useState(initialValue);                   //useState er bare en funktion, som kaldes
    function HandleChange(event){
        setInputValue(event.target.value)
    }
    
    return {inputValue: inputValue, onChange:HandleChange }
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

