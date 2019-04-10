import React from 'react';
import '../../style.module.css';

const BackButton = (props) => {
  const backButtonStyle = {
    width: 76,
    height: 76.8,
  };
  if (props.windowWidth < 1130) {
    backButtonStyle.width = 33;
    backButtonStyle.height = 33.6;
  }
  return (
    <button onClick={() => props.changePhotoCarMainPhoto('-')} type="submit" className="pcButton pcBack">
      <img className="pcBackImg" style={backButtonStyle} src="https://s3-us-west-1.amazonaws.com/staycloudphotobucket/svg/backArrow.svg" alt="https://www.freepik.com/" title="From https://www.freepik.com/" />
    </button>
  );
};


export default BackButton;
