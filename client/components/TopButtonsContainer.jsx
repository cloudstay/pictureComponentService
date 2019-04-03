import React from 'react';
import SaveButton from "./SaveButton.jsx";
import ShareButton from "./ShareButton.jsx";
import '../style.module.css';

var TopButtonsContainer = (props) =>{
  //refactor for 1 pic vs many pics
  return (
    <span className="topButtonContainer">
      <ShareButton />
      <SaveButton />
    </span>
    
  )
}

export default TopButtonsContainer;