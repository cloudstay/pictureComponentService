import React from 'react';
import '../style.module.css';


const SaveButton = (props) => {
  if (props.windowWidth > 745) {
    return (
      <button type="button" className="saveButton button">
        <span>
          <img src="./svg/heart.svg" className="buttonIcon" />
        </span>
        <span className="buttonWriting">
            Save
        </span>
      </button>
    );
  }
  return (
    <button type="button" className="singleIconButton">
      <img src="./svg/heart.svg" className="singleButtonImg" />
    </button>
  );
};

export default SaveButton;
