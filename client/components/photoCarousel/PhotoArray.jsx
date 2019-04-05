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
  return (
    <ul className="photoArrayContainer pcUnderPhoto ">
      {photoArray}
    </ul>
  )
}

export default PhotoArray;