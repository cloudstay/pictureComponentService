import React from "react";
import $ from "jquery";
import MainPicture from "./MainPicture.jsx";



class PictureContainer extends React.Component {
  constructor(){
    super();
    this.state={
      photos : null,
      windowHeight: 0,
      windowWidth: 0,
      displayType: 1
    }
    this.setState = this.setState.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.windowDimensions=  this.windowDimensions.bind(this);
  }
  componentDidMount(){
    this.getPhotos();
    this.windowDimensions();
    window.addEventListener("resize", this.windowDimensions);
  }

  windowDimensions(){
    this.setState({ 
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }
  getPhotos(){
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
    //1140 px width is switch from 3pic to 5 pic
    //750 px width is from 1 pic to 3 pics

    //5 pic layout
    if(this.state.windowWidth>1140 && photos.length >= 4){
      return (
        <div>
          <MainPicture mainPhoto={photos[0]} photos={photos}/>
        </div>
      )
      }else {
        return(
          <div>Hello</div>
        )
        
      }
  } 
}

  





export default PictureContainer;