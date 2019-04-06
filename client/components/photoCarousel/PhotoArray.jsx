import React from "react";
import $ from "jquery";
import '../../style.module.css';


var PhotoArray = (props) => {
  var activePhotoStyle={
    filter: 'brightness(100%)'
  }
  const photoArray = props.photos.map((photo)=>
    <li key={props.photos.indexOf(photo)} className="photoArrayList">
      <input onClick={()=>props.changePhotoCarMainPhoto(props.photos.indexOf(photo))} className="photoArrayItem" type="image" style={props.currentPhotoIndex === props.photos.indexOf(photo) ? activePhotoStyle:{}}  src={photo.photoURL} alt={photo.photoDescription} />
    </li>
  )
  var translateX= {
    transform: `translateX(0px)`
  }
  if(props.currentPhotoIndex < 3){
    translateX.transform = `translateX(0px)`
  } else if (props.currentPhotoIndex >= 3 && 110*(props.photos.length-props.currentPhotoIndex+1) > Math.floor(props.sliderWidth/100)*100 ){
    translateX.transform =`translateX(${-110*(props.currentPhotoIndex-2)}px)`
  } else {
    translateX.transform =`translateX(${Math.floor(-110*(props.photos.length-Math.floor(props.sliderWidth/100))/100)*100}px)`;
  }
  return (
    <ul className="photoArrayContainer pcUnderPhoto " style={translateX}>
      {photoArray}
    </ul>
  )
}

export default PhotoArray;