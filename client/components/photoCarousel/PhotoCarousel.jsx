import React from "react";
import $ from 'jquery';
import BackButton from "./BackButton.jsx";
import ForwardButton from "./ForwardButton.jsx";
import '../../style.module.css';


var PhotoCarousel = (props) =>{
  //temp for working
  $('body').css("background-color", "262626");


  return (
    <div className="photoCarousel"> 
      <div className="pcExitContainer">
        <input onClick={()=>{props.returnToMainPage()}} type="image" src="./media/cancel.svg" alt='https://www.flaticon.com/authors/hadrien' className="pcExitButton pcExitImg "></input>
      </div>
      <div className="pcCurrentPhotoBox">
        <span>
          <BackButton changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} windowWidth={props.windowWidth}/>
        </span>
        <input type="image" src={props.currentPhoto.photoURL} alt={props.currentPhoto.photoDescription} className="pcCurrentPhoto" ></input>
        <span>
          <ForwardButton changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} windowWidth={props.windowWidth}/>
        </span>
      </div>
      <div className="pcPhotoSlider">

      </div>
    </div>
  )
}


export default PhotoCarousel;