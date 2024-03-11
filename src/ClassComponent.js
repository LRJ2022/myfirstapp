import React from "react";
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
