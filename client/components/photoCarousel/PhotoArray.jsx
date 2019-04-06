import React from 'react';
import $ from 'jquery';
import '../../style.module.css';


const PhotoArray = (props) => {
  const activePhotoStyle = {
    filter: 'brightness(100%)',
  };
  const photoArray = props.photos.map(photo => (
    <li key={props.photos.indexOf(photo)} className="photoArrayList">
      <input onClick={() => props.changePhotoCarMainPhoto(props.photos.indexOf(photo))} className="photoArrayItem" type="image" style={props.currentPhotoIndex === props.photos.indexOf(photo) ? activePhotoStyle : {}} src={photo.photoURL} alt={photo.photoDescription} />
    </li>
  ));
  const translateX = {
    transform: 'translateX(0px)',
  };
  const endShiftPictureOffset = 2 + Math.floor((props.sliderWidth - 500) / 110);
  if (props.currentPhotoIndex < 3) {
    translateX.transform = 'translateX(0px)';
  } else if (props.currentPhotoIndex >= 3 && props.photos.length - props.currentPhotoIndex > endShiftPictureOffset) {
    translateX.transform = `translateX(${-110 * (props.currentPhotoIndex - 2)}px)`;
  } else {
    translateX.transform = `translateX(${-110 * (props.photos.length - endShiftPictureOffset - 2)}px)`;
  }
  return (
    <ul className="photoArrayContainer pcUnderPhoto " style={translateX}>
      {photoArray}
    </ul>
  );
};

export default PhotoArray;
