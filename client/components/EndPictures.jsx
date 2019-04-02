import React from "react";


var EndPictures = (props)=>{
  return (
    <div>
      <div>
        <input type="image" src={props.photo[3].photoURL} alt="mainPhoto" className="mainPicture photoBorder"></input>
      </div>
      <div>
       <input type="image" src={props.photo[4].photoURL} alt="mainPhoto" className="mainPicture photoBorder"></input>
     </div>
    </div>
    
  )
}

export default EndPictures;