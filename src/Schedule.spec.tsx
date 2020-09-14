import React from 'react';
import renderer from 'react-test-renderer';
import Schedule from './Root';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      const amount = 1000,
        payback = 3;
      return { amount, payback };
    }),
    useDispatch: () => jest.fn(),
  };
});

test('Root renders correctly', () => {
  const tree = renderer.create(<Schedule />).toJSON();
  expect(tree).toMatchSnapshot();
});
