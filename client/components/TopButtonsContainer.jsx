import React from 'react';
import SaveButton from './SaveButton.jsx';
import ShareButton from './ShareButton.jsx';
import '../style.module.css';

const TopButtonsContainer = (props) => {
  // refactor for 1 pic vs many pics
  const topButtonContainerWidth = {
    width: null,
  };
  if (props.windowWidth < 745) {
    topButtonContainerWidth.width = '64px';
  } else {
    topButtonContainerWidth.width = '206px';
  }
  return (
    <span className="topButtonContainer" style={topButtonContainerWidth}>
      <ShareButton windowWidth={props.windowWidth} />
      <SaveButton windowWidth={props.windowWidth} />
    </span>

  );
};

export default TopButtonsContainer;
