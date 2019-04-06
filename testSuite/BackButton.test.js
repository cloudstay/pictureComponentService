import React from 'react';
import { shallow, mount, render } from 'enzyme';
import BackButton from '../client/components/photoCarousel/BackButton.jsx';
// import mockPhotos from '../__mocks__/mockPhotoData.js';


describe('Render Picture React Base', () => {
  it('should render without error', () => {
    const wrapper = mount(<BackButton />);
    expect((wrapper).exists()).toBe(true);
  });
  it('should be a svg img in a button with an onClick', () => {
    const wrapper = mount(<BackButton />);
    expect(wrapper.children().type()).toBe('button');
    expect(wrapper.children().props().onClick).not.toBe(undefined);
    expect(wrapper.children().children().type()).toBe('img');
    expect(wrapper.children().children().props().src).toEqual(expect.stringContaining('svg'));
  });
  it('should change sizes depending on windowWidth', () => {
    const wrapper = mount(<BackButton />);
    wrapper.setProps({ windowWidth: 1250 });
    wrapper.update();
    expect(wrapper.children().children().props().style.width).toBe(76);
    expect(wrapper.children().children().props().style.height).toBe(76.8);
    wrapper.setProps({ windowWidth: 150 });
    wrapper.update();
    expect(wrapper.children().children().props().style.width).toBe(33);
    expect(wrapper.children().children().props().style.height).toBe(33.6);
  });
});
