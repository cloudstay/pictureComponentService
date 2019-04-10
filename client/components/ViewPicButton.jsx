import React from 'react';
import '../style.module.css';

const ViewPicButton = props => (
  <button onClick={() => props.photoCarouselMode(0)} type="button" className="photobutton viewPicButton buttonWriting">
      View Photos
  </button>
);

export default ViewPicButton;
