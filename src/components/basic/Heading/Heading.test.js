import React from 'react';
import renderer from 'react-test-renderer';
import Heading from './Heading';

describe('<Heading />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Heading>Hello World</Heading>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
