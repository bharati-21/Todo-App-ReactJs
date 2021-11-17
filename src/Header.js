import React from "react"
import Logo from "./todo1.png"
import Quote from "./Quote.js"

function Header(){
    const date = new Date();
    /*const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const dateString = day+"/"+month+"/"+year;*/
    return(
        <div>
            <header className="mainHeader">
                <h1 className="blink">MY TO-DO LIST</h1>
                <img src={Logo} alt="Todo list"/>
            </header>
            <div className="quotes">
                <Quote />
            </div>
            <h3 className="date">TO-DO LIST : {date.toDateString()}</h3>
        </div>    
    )
}
export default Header;