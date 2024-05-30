import { useState } from 'react';



export default function DisplaySongs(props) {

    return (
      <div className="song" style = {{color:"white"}}>
        <img src={props.pics} alt="" /> 
        <h3>Song Name:{props.song}</h3>
        <h4>Album Name:{props.album}</h4>
        <a style = {{color:'lightblue'}}href={props.url}>Click to listen the Song</a>
      </div>
    );
  }
  


  
//   =======just for and example of parameter======
// function add (num1, num2){

// }
// add (10,20)
// parameters are variable names - things the function expectes to be given
// arguments are the values assigned to thoes variable when the function is called