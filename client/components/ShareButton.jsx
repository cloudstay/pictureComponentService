import React from 'react';
import '../style.module.css';


const ShareButton = (props) => {
  if (props.windowWidth > 745) {
    return (
      <button type="button" className="shareButton button">
        <span>
          <img src="./svg/share.svg" className="buttonIcon sharePic" />
        </span>
        <span className="buttonWriting">
          Share
        </span>
      </button>
    );
  }
  return (
    <button type="button" className="singleIconButton">
      <img src="./svg/share.svg" className="singleButtonImg" />
    </button>
  );
};

export default ShareButton;
