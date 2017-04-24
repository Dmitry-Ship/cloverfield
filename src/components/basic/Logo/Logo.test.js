import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Logo from './Logo';

describe('<Logo />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
