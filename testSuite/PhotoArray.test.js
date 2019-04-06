import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoArray from '../client/components/photoCarousel/PhotoArray.jsx';
import mockPhotos from '../__mocks__/mockPhotoData.js';


describe('Render Picture React Base', () => {
  it('should render without error', () => {
    const wrapper = mount(<PhotoArray photos={mockPhotos} currentPhoto={mockPhotos[0]} currentPhotoIndex={0} />);
    expect((wrapper).exists()).toBe(true);
  });
  it('should lighten current photo but not others', () => {
    const wrapper = mount(<PhotoArray photos={mockPhotos} currentPhoto={mockPhotos[0]} currentPhotoIndex={0} />);
    expect(wrapper.children().childAt(0).children().props().style).toEqual({ filter: 'brightness(100%)' });
    expect(wrapper.children().childAt(1).children().props().style).not.toEqual({ filter: 'brightness(100%)' });
    wrapper.setProps({ currentPhotoIndex: 1 });
    wrapper.update();
    expect(wrapper.children().childAt(0).children().props().style).not.toEqual({ filter: 'brightness(100%)' });
    expect(wrapper.children().childAt(1).children().props().style).toEqual({ filter: 'brightness(100%)' });
  });
  it('Should not translate list in X direction if currentPhotoIndex is less than 3 ', () => {
    const wrapper = mount(<PhotoArray photos={mockPhotos} currentPhoto={mockPhotos[0]} currentPhotoIndex={0} />);
    expect(wrapper.children().props().style).toEqual({ transform: 'translateX(0px)' });
  });
  it('Should translate list in X direction if currentPhotoIndex is more than 3 by picture sizes and not near end of photoArray', () => {
    const wrapper = mount(<PhotoArray photos={mockPhotos} currentPhoto={mockPhotos[3]} currentPhotoIndex={3} sliderWidth={500} />);
    expect(wrapper.children().props().style).toEqual({ transform: 'translateX(-110px)' });
  });
  it('Should translate list in X direction if currentPhotoIndex is more than 3 by picture sizes and near end of photoArray', () => {
    const wrapper = mount(<PhotoArray photos={mockPhotos} currentPhoto={mockPhotos[4]} currentPhotoIndex={4} sliderWidth={600} />);
    expect(wrapper.children().props().style).toEqual({ transform: 'translateX(-110px)' });
  });
  it('should make a list the size of photos', () => {
    const wrapper = mount(<PhotoArray photos={mockPhotos} currentPhoto={mockPhotos[0]} currentPhotoIndex={0} />);
    expect(wrapper.children().children().length).toBe(5);
  });
});
