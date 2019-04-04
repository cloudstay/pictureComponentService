import React from 'react';
import $ from 'jquery';
import MainPicture from './MainPicture.jsx';
import SecondaryPics from './SecondaryPictures.jsx';
import EndPics from './EndPictures.jsx';
import TopButtonsContainer from "./TopButtonsContainer.jsx";
import ViewPicButton from "./ViewPicButton.jsx";
import PhotoCarousel from "./photoCarousel/PhotoCarousel.jsx";
import '../style.module.css';


class PictureContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      photoStyle : [
        {},
        {},
        {},
        {},
        {}
      ],
      photoCarousel : false,
      currentPhoto : null,
    };
    this.setState = this.setState.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.windowDimensions = this.windowDimensions.bind(this);
    this.photoCarouselMode= this.photoCarouselMode.bind(this);
    this.updateContainers=this.updateContainers.bind(this);
    this.returnToMainPage=this.returnToMainPage.bind(this);
  }

  componentDidMount() {
    this.getPhotos((err,photos)=>{
      if(err){
        window.alert("Error photos not found")
      } else {
        this.setState({photos : photos});
        window.addEventListener('resize', this.windowDimensions);
        this.windowDimensions();
      }
    }); 
    
    
  }

  windowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
    this.updateContainers();
  }
  updateContainers () {
    this.setState({
      primaryPhotoContainer : <MainPicture photoCarouselMode={this.photoCarouselMode} mainPhoto={this.state.photos[0]} windowHeight={this.state.windowHeight} windowWidth={this.state.windowWidth} photoStyle={this.state.photoStyle[0]} />,
    });
    this.setState({
      secondaryPhotoContainer : <SecondaryPics photoCarouselMode={this.photoCarouselMode} photos={this.state.photos} windowHeight={this.state.windowHeight} />
    })
    this.setState({
      endPhotoContainer : <EndPics photoCarouselMode={this.photoCarouselMode} photos={this.state.photos} windowHeight={this.state.windowHeight} />
    });
    this.setState({
      topButtonsContainer : <TopButtonsContainer windowWidth={this.state.windowWidth} />
    })
    this.setState({
      viewButtonContainer : <ViewPicButton photoCarouselMode={this.photoCarouselMode} windowHeight={this.state.windowHeight}/>
    });
  }
  getPhotos(callback) {
    var roomID=window.location.search.slice(4,7);
    $.ajax({
      type: 'GET',
      url: '/rooms/api',
      data: {id : roomID},
      success: (photoArray) => {
        callback(null, JSON.parse(photoArray) )
      },
      error: (err) => {
        callback(err);
      },
    });
  }
  photoCarouselMode (photoID){
    this.setState({currentPhoto : this.state.photos[photoID]});
    this.setState({photoCarousel : true});
    $('body').css("background-color", "262626");
  };
  returnToMainPage(){
    this.setState({photoCarousel : false});
    $('body').css("background-color", "fff");
  }
  render() {
    var containerHeight = {
      height: '592px',
    };
    if(this.state.photoCarousel === true){
      return (
        <PhotoCarousel photos={this.state.photos} returnToMainPage={this.returnToMainPage}/>
      )
    } else {
      // 1140 px width is switch from 3pic to 5 pic
      // 750 px width is from 1 pic to 3 pics
      // 5 pic layout
      if (this.state.windowWidth > 1130 && this.state.photos.length >= 4) {
        if (this.state.windowHeight < 700) {
          containerHeight.height = '294.66px';
        } else if (this.state.windowHeight < 850) {
          containerHeight.height = '442px';
        } else {
          containerHeight.height = '592px';
        }
        return (
          <div className="flexContainer" style={containerHeight}>
            {this.state.primaryPhotoContainer}
            {this.state.secondaryPhotoContainer}
            {this.state.endPhotoContainer}
            {this.state.topButtonsContainer}
            {this.state.viewButtonContainer}
          </div>
        );
        //3 picture laoyout
      } else if (this.state.windowWidth > 745 && this.state.photos.length >= 2) {
        if (this.state.windowHeight < 700) {
          containerHeight.height = '294.60px';
        } else if (this.state.windowHeight < 850) {
          containerHeight.height = '353.59px';
        } else {
          containerHeight.height = '473.59px';
        }
        return (
          <div className="flexContainer" style={containerHeight}>
            {this.state.primaryPhotoContainer}
            {this.state.secondaryPhotoContainer}
            {this.state.topButtonsContainer}
            {this.state.viewButtonContainer}
          </div>
        );
        //1 picture layout
      } else {
        containerHeight.height=`${(this.state.windowWidth)/1.535}px`;
        containerHeight['top']='64';
        return (
          <div className="flexContainer" style={containerHeight}>
            {this.state.primaryPhotoContainer}
            {this.state.topButtonsContainer}
          </div>
        );
      }
    }  
  }
}


export default PictureContainer;
