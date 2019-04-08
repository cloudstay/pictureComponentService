import React from 'react';
import '../../style.module.css';

const ForwardButton = (props) => {
  const fowardButtonStyle = {
    width: 76,
    height: 76.8,
  };
  if (props.windowWidth < 1130) {
    fowardButtonStyle.width = 33;
    fowardButtonStyle.height = 33.6;
  }
  return (
    <button onClick={() => props.changePhotoCarMainPhoto('+')} type="submit" className="pcButton pcForward">
      <img className="pcForwardImg" style={fowardButtonStyle} src="./svg/forwardArrow.svg" alt="https://www.freepik.com/" title="From https://www.freepik.com/" />
    </button>
  );
};


export default ForwardButton;
