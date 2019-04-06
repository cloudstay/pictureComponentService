import React from 'react';
import $ from 'jquery';
import '../style.module.css';

const EndPictures = (props) => {
  const photoStyle = {
    height: '295px',
  };
  if (props.windowHeight >= 850) {
    photoStyle.height = '295px';
    $.extend(props.photoStyle, photoStyle);
  } else {
    photoStyle.height = '244px';
    $.extend(photoStyle, props.photoStyle);
  }

  return (
    <span className="endPics hoverHelper">
      <div className="dualPicContainer darken">
        <input onClick={() => props.photoCarouselMode(3)} type="image" src={props.photos[3].photoURL} alt="mainPhoto" style={photoStyle} className="photoSize topPhoto photoBorder photo3" />
      </div>
      <div className="dualPicContainer darken">
        <input onClick={() => props.photoCarouselMode(4)} type="image" src={props.photos[4].photoURL} alt="mainPhoto" style={photoStyle} className="photoSize photoBorder photo4" />
      </div>
    </span>
  );
};

export default EndPictures;
