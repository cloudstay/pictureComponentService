import React from "react"
import PhotoArray from "./PhotoArray.jsx";
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
              <button type="submit"></button>
            </span>
        </div>
        <div className="pcPhotoSliderCarousel">
          <PhotoArray photos={props.photos} />
        </div>
      </div>
      
    )
  }
}






export default PhotoSlider;
