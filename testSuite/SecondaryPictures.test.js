import React from 'react';
import { shallow, mount } from 'enzyme';
import SecondPics from '../client/components/SecondaryPictures.jsx';
import mockPhotos from '../__mocks__/mockPhotoData.js';


describe('Render Picture React Base', () => {
  it('should render without error', () => {
    const wrapper = mount(<SecondPics photos={mockPhotos} />);
    expect((wrapper).exists()).toBe(true);
  });
  it('Should Allow props of photo to be passed in', () => {
    const wrapper = mount(<SecondPics photos={mockPhotos} />);
    expect(wrapper.props().children).toBe(undefined);
    expect(typeof wrapper.props().photos).toBe('object');
  });
  it('with photos prop should conditionally render to 2 divs in span', () => {
    const wrapper = mount(<SecondPics photos={mockPhotos} />);
    expect(wrapper.children().hasClass('secondPics')).toBe(true);
    expect(wrapper.children().children().length).toEqual(2);
  });
  it('with photos prop should conditionally render to span with 2 divs each with img in it', () => {
    const wrapper = mount(<SecondPics photos={mockPhotos} />);
    expect(wrapper.children().childAt(0).children().props().type).toBe('image');
    expect(wrapper.children().childAt(1).children().props().src).toEqual(expect.stringContaining('amazon'));
  });
  it('with photos prop should  render with size change', () => {
    const wrapper = mount(<SecondPics photos={mockPhotos} />);
    wrapper.setProps({ windowHeight: 900 });
    wrapper.update();
    expect(wrapper.children().childAt(0).children().props().style.height).toBe('295px');
    wrapper.setProps({ windowHeight: 500 });
    wrapper.update();
    expect(wrapper.children().childAt(1).children().props().style.height).toBe('244px');
  });
});
