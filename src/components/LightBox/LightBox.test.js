import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import LightBox from './LightBox';

describe('<LightBox />', () => {
  const closeLightBox = jest.fn();
  const images = [
    { id: '1', url: 'image.jpg' },
    { id: '2', url: 'photo.jpg' },
    { id: '3', url: 'file.jpg' },
  ];

  it('should render correctly', () => {
    const tree = renderer.create(
      <LightBox images={images} index={1} closeLightBox={closeLightBox} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('should call closeLightBox', () => {
  //   const wrapper = mount(
  //     <LightBox images={images} index={1} closeLightBox={closeLightBox} />
  //   );

  //   wrapper.find('img').at(1).simulate('click');

  //   const tree = renderer.create(
  //     <LightBox images={images} index={1} closeLightBox={closeLightBox} />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should call closeLightBox', () => {
    const wrapper = mount(
      <LightBox images={images} index={1} closeLightBox={closeLightBox} />
    );

    wrapper.find('div').first().simulate('click');

    expect(closeLightBox).toHaveBeenCalled();
  });
});
