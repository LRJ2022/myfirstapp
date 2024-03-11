import React, {useState, useEffect} from "react";

function Watch(){
   let time=useInterval()

    return(
        <>
        <h1>Current time: {time.toLocaleTimeString()}</h1>
        </>
    )
}
export default Watch

function useInterval(){
    const[time, setTime]=useState(new Date())
    
    useEffect(()=>{
        var intervalID=setInterval(()=>{setTime(new Date())},1000)
        return()=>{            
            clearInterval(intervalID);      
        }
    })
    return time
}