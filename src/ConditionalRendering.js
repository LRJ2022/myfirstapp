//dynamiske komponenter

import React from "react";
let pg=<PlayerGraphics health={10} name="Alice"/>

function PlayerGraphics(props){
   /*if(props.health>0){
    return( <PlayerIcon/>
       
    )
   }
   else{
   return (<GhostIcon/>)
   }*/
  // eller mere simpelt
    let icon = props.health>0 ? <PlayerIcon/> : <GhostIcon/>        //her returneres en bestemt komponent baseret på input, her er det enten eller
    let icon1 = props.health>0 ? <PlayerIcon/> : <></>        //her returneres en bestemt komponent baseret på input, her er det enten den ene eller ingenting
    let icon2 = props.health>0 && <PlayerIcon/>;            //her returneres en bestemt komponent baseret på input, her hvis første udtryk er true, så vises PlayerIcon, hvis første udtryk er false er hele udtrykket false
    let healthText=props.health > 0 ? props.health : "Dead";
    return(
        <>
        {icon}
        <label>{props.name}</label>
        <label>{healthText}</label>
        </>
    )
}

function PlayerIcon(props){
    return(
        <>
        </>
    )
}

function GhostIcon(props){
    return(
        <>
        </>
    )
  
}






