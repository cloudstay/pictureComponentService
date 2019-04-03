import React from 'react';
import '../style.module.css';


var SaveButton = (props) =>{
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
}

export default SaveButton;