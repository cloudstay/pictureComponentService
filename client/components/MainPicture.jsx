import React from 'react';
import $ from 'jquery';
import '../style.module.css';

const picHeight = {
  height: '590px',
};

const MainPicture = (props) => {
  // render height based off of window height
  var mainPicStyle = {
    height: '100%',
  };
  if(props.windowWidth > 745){
    if (props.windowHeight >= 850) {
      mainPicStyle.height = '590px';
      // props.photoState['height']='590px';
    } else {
      mainPicStyle.height = '552px';
    }
  }
  $.extend(mainPicStyle, props.photoStyle);
  if (props.mainPhoto) {
    return (
      <span className="mainPicture hoverHelper">
        <input type="image" src={props.mainPhoto.photoURL} alt={props.mainPhoto.photoDescription} style={mainPicStyle} className="photoSize photo0 darken" onClick={()=>props.photoCarouselMode()} />
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
