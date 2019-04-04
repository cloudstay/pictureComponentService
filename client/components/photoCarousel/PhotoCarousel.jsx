import React from "react";
import $ from 'jquery';
import '../../style.module.css';


var PhotoCarousel = (props) =>{
  //temp for working
  $('body').css("background-color", "262626");




  return (
    <div className="photoCarousel"> 
      <div className="exitContainer">
        <input onClick={()=>{props.returnToMainPage()}} type="image" src="./media/cancel.svg" alt='https://www.flaticon.com/authors/hadrien' className="pcExitButton pcExitImg "></input>
      </div>
      <div className="currentPhotoBox">
        <input type="image" src={props.currentPhoto.photoURL} alt={props.currentPhoto.photoDescription} className="pcCurrentPhoto" ></input>
      </div>
      <div className="photoSlider">
          
      </div>
    </div>
  )
}


export default PhotoCarousel;