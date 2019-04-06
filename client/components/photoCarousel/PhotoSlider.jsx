import React from "react"
import PhotoArray from "./PhotoArray.jsx";
import $ from "jquery";
import '../../style.module.css';

var PhotoSlider = (props)=>{
  var photoSliderYTranslation= {
    transform: 'translateY(67px)'
  }
  if(props.showPhotoSlider){
    photoSliderYTranslation.transform='translateY(0px)'
  }else {
    photoSliderYTranslation.transform= 'translateY(67px)'
  }

    return (
      <div className="pcUnderSliderContainer"  onMouseEnter={()=>{props.toggleShowSlider(false)}} style={photoSliderYTranslation}>
        <div className="pcUnderPhoto">
            <span className="pcCurrentPhotoDescription pcText">
              {`${props.currentPhotoIndex +1}/${props.photos.length}: ${props.currentPhoto.photoDescription}`}
            </span>
            <span className="pcPhotoSliderToggler pcText">
              <button onClick={()=>{props.toggleShowSlider(props.showPhotoSlider)}} className="pcText pcPhotoArrayButton" type="button" >
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
        <div className="pcPhotoSliderCarousel" style={props.showPhotoSlider ? {display : 'flex'} :{display : 'none'}  }>
          <PhotoArray sliderWidth={$(".pcPhotoSliderCarousel").width()} currentPhotoIndex={props.currentPhotoIndex} changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} photos={props.photos} />
        </div>
      </div>
    )
}







export default PhotoSlider;
