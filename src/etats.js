import React from 'react';


const Etats = (props) => {
    return (<div className= {props.data.translate && "translation"}>
    <li className="bloc-stats">
 <img  src={props.data.source}></img>
    <h2 className="grandtitre" >{props.data.title}</h2>
    <p>{props.data.text}</p>
    
    </li>

    </div>
    )

}

export default Etats;