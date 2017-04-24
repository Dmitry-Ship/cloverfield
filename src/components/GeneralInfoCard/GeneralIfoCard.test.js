import React from 'react';
import renderer from 'react-test-renderer';
import GeneralInfoCard from './GeneralInfoCard';

describe('<GeneralInfoCard />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <GeneralInfoCard images={1} tags={1} notes={1} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
