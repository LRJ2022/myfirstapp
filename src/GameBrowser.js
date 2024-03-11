import React from "react";
import GameAPI from "./GameApi";
import "./GameBrowser.css";


export class GameBrowser extends React.Component{
    constructor(props){
        super(props);
        let lobbyData=GameAPI.getLobbyData();
        this.state = {lobbydata: lobbyData, selection:""};
        this.selectedRow=this.selectedRow.bind(this);
        this.CloseWindow=this.CloseWindow.bind(this);
    }
    selectedRow(id){
        this.setState(()=>{
            return {selection:id}
        })
    }

    CloseWindow(){
        this.setState((prevstate)=>{
            let status = prevstate.selection!==""?"":prevstate
            return {selection: status}
        })
        } 
    
    render(){
        let view = this.state.selection==="" ?<GameTable lobbydata={this.state.lobbydata} SelectedRow={this.selectedRow}/>
        :<Serverdata id={this.state.selection} Close={this.CloseWindow}/>
        return(
          <>
            {view} 
            </>
        )
    }
}

export class GameTable extends React.Component{
    constructor(props){
    super(props)
    this.state={sorting:{column:"name",
                isAsending: true,
            }}
    this.sortList=this.sortList.bind(this)
    this.sortGames=this.sortGames.bind(this)
    
    }
    
    sortList(sorttype){
        this.setState(prevState => {
            let newColumn = prevState.sorting.column !== sorttype;
            let asc = newColumn ? true : !prevState.sorting.asc;
            return { sorting: { column: sorttype, asc: asc } };
          });
        }

        sortGames(a, b) {
            let sortVal = 0;
            switch (this.state.sorting.column) {
              case "name":
                sortVal = a.name.localeCompare(b.name);
                break;
              case "playerCount":
                sortVal = a.playerCount - b.playerCount;
                break;
              case "latency":
                sortVal = a.latency - b.latency;
                break;
              case "gameType":
                sortVal = a.gameType.localeCompare(b.gameType);
                break;
            }
            return this.state.sorting.asc ? sortVal : sortVal * -1;
        }

    render(){
        let tableRow =this.props.lobbydata.sort(this.sortGames).map(n=><TableRow key={n.id} {...n} Details={this.props.SelectedRow}/>)
    return(
    <table className="TableStyle">
        <thead>
        <tr>
            <th onClick={()=>this.sortList("name")}>Name</th>
            <th onClick={()=>this.sortList("playerCount")}>Players</th>
            <th onClick={()=>this.sortList("latency")}>Latency</th>
            <th onClick={()=>this.sortList("gameType")}>Type</th>
        </tr>
        </thead>
        <tbody>
        {tableRow}
        </tbody>
    </table>
    )
    }
}

function TableRow(props){
    let latencyColor="green"
    if(props.latency>20 &&props.latency<60) latencyColor="yellow"
    if(props.latency>60) latencyColor="red"
    return(
        <tr>
            <td onClick={()=>props.Details(props.id)}>{props.name}</td>
            <td><b>{props.playerCount}/{props.capacity}</b></td>
            <td style={{color:latencyColor}}>{props.latency}</td>
            <td>{props.gameType}</td>
        </tr>
    )
}

function Serverdata(props){
    let data=GameAPI.getServerInfo(props.id)
    let player = data.players.map((n, index)=><p key={index}>{n}</p>)
    let playerCount=data.players.length;
    console.log("Count", playerCount)
    return (
        <>
        <button onClick={props.Close}>Close</button>
        <h3>Server info:</h3>
        <table>
            <tr>
            <td>Server id:</td>
            <td>{data.id}</td>
            </tr>
            <tr>
            <td>Server name:</td>
            <td>{data.name}</td>
            </tr>
            <tr>
            <td>Game type:</td>
            <td>{data.gameType}</td>
            </tr>
            <tr>
            <td>Game Version:</td>
            <td>{data.gameVersion}</td>
            </tr>
            <tr>
            <td>Server type:</td>
            <td>{data.serverType}</td>
            </tr>
            <tr>
            <td>Location:</td>
            <td>{data.location}</td>
            </tr>
            <tr>
            <td>Latency:</td>
            <td>{data.latency}</td>
            </tr>
        </table>
        <h3>Players {playerCount}&#47;{data.capacity}</h3>
        {player}
        </>
    )
}


