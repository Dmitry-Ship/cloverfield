import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import styles from './Modal.scss';
import Modal from './Modal';

describe('<Modal />', () => {
  const closeModal = jest.fn();

  it('should render correctly', () => {
    const tree = renderer.create(
      <Modal closeModal={closeModal} >Hello World</Modal>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should simulate click on icon', () => {
    const wrapper = shallow(
      <Modal closeModal={closeModal} >Hello World</Modal>
    );

    wrapper.find('Icon').simulate('click');

    expect(closeModal).toHaveBeenCalled();
  });

  it('should simulate click on wrapper', () => {
    const closeModal = jest.fn();
    const wrapper = mount(
      <Modal closeModal={closeModal} >Hello World</Modal>
    );

    wrapper.find(`div.${styles.wrapper}`).simulate('click');

    expect(closeModal).toHaveBeenCalled();
  });
});
