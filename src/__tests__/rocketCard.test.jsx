import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import mockRocketData from './mock_rockets_data.json'

//import { configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });



import RocketCard from '../components/rockets/RocketCard';
import RocketImagePanel from '../components/rockets/RocketImagePanel';
import RocketData from '../components/rockets/RocketData';

const props = {
  rocket: mockRocketData,
}
const wrapper = shallow(<RocketCard {...props} />)

describe('rocket card', () => {

  it('renders', () => {
      expect(wrapper).toMatchSnapshot();

  });
});
