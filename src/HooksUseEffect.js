//componentDidAmpunt
//ComponentDidUpdate
//ComponenetWillUnmount
//UseEffect kan give os noget lig disse life-cycle effecter

import React,{useEffect, useState} from "react";

export class ClassComponent extends React.Component{
    constructor(){
        super()
        this.state={width: window.innerWidth}
        this.handleResize=this.handleResize.bind(this)
    }

    handleResize(){
        this.setState({width: window.innerWidth})
    }
    componentDidMount(){
        document.title="width: "+this.state.width
        window.addEventListener("resize", this.handleResize)

    }
    componentDidUpdate(){
        document.title="width: "+this.state.width

    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize)
    }
    render(){
        return(
            <>
            <h1>Window width: {this.state.width}</h1>
            </>
        )
    }
}


//ovenstående component, men med en functionKomponeny

function FunctionComponent(props){
    const[width, setWidth]=useState(window.innerWidth)

    function handleResize(){
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        document.title="width: "+width
        return()=>{             //denne funktion bliver kørt, når der ikke længere skal stoppes på elementet, derfor kan removelistener køres i return
            window.removeEventListener("resize", handleResize)      
        }
    })

    return (
    <h3>Window width: {width}</h3>
    )

}

export default FunctionComponent