import React from "react";
import quotesData from "./quotes.json"

class Quote extends React.Component {
    
    constructor() {
        super();
        this.state ={
            selectedIndex : Math.floor(Math.random() * (quotesData.length-1 - 0))
        }
    }
    render(){
        const val = quotesData[this.state.selectedIndex]
   
    
    return (
        <h3>{val.quote}<br/><span className="author">{val.author}</span></h3>
        )
    }
}

export default Quote