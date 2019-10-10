import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import RocketCard from '../components/rockets/RocketCard';
import RocketImagePanel from '../components/rockets/RocketImagePanel';


describe('rocket image panel', () => {

  it('renders', () => {
    const wrapper = shallow(<RocketImagePanel />);
    expect(wrapper.exists()).toBe(true)
  });

  it('renders an image element', () => {
    const wrapper = shallow(<RocketImagePanel />);
    expect(wrapper.find("img")).toHaveLength(1);
  });

});
