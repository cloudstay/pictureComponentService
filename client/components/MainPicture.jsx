import React from "react";
import "../style.module.css";


var MainPicture = (props) =>{
  if(props.mainPhoto){
    return (
      <span>
        <input type="image" src={props.mainPhoto.photoURL} alt="mainPhoto" className="mainPicture photoBorder"></input>
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