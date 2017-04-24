import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GetStarted from './GetStarted';

describe('<GetStarted />', () => {
  const openSignUpModal = jest.fn();
  const openLoginModal = jest.fn();

  it('should render correctly', () => {
    const tree = renderer.create(
      <GetStarted openSignUpModal={openSignUpModal} openLoginModal={openLoginModal} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call openSignUpModal', () => {
    const wrapper = shallow(
      <GetStarted openSignUpModal={openSignUpModal} openLoginModal={openLoginModal} />
    );

    wrapper.find('Button').first().simulate('click');

    expect(openSignUpModal.mock.calls.length).toBe(1);
  });

  it('should call openLoginModal', () => {
    const wrapper = shallow(
      <GetStarted openSignUpModal={openSignUpModal} openLoginModal={openLoginModal} />
    );

    wrapper.find('Button').at(1).simulate('click');

    expect(openLoginModal.mock.calls.length).toBe(1);
  });
});
