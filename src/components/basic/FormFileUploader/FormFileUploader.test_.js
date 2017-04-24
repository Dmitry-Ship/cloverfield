import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import FormFileUploader from './FormFileUploader';

describe('<FormFileUploader />', () => {
  const onChange = jest.fn();
  const onDeleteImage = jest.fn();
  const images = [
    { id: '1', url: 'image.jpg' },
    { id: '2', url: 'photo.jpg' },
  ];

  it('should render correctly', () => {
    const tree = renderer.create(
      <FormFileUploader onChange={onChange} onDeleteImage={onDeleteImage} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with preview passed in', () => {
    const tree = renderer.create(
      <FormFileUploader preview={'previews'} onChange={onChange} onDeleteImage={onDeleteImage} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with text passed in', () => {
    const tree = renderer.create(
      <FormFileUploader text={'hello world'} onChange={onChange} onDeleteImage={onDeleteImage} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with id passed in', () => {
    const tree = renderer.create(
      <FormFileUploader id={'1'} onChange={onChange} onDeleteImage={onDeleteImage} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when required is true', () => {
    const tree = renderer.create(
      <FormFileUploader required onChange={onChange} onDeleteImage={onDeleteImage} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onChange', () => {
    const wrapper = mount(
      <FormFileUploader onChange={onChange} onDeleteImage={onDeleteImage} />
    );
    const file = new Blob(['fileContents.lol'], { type: 'image/*' });
    wrapper.find('input').first().simulate('change', {
      target: {
        files: [
          file,
        ],
      },
    });

    expect(onChange.mock.calls[0][0]).toBe('dummyValue.something');
  });

});


