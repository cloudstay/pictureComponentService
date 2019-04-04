import React from "react";
import '../../style.module.css';

var BackButton = (props) =>{
  var backButtonStyle = {
    width : 76,
    height : 76
  }
  if(props.windowWidth < 1130){
    backButtonStyle.width=33;
    backButtonStyle.height=33;
  }
  return (
    <button onClick={()=>props.changePhotoCarMainPhoto('-')} type="submit" className="pcButton pcBack">
            <img className="pcBackImg" style={backButtonStyle} src="./media/backArrow.svg" alt="https://www.freepik.com/"></img>
    </button>
  )
}


export default BackButton;