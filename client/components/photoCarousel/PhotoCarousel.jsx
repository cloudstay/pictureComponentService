import React from 'react';
import $ from 'jquery';
import BackButton from './BackButton.jsx';
import ForwardButton from './ForwardButton.jsx';
import PhotoSlider from './PhotoSlider.jsx';
import '../../style.module.css';


const PhotoCarousel = (props) => {
  // temp for working
  $('body').css('background-color', '262626');


  return (
    <div>
      <div className="pcExitContainer">
        <input onClick={() => { props.returnToMainPage(); }} type="image" src="https://s3-us-west-1.amazonaws.com/staycloudphotobucket/svg/cancel.svg" alt="https://www.flaticon.com/authors/hadrien" className="pcExitButton pcExitImg " />
      </div>
      <div className="pcCurrentPhotoBox">
        <span>
          <BackButton changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} windowWidth={props.windowWidth} />
        </span>
        <div className="pcSliderContainer">
          <input onClick={() => props.changePhotoCarMainPhoto('+')} type="image" src={props.currentPhoto.photoURL} alt={props.currentPhoto.photoDescription} className="pcCurrentPhoto" />
          <PhotoSlider changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} photos={props.photos} currentPhoto={props.currentPhoto} showPhotoSlider={props.showPhotoSlider} toggleShowSlider={props.toggleShowSlider} currentPhotoIndex={props.currentPhotoIndex} />
        </div>
        <span>
          <ForwardButton changePhotoCarMainPhoto={props.changePhotoCarMainPhoto} windowWidth={props.windowWidth} />
        </span>
      </div>
    </div>
  );
};


export default PhotoCarousel;
