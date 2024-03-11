import React from "react";

/*export class Count extends React.Component{
    constructor(props){
        super(props)
        this.state={counter: 0};
        this.HandleClick = this.HandleClick.bind(this)
    } 
    HandleClick(){
        this.setState({counter: this.state.counter+1});
    }
    render(){
        return(
            <button onClick={this.HandleClick}>
                Click! {this.state.counter}
            </button>
        )
    }
}*/
//state skal helt ikke bruges direkt i opdateringen, som vi gør i ovenstående, da den godt kan "bundle" med andre værdier

//eksempel på dette ses nedenunder
/*export class Count extends React.Component{
    constructor(props){
        super(props)
        this.state={counter: 0};
        this.HandleClick = this.HandleClick.bind(this)
    } 
    HandleClick(){
        this.setState({counter: this.state.counter+1});
        this.setState({counter: this.state.counter+1});
        this.setState({counter: this.state.counter+1});
        this.setState({counter: this.state.counter+1});
    }
    render(){
        return(
            <button onClick={this.HandleClick}>
                Click! {this.state.counter}
            </button>
        )
    }
}*/
//i ovenstående burde state tælle 4 op hver gange, men det gør den ikke, setstate er asynkron, de bliver derfor ikke håndteret på samme tid, de bliver kørt "ved siden af hinanden"
//det betyder de alle har udgangsværdien

//nedenunder er en anden metode, at bruge det på
export class Count extends React.Component{
    constructor(props){
        super(props)
        this.state={counter: 0};
        this.HandleClick = this.HandleClick.bind(this)
    } 
    HandleClick(){
        this.setState((prevState, props)=>{     //props bruges ikke her, derfor kan den her bare slettes
            return {counter: prevState.counter+1}
         })   
         this.setState((prevState, props)=>{
            return {counter: prevState.counter+1}
         })   
         this.setState((prevState, props)=>{
            return {counter: prevState.counter+1}
         })         //fordelen ved callback er at react giver os nogle værdier, nemlige (prevState og props.)
                    //Man må ALDRIg sætte værdien på state direkte
    }
    render(){
        return(
            <button onClick={this.HandleClick}>
                Click! {this.state.counter}
            </button>
        )
    }
}