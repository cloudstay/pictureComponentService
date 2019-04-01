import React from "react";
import $ from "jquery";
import MainPicture from "./MainPicture.jsx";



class PictureContainer extends React.Component {
  constructor(){
    super();
    this.state={
      photos : null
    }
    this.setState = this.setState.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos(){
    console.log("hELLO")
    $.ajax({
      type: "GET",
      url: "/",
      success : (photoArray) =>{
        this.setState({photos : JSON.parse(photoArray)});
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

  render(){
    var photos=[];
    if(this.state.photos){
      var photos=this.state.photos;
    }
    return (
      <div>
        <MainPicture photo={photos[0]}/>
        <input type="button" value="get Get" onClick={()=>{this.getPhotos()}}></input>
      </div>
    )
  }
}

  





export default PictureContainer;