import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoCarousel from '../client/components/photoCarousel/PhotoCarousel.jsx';
import mockPhotos from '../__mocks__/mockPhotoData.js';


describe('Render Picture React Base', () => {
  it('should render without error', () => {
    const wrapper = mount(<PhotoCarousel currentPhoto={mockPhotos[0]} photos={mockPhotos} />);
    expect((wrapper).exists()).toBe(true);
  });
  it('should contain the exit input button', () => {
    const wrapper = mount(<PhotoCarousel currentPhoto={mockPhotos[0]} photos={mockPhotos} />);
    expect(wrapper.children().childAt(0).childAt(0).type()).toBe('input');
  });
  it('should contain the Back and Forward button & PhotoSlider Components', () => {
    const wrapper = mount(<PhotoCarousel currentPhoto={mockPhotos[0]} photos={mockPhotos} />);
    expect(wrapper.children().childAt(1).childAt(0).childAt(0)
      .name()).toBe('BackButton');
    expect(wrapper.children().childAt(1).childAt(2).childAt(0)
      .name()).toBe('ForwardButton');
    expect(wrapper.children().childAt(1).childAt(1).childAt(1)
      .name()).toBe('PhotoSlider');
  });
  it('Exit/Back/Forward Buttons to be svg tags', () => {
    const wrapper = mount(<PhotoCarousel currentPhoto={mockPhotos[0]} photos={mockPhotos} />);
    expect(wrapper.children().childAt(0).childAt(0).html()).toEqual(expect.stringContaining('svg'));
    expect(wrapper.children().childAt(1).childAt(0).childAt(0)
      .html()).toEqual(expect.stringContaining('svg'));
    expect(wrapper.children().childAt(1).childAt(2).childAt(0)
      .html()).toEqual(expect.stringContaining('svg'));
    expect(wrapper.children().childAt(0).childAt(0).props().type).toEqual('image');
  });
  it('Should pass down key props to PhotoSlider ', () => {
    const wrapper = mount(<PhotoCarousel currentPhoto={mockPhotos[0]} photos={mockPhotos} />);
    expect(Object.keys(wrapper.children().childAt(1).childAt(1).childAt(1)
      .props())).toEqual(['changePhotoCarMainPhoto',
      'photos',
      'currentPhoto',
      'showPhotoSlider',
      'toggleShowSlider',
      'currentPhotoIndex']);
  });
});
