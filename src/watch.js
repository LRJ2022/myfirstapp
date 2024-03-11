import React from "react";
export class Watch extends React.Component {
    constructor(props){
        super(props);
        //this.state={time: new Date.now};
        //this.handleTime=this.handleTime.bind(this)
    }

    render(){
        return(
            <>
            <h1>Current time: {this.state.time.toLocalTimeString()}</h1>
            </>
        );
        }
}

    
var inertvalid= setInterval(setDate,1000)
    
function setDate(){
    var settime=document.getElementById("Settime");
    if (settime) {
    var time= new Date()
    settime.innerHTML=time.toDateString();
    console.log("Tid: "+time)
}
}
/*handleTime(){
    setInterval/()
    this.setState({time: Date.now});  
}
componentDidMount(){                       
window.addEventListener("change", this.handleTime)  /

export class ClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={width: window.innerWidth }; //state er et objekt, som vi selv håndterer
        this.handleResizer=this.handleResizer.bind(this); //dette er vores komponent, dette er noget man er nødt til i react, når man bruger callbackmetoder, her bindes metoden til objektet
    }
    handleResizer(){
        this.setState({width: window.innerWidth});        //Opdatere state med et helt nyt objekt
    }
    componentDidMount(){                        //Lytter på et komponent, når det bliver tilføjet
    window.addEventListener("resize", this.handleResizer)  //når en metode bruges uden paranteser, skal den bindes i contstructoren
    }

    componentWillUnmount(){                 //når komponenten bliver fjernet, stopper vi med at lytte
        window.removeEventListener("resize", this.handleResizer)
    }

   // componentDidUpdate(){           //opdatere ved ændringer, denne er ikke nødvendigt, fordi vi bare opretter et nyt objekt hele tiden
        //reacst sammenligner ændringer, derfor indlæser den ikke hele objektet, men kun det der er ændret, det er mere effektivt
    
    
    render() {
        return (
            <>
            <h1>Hello and welcome to {this.props.name}</h1>
            <h2>The Window width is {this.state.width}</h2>   
            </>
        );

    }
}
*/