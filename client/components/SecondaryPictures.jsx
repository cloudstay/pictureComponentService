import React from "react";
import "../style.module.css";

var SecondaryPictures = (props)=>{
  return (
    <span className="secondPics">
      <div>
        <input type="image" src={props.photos[1].photoURL} alt="topSecondPhoto" className="photoSize topPhoto photoBorder"></input>
      </div>
      <div>
       <input type="image" src={props.photos[2].photoURL} alt="botSecondPhoto" className="photoSize photoBorder"></input>
     </div>
    </span>
    
  )
}

export default SecondaryPictures;