import React from "react";
import "../style.module.css";

var SecondaryPictures = (props)=>{
  return (
    <div>
      <div>
        <input type="image" src={props.photos[1].photoURL} alt="topSecondPhoto" className="secondPics photoBorder"></input>
      </div>
      <div>
       <input type="image" src={props.photos[2].photoURL} alt="botSecondPhoto" className="secondPics photoBorder"></input>
     </div>
    </div>
    
  )
}

export default SecondaryPictures;