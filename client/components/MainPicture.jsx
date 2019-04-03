import React from 'react';
import '../style.module.css';

const picHeight = {
  height: '590px',
};

const MainPicture = (props) => {
  // render height based off of window height
  var mainPicHeight = {
    height: '100%',
  };
  if(props.windowWidth > 745){
    if (props.windowHeight >= 850) {
      mainPicHeight.height = '590px';
    } else {
      mainPicHeight.height = '552px';
    }
  }


  if (props.mainPhoto) {
    return (
      <span className="mainPicture">
        <input type="image" src={props.mainPhoto.photoURL} alt={props.mainPhoto.photoDescription} style={mainPicHeight} className="photoSize" />
      </span>
    );
  }
  return (
    <div>
        I am photo
    </div>
  );
};


export default MainPicture;
