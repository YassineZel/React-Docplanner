import React from 'react';


const Etat = (props) => {
    return (<li>
        
    <h1 className="grandtitre" >{props.data.title1}</h1>
    <h1 className="grandtitre" >{props.data.title2}</h1>
    <p>{props.data.p}</p>
    <img className="image-stats" src={props.data.source}></img>

    </li>

    )

}


export default Etat;