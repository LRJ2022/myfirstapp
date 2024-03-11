import React, { useState } from "react";

function InputHook(props){
    let input=useFormInputHook()
    console.log(input)
    return(
        <>
        <input {...input}></input>
        <p>You Wrote: {input.inputValue}</p>
        </>
    )
}

function useFormInputHook(initialValue){
    const[inputValue, setInputValue]=useState(initialValue);                   //useState er bare en funktion, som kaldes
    function HandleChange(event){
        setInputValue(event.target.value)
    }
    
    return {inputValue: inputValue, onChange:HandleChange }
}

export default InputHooks

//nedeunder er samme eksemple, men med tre inputfelter

function InputHooks(props){                 //denne komponent kalder samme funktion, men har tra forskellige "stat"-værdier
    let input=useFormInputHook("")
    let name=useFormInputHook("")
    let Title=useFormInputHook("")
    let Health=useFormInputHook(0)
    console.log(input)
    return(
        <>
        <input {...input}></input>
        <br/>
        <input {...name}></input>
        <br/>
        <input {...Title}></input>
        <br/>
        <input {...Health}></input>
        </>
    )
}

//Regler for Hooks
//Bruges KUN i funktion Component
//Hooks skal ALTID bruges øverst i scope, de kan IKKE bruge i IF/FOR osv
//Navngives ALTID useXXX