import React from 'react';
import { shallow, mount } from 'enzyme';
import PictureContainer from '../client/components/PictureContainer.jsx';
import mockPhotos from '../__mocks__/mockPhotoData.js';

describe('Render Picture React Base', () => {
  it('should render without error', () => {
    const wrapper = mount(<PictureContainer />);
    expect((wrapper).exists()).toBe(true);
  });
  it('should have state', () => {
    const wrapper = mount(<PictureContainer />);
    expect(wrapper.state().photos).toBe(null);
    expect(wrapper.state().windowHeight).toBeGreaterThanOrEqual(0);
  });
  it('should render just MainPicture is width is less than 750', () => {
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 700 });
    wrapper.setState({ photos: mockPhotos });
    expect(wrapper.state().windowWidth).toBe(700);
    expect(wrapper.children().children().length).toBe(2);
    expect(wrapper.children().childAt(0).name()).toBe('MainPicture');
    expect(wrapper.children().childAt(1).name()).toBe('TopButtonsContainer');
  });
  it('should render MainPicture & SecondaryPics & EndPics is width is greater than 1140', () => {
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 1500 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    expect(wrapper.state().windowWidth).toBe(1500);
    expect(wrapper.children().children().length).toBe(5);
    expect(wrapper.children().childAt(0).name()).toBe('MainPicture');
    expect(wrapper.children().childAt(1).name()).toBe('SecondaryPictures');
    expect(wrapper.children().childAt(2).name()).toBe('EndPictures');
    expect(wrapper.children().childAt(3).name()).toBe('TopButtonsContainer');
    expect(wrapper.children().childAt(4).name()).toBe('ViewPicButton');
  });
  it('should render to different sizes depending on window Height', ()=>{
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 1500 });
    wrapper.setState({ windowHeight: 500 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    expect(wrapper.children().props().style.height).toBe('294.66px');
    wrapper.setState({ windowHeight: 800 });
    wrapper.update();
    expect(wrapper.children().props().style.height).toBe('442px');
    wrapper.setState({ windowHeight: 900 });
    wrapper.update();
    expect(wrapper.children().props().style.height).toBe('592px');
  })
});
