import React from "react";
import SecondaryPics from "./SecondaryPictures.jsx";
import EndPics from "./EndPictures.jsx";
import "../style.module.css";


var MainPicture = (props) =>{
  if(props.mainPhoto){
    return (
      <span>
        <input type="image" src={props.mainPhoto.photoURL} alt="mainPhoto" className="mainPicture photoBorder"></input>
        <SecondaryPics photos={props.photos} />
          {/* <EndPics photos={photos}/> */}
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