import React from "react";
import "../style.module.css";


var MainPicture = (props) =>{
  if(props.mainPhoto){
    return (
      <span className="mainPicture">
        <input type="image" src={props.mainPhoto.photoURL} alt="mainPhoto" className="photoSize photoBorder"></input>
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