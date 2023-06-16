import React from "react"
import './Person.css'


const person = (Value) => {
    return(
        <div className="Person">
             <p onClick={Value.Click}>I'm a {Value.name} I'm{Value.Age}  {Value.gender} !</p>
             <p>{Value.children}</p>
             <input type="text" onChange={Value.Change}></input>
        </div>
        )
}

export default person;