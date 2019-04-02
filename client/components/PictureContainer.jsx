import React from 'react';
import $ from 'jquery';
import MainPicture from './MainPicture.jsx';
import SecondaryPics from './SecondaryPictures.jsx';
import EndPics from './EndPictures.jsx';
import '../style.module.css';


class PictureContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: null,
      windowHeight: 0,
      windowWidth: 0,
      displayType: 1,
      containerHeight: {
        height: '592px',
      },
    };
    this.setState = this.setState.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.windowDimensions = this.windowDimensions.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
    this.windowDimensions();
    window.addEventListener('resize', this.windowDimensions);
  }

  windowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  getPhotos() {
    $.ajax({
      type: 'GET',
      url: '/api/rooms',
      success: (photoArray) => {
        this.setState({ photos: JSON.parse(photoArray) });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    // allows app to not crash before getting photos
    var photos = [];
    if (this.state.photos) {
      var photos = this.state.photos;
    }
    // 1140 px width is switch from 3pic to 5 pic
    const containerHeight = {
      height: '592px',
    };
    if (this.state.windowHeight < 700) {
      containerHeight.height = '294.66px';
    } else if (this.state.windowHeight < 850) {
      containerHeight.height = '442px';
    } else {
      containerHeight.height = '592px';
    }
    // 750 px width is from 1 pic to 3 pics

    // 5 pic layout
    if (this.state.windowWidth > 1130 && photos.length >= 4) {
      return (
        <div className="flexContainer" style={containerHeight}>
          <MainPicture mainPhoto={photos[0]} windowHeight={this.state.windowHeight} />
          <SecondaryPics photos={photos} windowHeight={this.state.windowHeight} />
          <EndPics photos={photos} windowHeight={this.state.windowHeight} />
        </div>
      );
    } if (this.state.windowWidth > 750 && photos.length >= 2) {
      return (
        <div className="flexContainer" style={containerHeight}>
          <MainPicture mainPhoto={photos[0]} windowHeight={this.state.windowHeight} />
          <SecondaryPics photos={photos} windowHeight={this.state.windowHeight} />
        </div>
      );
    }
    return (
      <div className="flexContainer" style={containerHeight}>
        <MainPicture mainPhoto={photos[0]} windowHeight={this.state.windowHeight} />
      </div>
    );
  }
}


export default PictureContainer;
