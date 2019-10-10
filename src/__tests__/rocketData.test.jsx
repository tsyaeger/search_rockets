import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import mockRocketData from './mock_rockets_data.json'

import RocketData from '../components/rockets/RocketData';
import RocketCard from '../components/rockets/RocketCard';

const props = {
  rocket: mockRocketData,
}
const wrapper = shallow(<RocketData {...props}/>)

describe('rocket data', () => {

  it('renders without crashing', () => {

      expect(wrapper.contains(
          <p>invalid</p>
      )).toBe(false);

      expect(wrapper.exists()).toBe(true)

      expect(wrapper.find('p').length).toBe(7);
  });

});
