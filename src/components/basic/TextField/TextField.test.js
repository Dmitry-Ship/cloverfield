import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextField from './TextField';

describe('<TextField />', () => {
  const onChange = jest.fn();
  it('should render correctly', () => {
    const tree = renderer.create(
      <TextField value="" onChange={onChange} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call expandImage', () => {
    const wrapper = shallow(
      <TextField value="" onChange={onChange} />
    );

    wrapper.find('input').first().simulate('change', { target: { value: 'My new value' } });

    expect(onChange).toBeCalledWith({ target: { value: 'My new value' } });
  });
});
