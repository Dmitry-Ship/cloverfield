import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  const links = [
    { label: 'Home', iconName: 'home', to: '/' },
    { label: 'Stack', iconName: 'info_outline', to: '/about' },
  ];

  it('should render correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <NavBar links={links} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render children when passed in', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <NavBar links={links}>Hello World</NavBar>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
