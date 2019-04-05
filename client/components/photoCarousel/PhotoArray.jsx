import React from "react";
import '../../style.module.css';


var PhotoArray = (props) => {
  const photoArray = props.photos.map((photo)=>
    <li key={props.photos.indexOf(photo)} className="photoArrayList">
      <input className="photoArrayItem" type="image" src={photo.photoURL} alt={photo.photoDescription} />
    </li>
  )
  console.log(photoArray);
  return (
    <ul className="photoArrayContainer pcUnderPhoto ">
      {photoArray}
    </ul>
  )
}

export default PhotoArray;