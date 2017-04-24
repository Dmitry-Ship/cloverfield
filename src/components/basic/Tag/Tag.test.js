import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Tag from './Tag';
import styles from './Tag.scss';

describe('<Tag />', () => {
  const onDeleteTag = jest.fn();
  const tagText = 'hello';

  it('should render correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Tag tagText={tagText} onDeleteTag={onDeleteTag} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onDeleteTag with tagText argument', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Tag tagText={tagText} onDeleteTag={onDeleteTag} />
      </MemoryRouter>
    );

    wrapper.find('span').simulate('click');

    expect(onDeleteTag.mock.calls[0][0]).toBe(tagText);
  });
});
