import React,{useState} from "react";

//hooks er en tilføjelse til react (16.8)
//det giver os tilladelse til state + lifecycle (amountdid... osv)

function App(props){
    const [count, setCount]=useState(0);        //0 indikere default værdien
    const [position, setPosition]=useState({x:14, y:20});   //her sættes default til et objekt

    //når man så opdaterer
    setPosition({x:50, y:100})  //Hvis det er et objekt, skal hele objektet opdateres, ikke som uden hooks, hvor man bare kunne opdatere den ene
    return (
        <>
        <div>You clicked {count} times!</div>
            <button onClick={()=> setCount(prevState=>prevState+1)}>Click me</button>
        
        </>
    )

}
// hooks giver os mulighed for at bruge state i almindelige functions, så man ikke behøvre lave en class
export default InputHook

function InputHook(props){
    const[inputValue, setInput]=useState("");
    const HandleChange =(event)=>setInput(event.target.value)

   
    return(
        <>
        <input onChange={HandleChange} value={inputValue}></input>
        <p>You Wrote: {inputValue}</p>
        </>
    )
}

