import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRoute } from 'react-router-dom';
import LoginModal from './LoginModal';

describe('<LoginModal />', () => {
  const closeModal = jest.fn();
  const onForgotClick = jest.fn();
  const onSignUpClick = jest.fn();
  it('should render correctly', () => {
    const tree = renderer.create(
      <MemoryRoute>
        <LoginModal closeModal={closeModal} onForgotClick={onForgotClick} onSignUpClick={onSignUpClick} />
      </MemoryRoute>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});