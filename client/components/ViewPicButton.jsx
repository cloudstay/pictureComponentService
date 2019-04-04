import React from 'react';
import '../style.module.css';

var ViewPicButton = (props)=>{
  return (
    <button onClick={()=>props.photoCarouselMode(0)} type="button" className="button viewPicButton buttonWriting">
      View Photos
    </button>
  )
}

export default ViewPicButton;