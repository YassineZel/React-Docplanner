import React from 'react';



const Intro = (props) =>{
    return (

<div>
<div className="title-introduction">
<img width="50px"src={props.data.source}/>  
<h1 className="grandtitre">{props.data.title}</h1>
</div>

<div className="paragraph">
<p className="styleoftext">{props.data.pg1} </p>  
<p className="styleoftext" >{props.data.pg2}</p>
</div>
</div> 

       ) }
export default Intro;
