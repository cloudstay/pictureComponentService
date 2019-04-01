import React from "react";
import "../style.module.css";

var EndPictures = (props)=>{
  return (
    <span className="endPics">
      <div>
        <input type="image" src={props.photos[3].photoURL} alt="mainPhoto" className="photoSize topPhoto photoBorder"></input>
      </div>
      <div>
       <input type="image" src={props.photos[4].photoURL} alt="mainPhoto" className="photoSize photoBorder"></input>
     </div>
    </span>
    
  )
}

export default EndPictures;