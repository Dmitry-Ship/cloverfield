import React from 'react';
import renderer from 'react-test-renderer';

import Icon from './Icon';

describe('<Icon />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Icon name={'face'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render children when passed in', () => {
    const tree = renderer.create(
      <Icon name={'face'} >Hello World</Icon>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
