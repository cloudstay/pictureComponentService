import React from 'react';
import '../style.module.css';

const SecondaryPictures = props => {
  //dynamicl rendering of pictures heights
  var pictureHeight ={
    height : '294px'
  }
  if (props.windowHeight >= 850) {
    pictureHeight.height = '294px';
  } else {
    pictureHeight.height = '244px';
  }
  return (
    <span className="secondPics">
      <div className="dualPicContainer">
        <input type="image" src={props.photos[1].photoURL} alt="topSecondPhoto" style= {pictureHeight} className="photoSize topPhoto photoBorder" />
      </div>
      <div className="dualPicContainer">
        <input type="image" src={props.photos[2].photoURL} alt="botSecondPhoto" style= {pictureHeight} className="photoSize photoBorder" />
      </div>
    </span>
  )
};

export default SecondaryPictures;
