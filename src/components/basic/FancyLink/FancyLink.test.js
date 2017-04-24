import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import FancyLink from './FancyLink';

describe('<FancyLink />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <FancyLink />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render whith children passed in', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <FancyLink>Hello World</FancyLink>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
