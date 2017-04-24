import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('<Layout />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Layout />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children when passed in', () => {
    const tree = renderer.create(
      <Layout>Hello</Layout>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
