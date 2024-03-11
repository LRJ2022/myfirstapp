import React from "react";
export default App;

let playerData={
    avartarUrl: "https://cdn4.iconfinder.com/data/icons/superheoes/512/batman-512.png",
    name: "Alice",
    stats:{
        health: 100,
        strength: 38,
        stamina: 22
    },
    latestAchievement: "[50 Gnoll kills]",
    lastOnline: new Date()
}

function App(){
    return <PlayerInspector player={playerData}/>
}

function PlayerInspector(props){
    return(
        <>
        <PlayerProfile player={props.player}/>
        <PlayerStats stats={props.player.stats} latestAchievement={props.player.latestAchievement}/>
        <PlayerOnline player={props.player}/>
        </>
    )
}

function PlayerProfile(props)
{
    return(
        <>
<       img style={{width: "50px"}} src={props.player.avartarUrl}/>
        <div> {props.player.name}</div>
        </>
    )
}

function PlayerStats(props){
return(
    <>
        <h3>Stats:</h3>
        <ul>
            <li>Health: {props.stats.health}</li>
            <li>Strength: {props.stats.strength}</li>
            <li>Stamina: {props.stats.stamina}</li>
        </ul>
        <b>Latest Achivement</b>
        <div>{props.latestAchievement}</div>
    </>
)
}

function PlayerOnline(props){
    return(     
        <p>
            <i>Last Online: <b>{props.player.lastOnline.toDateString()}</b></i>
        </p>
    )
}