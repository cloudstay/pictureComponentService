import React from "react";
import $ from 'jquery';
import '../../style.module.css';



var PhotoCarousel = (props) =>{
  return (
    <div className="photoCarousel"> 
      <div className="exitContainer">
        <input onClick={()=>{props.returnToMainPage()}} type="image" src="./media/cancel.svg" alt='https://www.flaticon.com/authors/hadrien' className="pcExitButton pcExitImg "></input>
      </div>
    </div>
  )
}


export default PhotoCarousel;