import React from "react";
export default GetWinner;

function GetWinner(props){
let element =
<>
<   Greeting winner={props.inputOne}/>
    <h1>First Place: {props.inputOne}</h1>
    <h2>Second Place: {props.inputTwo}</h2>
    <h3>Third Place: {props.inputThree}</h3>
</>
return element;
}  

function Greeting(props){
    return <h1><b>Hello you are the winner {props.winner}</b></h1>
}

