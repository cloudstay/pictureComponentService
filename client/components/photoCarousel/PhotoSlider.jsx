import React from "react"
import '../../style.module.css';

var PhotoSlider = (props)=>{
  if(props.PhotoSlider){
    //photo carousel
    return (
      <div className="pcSliderContainer">
        <div className="pcPhotoDescription">

        </div>
        <div className="pcPhotoSliderToggler">

        </div>
      </div>
    )
  } else {
    return (
      <div >
        <div className="pcPhotoDescription">
            I am description
        </div>
        <div className="pcPhotoSliderToggler">
          I am
        </div>
      </div>
      
    )
  }
}






export default PhotoSlider;
