import React from 'react';
import { shallow, mount } from 'enzyme';
import TopButtonsContainer from '../client/components/TopButtonsContainer.jsx';

describe('Button Container Tests', () => {
  it('Should render without error', () => {
    const wrapper = mount(<TopButtonsContainer />);
    expect((wrapper).exists()).toBe(true);
  });
  it('Should contain Share and Save Button', () => {
    const wrapper = mount(<TopButtonsContainer />);
    expect(wrapper.children().childAt(0).name()).toBe('ShareButton');
    expect(wrapper.children().childAt(1).name()).toBe('SaveButton');
  });
  it('Should change width depending on windowWidth', () => {
    const wrapper = mount(<TopButtonsContainer />);
    wrapper.setProps({ windowWidth: 800 });
    wrapper.update();
    expect(wrapper.children().props().style.width).toBe('206px');
    wrapper.setProps({ windowWidth: 600 });
    wrapper.update();
    expect(wrapper.children().props().style.width).toBe('64px');
  });
  it('Should pass down windowWidth', () => {
    const wrapper = mount(<TopButtonsContainer />);
    wrapper.setProps({ windowWidth: 600 });
    wrapper.update();
    expect(wrapper.children().childAt(0).props().windowWidth).toBe(600);
  });
});
