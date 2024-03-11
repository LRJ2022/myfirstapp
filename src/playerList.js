import React from "react";
function Updateselected(name)
{
  return name;
}

export class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      players: [
        "Mystagogical",
        "Ennui_Pugil",
        "Pugiltan2007",
        "OlerUndern",
        "Undernpea27",
        "Teutomania",
        "Bxx1000Ure",
        "Urega3r",
        "FloroAmerce",
        "Amercedus2003",
      ]
    };
    this.HandleClick=this.HandleClick.bind(this)
    this.deletePlayer=this.deletePlayer.bind(this)
  }
  HandleClick(name){
    this.setState((prevState)=>{
      var isSelected = name === prevState.selected //isselected er lig med navnet, men kun hvis navnet er lig med det der allerede er valgt og så skal den returnere ""
      return {selected: isSelected ? "": name}
    });
  }
  deletePlayer(name) {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player !== name)
    }));
  }
  render(){
    var player =this.state.players.map(n=> <PlayerRow key={n} name={n} selected={this.state.selected} HandleClick={()=>this.HandleClick(n)} deletePlayer={this.deletePlayer}/>)
    return(
    <>
    <h1>Selected: {this.state.selected}</h1>
        {player}
        </>
    )
  }
}

function PlayerRow(props){
  var player = props.selected!==props.name ? <p>{props.name}</p> : <SpanPlayer name={props.name} deletePlayer={props.deletePlayer} /> 
  return (
  <div onClick={props.HandleClick}>
  {player}
  </div>
  )
}

function SpanPlayer(props)
{
  function clickButton(){
    props.deletePlayer(props.name)
  }
  return (
    <>
    <div>
    <button onClick={clickButton}>x</button>
    ----&gt; {props.name}
    
    </div>
    </>
  )
}
  

