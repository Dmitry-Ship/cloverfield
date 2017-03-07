import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import { Link } from 'react-router';
import Avatar from './Avatar';

const expect = chai.expect;

describe('<Avatar />', () => {
  it('renders Link as a wrapper', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find(Link)).to.have.length(1);
  });

  it('renders image inside', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('renders src prop correctly', () => {
    const randomString = 'lol';
    const wrapper = shallow(<Avatar src={randomString} />);
    expect(wrapper.instance().props.src).to.equal(randomString);
    expect(wrapper.find('img').prop('src')).to.equal(`/${randomString}`);
  });

  it('sets src to fallBack if src is not provided', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('img').prop('src')).to.equal("/noUserPic.png");
  });

  it('renders className prop correctly', () => {
    const randomString = 'lol';
    const wrapper = shallow(<Avatar className={randomString} />);
    expect(wrapper.instance().props.className).to.equal(randomString);
    expect(wrapper.find('img').prop('className')).to.equal(randomString);
  });

  it('renders default className prop correctly', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.instance().props.className).to.equal('');
    expect(wrapper.find('img').prop('className')).to.equal('');
  });

  it('renders fallBack prop correctly', () => {
    const randomString = 'lol';
    const wrapper = shallow(<Avatar fallBack={randomString} />);
    expect(wrapper.instance().props.fallBack).to.equal(randomString);
    expect(wrapper.find('img').prop('src')).to.equal(`/${randomString}`);
  });

  it('renders default fallBack prop correctly', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.instance().props.fallBack).to.equal('noUserPic.png');
    expect(wrapper.find('img').prop('src')).to.equal('/noUserPic.png');
  });

  it('renders to prop correctly', () => {
    const randomString = 'lol';
    const wrapper = shallow(<Avatar to={randomString} />);
    expect(wrapper.instance().props.to).to.equal(randomString);
    expect(wrapper.find(Link).prop('to')).to.equal(randomString);
  });
});
