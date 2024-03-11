import React, {useState, useEffect} from "react";

function WatchWidthHooks(){
    const[time, setTime]=useState(new Date())
    
    useEffect(()=>{
        var intervalID=setInterval(()=>{setTime(new Date())},1000)
        return()=>{            
            clearInterval(intervalID);      
        }
    })

    return(
        <>
        <h1>Current time: {time.toLocaleTimeString()}</h1>
        </>
    )
}
export default WatchWidthHooks


