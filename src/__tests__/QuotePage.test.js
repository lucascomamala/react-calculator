import React from 'react';
import renderer from 'react-test-renderer';
import QuotePage from '../pages/QuotePage';

it('renders correctly', () => {
  const tree = renderer.create(<QuotePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
