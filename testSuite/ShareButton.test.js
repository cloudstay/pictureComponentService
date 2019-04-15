import React from 'react';
import { shallow, mount } from 'enzyme';
import SaveButton from '../client/components/SaveButton.jsx';


describe('Button Container Tests', () => {
  it('Should render without error', () => {
    const wrapper = mount(<SaveButton />);
    expect((wrapper).exists()).toBe(true);
  });
  it('Should be a button with an image', () => {
    const wrapper = mount(<SaveButton />);
    expect(wrapper.children().type()).toBe('button');
    expect(wrapper.children().childAt(0).type()).toBe('img');
  });
  it('Should change structure if window width is less than 745 px', () => {
    const wrapper = mount(<SaveButton />);
    wrapper.setProps({ windowWidth: 600 });
    wrapper.update();
    expect(wrapper.children().props().className).toBe('singleIconButton');
    wrapper.setProps({ windowWidth: 800 });
    wrapper.update();
    expect(wrapper.children().props().className).toBe('saveButton button');
  });
  it('Should not contain Save if under 745 px', () => {
    const wrapper = mount(<SaveButton />);
    wrapper.setProps({ windowWidth: 600 });
    wrapper.update();
    expect(wrapper.find('button').html()).not.toEqual(expect.stringContaining('Save'));
  });
});


// Should be transparent under 745
