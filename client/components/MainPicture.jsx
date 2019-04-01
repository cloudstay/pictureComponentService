import React from "react";
import "../style.module.css";


var MainPicture = (props) =>{
  if(props.photo){
    return (
      <span>
        <input type="image" src={props.photo.photoURL} alt="mainPhoto" className="mainPicture photoBorder"></input>
      </span>
    )
  } else{
    return (
      <div>
        I am photo
      </div>
    )
  }
}


export default MainPicture;