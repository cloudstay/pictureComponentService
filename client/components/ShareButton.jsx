import React from 'react';
import '../style.module.css';


var ShareButton = (props) =>{
  if(props.windowWidth > 745 ){
    return (
      <button type="button" className="shareButton button">
        <span>
          <img src="./media/share.svg" className="buttonIcon sharePic"></img>
        </span>
        <span className="buttonWriting">
          Share
        </span>
      </button>
    )
  } else {
    return (
      <button type="button" className="singleIconButton">
        <img src="./media/share.svg" className="singleButtonImg"></img>
      </button>
    )
  }
}

export default ShareButton;
