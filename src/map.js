import React from "react";
export default App

let numbers=[1,2,3,4,5];

function App(props){
    return(
        numbers.map(n=>
            <Component number={n} key={n}/>         //dette skaber en fejl, fordi hvert element ikke har en key, dette er bare et id, som react skal bruge
        ))
}
function Component(props){
    return(
            <p>Number: <i> {props.number}</i></p>
        )
}