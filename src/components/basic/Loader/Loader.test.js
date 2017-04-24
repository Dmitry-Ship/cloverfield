import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './Loader';
import styles from './Loader.scss';

describe('<Loader />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Loader />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render text when passed in', () => {
    const tree = renderer.create(
      <Loader text={'hello world'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render spinny loader', () => {
    const tree = renderer.create(
      <Loader type={'spinny'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render clock loader', () => {
    const tree = renderer.create(
      <Loader type={'clock'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render bouncy loader', () => {
    const tree = renderer.create(
      <Loader type={'bouncy'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render triple-dots loader', () => {
    const tree = renderer.create(
      <Loader type={'triple-dots'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
