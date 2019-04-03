import React from 'react';
import '../style.module.css';


var ShareButton = (props) =>{

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
}

export default ShareButton;
