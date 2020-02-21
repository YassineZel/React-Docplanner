import React from 'react';


const Officestitle = (props) => {
    return (<li >
 
    <h1 className="grandtitre" >{props.data.title}</h1>
    <p >{props.data.text}</p>
    </li>

    )

}


export default Officestitle;