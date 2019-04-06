import React from 'react';
import { shallow, mount } from 'enzyme';
import MainPicture from '../client/components/MainPicture.jsx';
import mockPhotos from '../__mocks__/mockPhotoData.js';


describe('Render Picture React Base', () => {
  it('should render without error', () => {
    const wrapper = shallow(<MainPicture />);
    expect((wrapper).exists()).toBe(true);
  });
  it('should return dummy text if no props are passed in', () => {
    const wrapper = shallow(<MainPicture />);
    expect(wrapper.props().children).toBe('I am photo');
  });
  it('Should Allow props of photo to be passed in', () => {
    const wrapper = mount(<MainPicture photo={mockPhotos[0]} />);
    expect(wrapper.props().children).toBe(undefined);
    expect(typeof wrapper.props().photo).toBe('object');
  });
  it('with mainPhoto prop should conditionally render to img in span', () => {
    const wrapper = mount(<MainPicture mainPhoto={mockPhotos[0]} />);
    expect(wrapper.children().hasClass('mainPicture')).toBe(true);
    expect(wrapper.children().children().hasClass('photoSize')).toBe(true);
  });
  it('with mainPhoto prop should conditionally render to span with img in it', () => {
    const wrapper = mount(<MainPicture mainPhoto={mockPhotos[0]} />);
    expect(wrapper.children().children().props().type).toBe('image');
    expect(wrapper.children().children().props().src).toEqual(expect.stringContaining('amazon'));
  });
  it('with mainPhoto should render with height and widthchange', () => {
    const wrapper = mount(<MainPicture mainPhoto={mockPhotos[0]} />);
    wrapper.setProps({ windowHeight: 900 });
    wrapper.update();
    expect(wrapper.children().children().props().style.height).toBe('100%');
    wrapper.setProps({ windowHeight: 900 });
    wrapper.setProps({ windowWidth: 900 });
    wrapper.update();
    expect(wrapper.children().children().props().style.height).toBe('590px');
    wrapper.setProps({ windowHeight: 500 });
    wrapper.update();
    expect(wrapper.children().children().props().style.height).toBe('552px');
  });
});
