import React from "react"
import PhotoArray from "./PhotoArray.jsx";
import $ from "jquery";
import '../../style.module.css';

var PhotoSlider = (props)=>{
  if(props.PhotoSlider){
    //photo carousel
    return (
      <div>
        <div className="pcPhotoDescription">

        </div>
        <div className="pcPhotoSliderToggler">

        </div>
      </div>
    )
  } else {
    return (
      <div className="pcUnderSliderContainer" >
        <div className="pcUnderPhoto">
            <span className="pcCurrentPhotoDescription pcText">
              {`${props.currentPhotoIndex +1}/${props.photos.length}: ${props.currentPhoto.photoDescription}`}
            </span>
            <span className="pcPhotoSliderToggler pcText">
              <button className="pcText pcPhotoArrayButton" type="button" >
                Hide photo list
              </button>
            </span>
        </div>
        <div className="pcPhotoSliderCarousel">
          <PhotoArray sliderWidth={$(".pcPhotoSliderCarousel").width()} currentPhotoIndex={props.currentPhotoIndex} changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} photos={props.photos} />
        </div>
      </div>
      
    )
  }
}






export default PhotoSlider;
