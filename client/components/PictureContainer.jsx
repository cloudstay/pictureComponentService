import React from 'react';
import $ from 'jquery';
import MainPicture from './MainPicture.jsx';
import SecondaryPics from './SecondaryPictures.jsx';
import EndPics from './EndPictures.jsx';
import TopButtonsContainer from './TopButtonsContainer.jsx';
import ViewPicButton from './ViewPicButton.jsx';
import PhotoCarousel from './photoCarousel/PhotoCarousel.jsx';
import mockData from '../../__mocks__/mockPhotoData.js';
import '../style.module.css';


class PictureContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      photoStyle: [
        {},
        {},
        {},
        {},
        {},
      ],
      photoCarousel: false,
      currentPhoto: mockData[0],
      showPhotoSlider: true,
      currentPhotoIndex: 0,
    };
    this.setState = this.setState.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.windowDimensions = this.windowDimensions.bind(this);
    this.photoCarouselMode = this.photoCarouselMode.bind(this);
    this.updateContainers = this.updateContainers.bind(this);
    this.returnToMainPage = this.returnToMainPage.bind(this);
    this.changePhotoCarMainPhoto = this.changePhotoCarMainPhoto.bind(this);
    this.toggleShowSlider = this.toggleShowSlider.bind(this);
  }

  componentDidMount() {
    this.getPhotos((err, photos) => {
      if (err) {
        console.log('Error photos not found');
      } else {
        this.setState({ photos });
        this.setState({ currentPhoto: photos[0] });
        window.addEventListener('resize', this.windowDimensions);
        this.windowDimensions();
      }
    });
  }

  // helps with dynamic rendering based on window size
  windowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
    this.updateContainers();
  }

  // puts components into state
  updateContainers() {
    this.setState({
      primaryPhotoContainer: <MainPicture photoCarouselMode={this.photoCarouselMode} mainPhoto={this.state.photos[0]} windowHeight={this.state.windowHeight} windowWidth={this.state.windowWidth} photoStyle={this.state.photoStyle[0]} />,
    });
    this.setState({
      secondaryPhotoContainer: <SecondaryPics photoCarouselMode={this.photoCarouselMode} photos={this.state.photos} windowHeight={this.state.windowHeight} />,
    });
    this.setState({
      endPhotoContainer: <EndPics photoCarouselMode={this.photoCarouselMode} photos={this.state.photos} windowHeight={this.state.windowHeight} />,
    });
    this.setState({
      topButtonsContainer: <TopButtonsContainer windowWidth={this.state.windowWidth} />,
    });
    this.setState({
      viewButtonContainer: <ViewPicButton photoCarouselMode={this.photoCarouselMode} windowHeight={this.state.windowHeight} />,
    });
  }

  getPhotos(callback) {
    const roomID = window.location.pathname.split('/')[2];
    $.ajax({
      type: 'GET',
      url: `/api/rooms/${roomID}/photos`,
      success: (photoArray) => {
        callback(null, JSON.parse(photoArray));
      },
      error: (err) => {
        callback(err);
      },
    });
  }

  // /Methods around photoCarousel mode
  photoCarouselMode(photoID) {
    this.setState({ currentPhoto: this.state.photos[photoID] });
    this.setState({ photoCarousel: true });
    this.setState({ currentPhotoIndex: photoID });
    $('#photoToggle').css('display', 'none');
    $('body').css('background-color', 'rgb(38, 38, 38)');
  }

  returnToMainPage() {
    this.setState({ photoCarousel: false });
    $('#photoToggle').css('display', 'flex');
    $('body').css('background-color', '#fff');
  }

  changePhotoCarMainPhoto(photoID) {
    if (photoID === '-') {
      photoID = this.state.currentPhotoIndex;
      photoID--;
      if (photoID < 0) {
        photoID = this.state.photos.length - 1;
      }
    } else if (photoID === '+') {
      photoID = this.state.currentPhotoIndex;
      photoID++;
      if (photoID >= this.state.photos.length) {
        photoID = 0;
      }
    }

    this.setState({ currentPhotoIndex: photoID });
    this.setState({ currentPhoto: this.state.photos[photoID] });
  }

  toggleShowSlider(showPhotoSlider) {
    if (showPhotoSlider) {
      this.setState({ showPhotoSlider: false });
    } else {
      this.setState({ showPhotoSlider: true });
    }
  }


  render() {
    const containerHeight = {
      height: '592px',
    };
    if (this.state.photoCarousel === true) {
      return (
        <PhotoCarousel changePhotoCarMainPhoto={this.changePhotoCarMainPhoto} windowWidth={this.state.windowWidth} photos={this.state.photos} returnToMainPage={this.returnToMainPage} currentPhoto={this.state.currentPhoto} showPhotoSlider={this.state.showPhotoSlider} toggleShowSlider={this.toggleShowSlider} currentPhotoIndex={this.state.currentPhotoIndex} />
      );
    } else {
      // 1140 px width is switch from 3pic to 5 pic
      // 750 px width is from 1 pic to 3 pics
      // 5 pic layout
      if (this.state.windowWidth > 1130 && this.state.photos.length > 4) {
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
        // 3 picture laoyout
      } else if (this.state.windowWidth > 745 && this.state.photos.length > 2) {
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
        // 1 picture layout
      } else {
        containerHeight.height = `${(this.state.windowWidth) / 1.535}px`;
        containerHeight.top = '64';
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
