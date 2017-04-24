import React from 'react';
import renderer from 'react-test-renderer';
import PopUpMenu from './PopUpMenu';

describe('<PopUpMenu />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
        <PopUpMenu />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render children when passed in', () => {
    const tree = renderer.create(
        <PopUpMenu >Hello World</PopUpMenu>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with position passed in', () => {
    const tree = renderer.create(
        <PopUpMenu position={'top'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});