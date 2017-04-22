import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('<Button />', () => {
  it('should render initial state', () => {
    const tree = renderer.create(
      <Button />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display loader when isLoading is true', () => {
    const tree = renderer.create(
      <Button isLoading />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display an icon when icon name is provided', () => {
    const tree = renderer.create(
      <Button iconName="face" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display children when children are provided', () => {
    const tree = renderer.create(
      <Button >click me</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
