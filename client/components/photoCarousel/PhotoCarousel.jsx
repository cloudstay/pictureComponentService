import React from "react";
import $ from 'jquery';
import BackButton from "./BackButton.jsx";
import ForwardButton from "./ForwardButton.jsx";
import PhotoSlider from "./PhotoSlider.jsx";
import '../../style.module.css';


var PhotoCarousel = (props) =>{
  //temp for working
  $('body').css("background-color", "262626");


  return (
    <div> 
      <div className="pcExitContainer">
        <input onClick={()=>{props.returnToMainPage()}} type="image" src="./media/cancel.svg" alt='https://www.flaticon.com/authors/hadrien' className="pcExitButton pcExitImg "></input>
      </div>
      <div className="pcCurrentPhotoBox">
        <span>
          <BackButton changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} windowWidth={props.windowWidth}/>
        </span>
        <div className="pcSliderContainer">
          <input onClick={()=>props.changePhotoCarMainPhoto('+')} type="image" src={props.currentPhoto.photoURL} alt={props.currentPhoto.photoDescription} className="pcCurrentPhoto" ></input>
          <PhotoSlider photos={props.photos} currentPhoto={props.currentPhoto} showPhotoSlider={props.showPhotoSlider} toggleShowSlider={props.toggleShowSlider}/>
        </div>
        <span>
          <ForwardButton changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} windowWidth={props.windowWidth}/>
        </span>
      </div>
    </div>
  )
}


export default PhotoCarousel;