import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AttachedImages from './AttachedImages';

describe('<AttachedImages />', () => {
  const onDelete = jest.fn();
  const expandImage = jest.fn();
  const images = [
    { id: '1', url: 'image.jpg' },
    { id: '2', url: 'photo.jpg' },
  ];

  it('should render correctly', () => {
    const tree = renderer.create(
      <AttachedImages images={images} expandImage={expandImage} onDelete={onDelete} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onDelete', () => {
    const wrapper = shallow(
      <AttachedImages images={images} expandImage={expandImage} onDelete={onDelete} />
    );

    wrapper.find('Icon').first().simulate('click');

    expect(onDelete).toBeCalledWith(images[0].id);
  });

  it('should call expandImage', () => {
    const wrapper = shallow(
      <AttachedImages images={images} expandImage={expandImage} onDelete={onDelete} />
    );

    wrapper.find('img').first().simulate('click');

    expect(expandImage).toBeCalledWith(images, 0);
  });
});
