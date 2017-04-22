import React from 'react';
import { shallow, render } from 'enzyme';
// import { describe, it } from 'mocha';
import chai from 'chai';
import { Link } from 'react-router';
import Tag from './Tag';
// import styles from './Tag.scss';
const expect = chai.expect;

describe('<Tag />', () => {
  const tagText = 'lol';
  const onDeleteTag = () => {};
  it('renders correctly without crashing', () => {
    const wrapper = shallow(<Tag tagText={tagText} onDeleteTag={onDeleteTag} />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('renders <Link /> component inside', () => {
    const wrapper = shallow(<Tag tagText={tagText} onDeleteTag={onDeleteTag} />);
    expect(wrapper.find('Link')).to.have.length(1);
  });

  it('renders delete icon', () => {
    const wrapper = shallow(<Tag tagText={tagText} onDeleteTag={onDeleteTag} />);
    expect(wrapper.find('span')).to.have.length(1);
  });

  it('renders tagText prop correctly', () => {
    const wrapper = shallow(<Tag tagText={tagText} onDeleteTag={onDeleteTag} />);
    expect(wrapper.find(Link).text()).to.equal(tagText);
  });
  it('deletes tag on click event');
});


