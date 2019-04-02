import React from 'react';
import '../style.module.css';

const EndPictures = props => {
  var pictureHeight ={
    height : '294px'
  }
  if (props.windowHeight >= 850) {
    pictureHeight.height = '294px';
  } else {
    pictureHeight.height = '244px';
  }
  return (
    <span className="endPics">
      <div className="dualPicContainer">
        <input type="image" src={props.photos[3].photoURL} alt="mainPhoto" style={pictureHeight} className="photoSize topPhoto photoBorder" />
      </div>
      <div className="dualPicContainer">
        <input type="image" src={props.photos[4].photoURL} alt="mainPhoto" style={pictureHeight}  className="photoSize photoBorder" />
      </div>
    </span>
  )
};

export default EndPictures;
