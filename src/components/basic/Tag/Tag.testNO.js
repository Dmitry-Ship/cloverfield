import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router';
import Tag from './Tag';


describe('<MyComponent />', () => {
  it('renders correctly without crashing', () => {
    const wrapper = shallow(<Tag />);
    expect(wrapper.find(Link)).to.have.length(1);
  });
});

