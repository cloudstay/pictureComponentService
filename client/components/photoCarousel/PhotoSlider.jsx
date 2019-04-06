import React from "react"
import PhotoArray from "./PhotoArray.jsx";
import $ from "jquery";
import '../../style.module.css';

var PhotoSlider = (props)=>{
    return (
      <div className="pcUnderSliderContainer" >
        <div className="pcUnderPhoto">
            <span className="pcCurrentPhotoDescription pcText">
              {`${props.currentPhotoIndex +1}/${props.photos.length}: ${props.currentPhoto.photoDescription}`}
            </span>
            <span className="pcPhotoSliderToggler pcText">
              <button onClick={()=>{props.toggleShowSlider()}} className="pcText pcPhotoArrayButton" type="button" >
                {props.showPhotoSlider ? 
                  <div className="pcPhotoToggleContainer">
                    <div className="pcText">Hide photo list</div>
                    <img className="pcPhotoToggleImg" src="./media/sort-down.svg" alt="https://www.flaticon.com/authors/dave-gandy"></img>
                  </div> 
                  : 
                  <div className="pcPhotoToggleContainer">
                    <div className="pcText">Show photo list</div>
                    <img className="pcPhotoToggleImg" src="./media/sort-up.svg" alt="https://www.flaticon.com/authors/dave-gandy"></img>
                  </div> }
              </button>
            </span>
        </div>
        {props.showPhotoSlider ? 
        <div className="pcPhotoSliderCarousel">
          <PhotoArray sliderWidth={$(".pcPhotoSliderCarousel").width()} currentPhotoIndex={props.currentPhotoIndex} changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} photos={props.photos} />
        </div> :  <div></div>}
      </div>
    )
}







export default PhotoSlider;
