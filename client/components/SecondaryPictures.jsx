import React from 'react';
import $ from 'jquery';
import '../style.module.css';

const SecondaryPictures = (props) => {
  // dynamicl rendering of pictures heights
  const photoStyle = {
    height: '295px',
  };
  if (props.windowHeight >= 850) {
    photoStyle.height = '295px';
  } else {
    photoStyle.height = '244px';
  }
  $.extend(photoStyle, props.photoStyle);
  return (
    <span className="secondPics hoverHelper">
      <div className="dualPicContainer darken">
        <input onClick={() => props.photoCarouselMode(1)} type="image" src={props.photos[1].photoURL} alt="topSecondPhoto" style={photoStyle} className="photoSize topPhoto photoBorder photo1" />
      </div>
      <div className="dualPicContainer darken">
        <input onClick={() => props.photoCarouselMode(2)} type="image" src={props.photos[2].photoURL} alt="botSecondPhoto" style={photoStyle} className="photoSize photoBorder photo2" />
      </div>
    </span>
  );
};

export default SecondaryPictures;
