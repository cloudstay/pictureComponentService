import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoSlider from '../client/components/photoCarousel/PhotoSlider.jsx';
import mockPhotos from '../__mocks__/mockPhotoData.js';

describe('Render Picture React Base', () => {
  it('should render without error', () => {
    const wrapper = mount(<PhotoSlider photos={mockPhotos} currentPhoto={mockPhotos[0]} />);
    expect((wrapper).exists()).toBe(true);
  });
  it('should contain PhotoArray', () => {
    const wrapper = mount(<PhotoSlider photos={mockPhotos} currentPhoto={mockPhotos[0]} />);
    wrapper.setProps({ showPhotoSlider: true });
    wrapper.update();
    expect(wrapper.children().childAt(1).children().name()).toBe('PhotoArray');
  });
  it('should transition photoArray component based on if photoArray should be shown', () => {
    const wrapper = mount(<PhotoSlider photos={mockPhotos} currentPhoto={mockPhotos[0]} />);
    wrapper.setProps({ showPhotoSlider: true });
    wrapper.update();
    expect(wrapper.children().props().style).toEqual({ transform: 'translateY(0px)' });
    wrapper.setProps({ showPhotoSlider: false });
    wrapper.update();
    expect(wrapper.children().props().style).toEqual({ transform: 'translateY(67px)' });
  });
  it('should show PhotoArray based on if show photoPhotoSlider is true or false', () => {
    const wrapper = mount(<PhotoSlider photos={mockPhotos} currentPhoto={mockPhotos[0]} />);
    wrapper.setProps({ showPhotoSlider: true });
    wrapper.update();
    expect(wrapper.children().childAt(1).props().style).toEqual({ display: 'flex' });
    wrapper.setProps({ showPhotoSlider: false });
    wrapper.update();
    expect(wrapper.children().childAt(1).props().style).toEqual({ display: 'none' });
  });
  it('should displace the correct description, index number, and total size of photo array', () => {
    const wrapper = mount(<PhotoSlider photos={mockPhotos} currentPhoto={mockPhotos[1]} currentPhotoIndex={1} />);
    expect(wrapper.children().childAt(0).childAt(0).text()).toBe('2/5: Voluptatibus pariatur distinctio iusto adipisci quia.');
  });
  it('should have a mouseOver Even', () => {
    const wrapper = mount(<PhotoSlider photos={mockPhotos} currentPhoto={mockPhotos[0]} />);
    expect(wrapper.children().props().onMouseEnter).not.toBe(undefined);
  });
  it('should toggle button Show Photo List and Hide Photo List', () => {
    const wrapper = mount(<PhotoSlider photos={mockPhotos} currentPhoto={mockPhotos[0]} />);
    wrapper.setProps({ showPhotoSlider: true });
    wrapper.update();
    expect(wrapper.children().childAt(0).childAt(1).children()
      .children()
      .childAt(0)
      .text()).toBe('Hide photo list');
    wrapper.setProps({ showPhotoSlider: false });
    wrapper.update();
    expect(wrapper.children().childAt(0).childAt(1).children()
      .children()
      .childAt(0)
      .text()).toBe('Show photo list');
  });
});
