import React from 'react';
import '../style.module.css';


var SaveButton = (props) =>{
  if(props.windowWidth > 745 ){
    return (
      <button type="button" className="saveButton button">
          <span>
          <img src="./media/heart.svg" className="buttonIcon"></img>
          </span>
          <span className="buttonWriting">
            Save
          </span>
      </button>
    )
  } else {
    return (
      <button type="button" className="singleIconButton">
        <img src="./media/heart.svg" className="singleButtonImg"></img>
      </button>
    )
  }
  
}

export default SaveButton;