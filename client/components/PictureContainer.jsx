import React from 'react';
import $ from 'jquery';
import MainPicture from './MainPicture.jsx';
import SecondaryPics from './SecondaryPictures.jsx';
import EndPics from './EndPictures.jsx';
import TopButtonsContainer from "./TopButtonsContainer.jsx";
import ViewPicButton from "./ViewPicButton.jsx";
import PhotoCarousel from "./photoCarousel/PhotoCarousel.jsx";
import mockData from "../../__mocks__/mockPhotoData.js";
import '../style.module.css';


class PictureContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: mockData,
      windowHeight: 0,
      windowWidth: 0,
      displayType: 1,
      photoStyle : [
        {},
        {},
        {},
        {},
        {}
      ],
      photoCarousel : false,
    };
    this.setState = this.setState.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.windowDimensions = this.windowDimensions.bind(this);
    this.photoCarouselMode= this.photoCarouselMode.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
    this.windowDimensions();
    this.setState({
      primaryPhotoContainer : <MainPicture photoCarouselMode={this.photoCarouselMode} mainPhoto={this.state.photos[0]} windowHeight={this.state.windowHeight} windowWidth={this.state.windowWidth} photoStyle={this.state.photoStyle[0]} />,
    });
    this.setState({
      secondaryPhotoContainer : <SecondaryPics photoCarouselMode={this.photoCarouselMode} photos={this.state.photos} windowHeight={this.state.windowHeight} />
    })
    this.setState({
      endPhotoContainer : <EndPics photos={this.state.photos} windowHeight={this.state.windowHeight} />
    });
    this.setState({
      topButtonsContainer : <TopButtonsContainer windowWidth={this.state.windowWidth} />
    })
    this.setState({
      viewButtonContainer : <ViewPicButton windowHeight={this.state.windowHeight}/>
    });

    window.addEventListener('resize', this.windowDimensions);
  }

  windowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  getPhotos() {
    var roomID=window.location.search.slice(4,7);
    $.ajax({
      type: 'GET',
      url: '/rooms/api',
      data: {id : roomID},
      success: (photoArray) => {
        this.setState({ photos: JSON.parse(photoArray) });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  photoCarouselMode (){
    this.setState({photoCarousel : true})
  };
  render() {
    var containerHeight = {
      height: '592px',
    };
    if(this.state.photoCarousel === true){
      return (
        <PhotoCarousel />
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
