import React from "react";
import '../../style.module.css';

var ForwardButton = (props) =>{
  var fowardButtonStyle = {
    width : 76,
    height : 76.8
  }
  if(props.windowWidth < 1130){
    fowardButtonStyle.width=33;
    fowardButtonStyle.height=33.6;
  }
  return (
    <button onClick={()=>props.changePhotoCarMainPhoto('+')} type="submit" className="pcButton pcForward">
            <img className="pcForwardImg" style={fowardButtonStyle} src="./media/forwardArrow.svg" alt="https://www.freepik.com/"></img>
    </button>
  )
}


export default ForwardButton;