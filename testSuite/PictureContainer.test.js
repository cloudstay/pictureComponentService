import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PictureContainer from '../client/components/PictureContainer.jsx';
import mockPhotos from '../__mocks__/mockPhotoData.js';

describe('Render Picture React Base', () => {
  it('should render without error', () => {
    const wrapper = mount(<PictureContainer />);
    expect((wrapper).exists()).toBe(true);
  });
  it('should have state', () => {
    const wrapper = mount(<PictureContainer />);
    expect(!!wrapper.state().photos).toBe(true);
    expect(wrapper.state().windowHeight).toBeGreaterThanOrEqual(0);
  });
  it('PictureContain components should be in state at all points', () => {
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 1500 });
    wrapper.setState({ windowHeight: 500 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    expect(wrapper.children().children().length).toBe(0);
    wrapper.setState({ windowWidth: 800 });
    wrapper.update();
    expect(wrapper.children().children().length).toBe(0);
    wrapper.setState({ windowWidth: 500 });
    wrapper.update();
    expect(wrapper.children().children().length).toBe(0);
    wrapper.setState({ windowHeight: 1500 });
    wrapper.update();
    expect(wrapper.children().children().length).toBe(0);
  });
  it('should render to different sizes depending on window Height', () => {
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
  });
  it('Should have components in state after updateContainers is called', () => {
    let wrapper = shallow(<PictureContainer />);
    wrapper.setState({ windowWidth: 700 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    wrapper = wrapper.instance();
    wrapper.updateContainers();
    expect(typeof wrapper.state.primaryPhotoContainer).toBe('object');
    expect(wrapper.state.secondaryPhotoContainer).not.toBe(undefined);
    expect(typeof wrapper.state.endPhotoContainer).toBe('object');
  });
  it('State container components should be react elements', () => {
    let wrapper = shallow(<PictureContainer />);
    wrapper.setState({ windowWidth: 700 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    wrapper = wrapper.instance();
    wrapper.updateContainers();
    expect((wrapper.state.primaryPhotoContainer.$$typeof).toString()).toBe('Symbol(react.element)');
    expect((wrapper.state.viewButtonContainer.$$typeof).toString()).toBe('Symbol(react.element)');
  });
  it('Should change to photoCarousel when photoCarouselMode is called', () => {
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 700 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.setState({ photoCarousel: true });
    wrapper.setProps({ currentPhoto: mockPhotos[0] });
    wrapper.update();
    expect(wrapper.childAt(0).name()).toBe('PhotoCarousel');
  });
  it('should render MainPicture/SecondaryPics/ EndPics is width is greater than 1130', () => {
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 1500 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    wrapper.instance().updateContainers();
    expect(wrapper.state().windowWidth).toBe(1500);
    expect(wrapper.children().html()).toEqual(expect.stringContaining('mainPicture'));
    expect(wrapper.children().html()).toEqual(expect.stringContaining('secondPics'));
    expect(wrapper.children().html()).toEqual(expect.stringContaining('endPics'));
  });
  it('should render MainPicture/SecondaryPics is width is greater than 745 but less than 1130', () => {
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 780 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    wrapper.instance().updateContainers();
    expect(wrapper.state().windowWidth).toBe(780);
    expect(wrapper.children().html()).toEqual(expect.stringContaining('mainPicture'));
    expect(wrapper.children().html()).toEqual(expect.stringContaining('secondPics'));
    expect(wrapper.children().html()).toEqual(expect.not.stringContaining('endPics'));
  });
  it('should render MainPicture is width is greater less 745 ', () => {
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 500 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    wrapper.instance().updateContainers();
    expect(wrapper.state().windowWidth).toBe(500);
    expect(wrapper.children().html()).toEqual(expect.stringContaining('mainPicture'));
    expect(wrapper.children().html()).toEqual(expect.not.stringContaining('secondPics'));
    expect(wrapper.children().html()).toEqual(expect.not.stringContaining('endPics'));
  });
  it('should no render view Photos button if width is less than 745px', () => {
    const wrapper = mount(<PictureContainer />);
    wrapper.setState({ windowWidth: 700 });
    wrapper.setState({ photos: mockPhotos });
    wrapper.update();
    wrapper.instance().updateContainers();
    expect(wrapper.children().html()).toEqual(expect.not.stringContaining('viewPicButton'));
  });
});
