import React from 'react';
import '../style.module.css';


const ShareButton = (props) => {
  if (props.windowWidth > 745) {
    return (
      <button type="button" className="shareButton photobutton">
        <span>
          <img src="https://s3-us-west-1.amazonaws.com/staycloudphotobucket/svg/share.svg" className="buttonIcon sharePic" />
        </span>
        <span className="buttonWriting">
          Share
        </span>
      </button>
    );
  }
  return (
    <button type="button" className="singleIconButton">
      <img src="https://s3-us-west-1.amazonaws.com/staycloudphotobucket/svg/share.svg" className="singleButtonImg" />
    </button>
  );
};

export default ShareButton;
