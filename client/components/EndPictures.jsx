import React from 'react';
import $ from 'jquery';
import '../style.module.css';

const EndPictures = props => {
  var photoStyle ={
    height : '294px'
  }
  if (props.windowHeight >= 850) {
    photoStyle.height = '294px';
    $.extend(props.photoStyle,photoStyle);
  } else {
    photoStyle.height = '244px';
    $.extend(photoStyle,props.photoStyle);
  }
  
  return (
    <span className="endPics hoverHelper">
      <div className="dualPicContainer darken">
        <input type="image" src={props.photos[3].photoURL} alt="mainPhoto" style={photoStyle} className="photoSize topPhoto photoBorder photo3" />
      </div>
      <div className="dualPicContainer darken">
        <input type="image" src={props.photos[4].photoURL} alt="mainPhoto" style={photoStyle}  className="photoSize photoBorder photo4" />
      </div>
    </span>
  )
};

export default EndPictures;
