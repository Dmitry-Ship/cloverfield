import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ColorMenu from './ColorMenu';

describe('<ColorMenu />', () => {
  const onSetColor = jest.fn();

  it('should render correctly', () => {
    const tree = renderer.create(
      <ColorMenu onSetColor={onSetColor} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when position passed in', () => {
    const tree = renderer.create(
      <ColorMenu position="top" onSetColor={onSetColor} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when color passed in', () => {
    const tree = renderer.create(
      <ColorMenu color="red" onSetColor={onSetColor} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onSetColor with right argument', () => {
    const wrapper = shallow(
      <ColorMenu onSetColor={onSetColor} />
    );

    wrapper.find('span').first().simulate('click');

    expect(onSetColor.mock.calls[0][0]).toBe('white');
  });
});
