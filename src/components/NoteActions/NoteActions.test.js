import React from 'react';
import renderer from 'react-test-renderer';
import NoteActions from './NoteActions';

describe('<NoteActions />', () => {
  const onSetColor = jest.fn();
  const onChange = jest.fn();
  

  it('should render correctly', () => {
    const tree = renderer.create(
      <NoteActions id="1" onSetColor={onSetColor} onChange={onChange} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children when position passed in', () => {
    const tree = renderer.create(
      <NoteActions id="1" onSetColor={onSetColor} onChange={onChange} >Hello World</NoteActions>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
