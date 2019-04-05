import React from "react"
import '../../style.module.css';

var PhotoSlider = (props)=>{
  if(props.PhotoSlider){
    return (
      <span>I am hidden photo slider</span>
    )
  } else {
    return (
      <span>I am show photo slider</span>
    )
  }
}






export default PhotoSlider;
