import React from 'react';
import renderer from 'react-test-renderer';
import Root from './Root';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      const amount = 0,
        payback = 0;
      return { amount, payback };
    }),
    useDispatch: () => jest.fn(),
  };
});

test('Root renders correctly', () => {
  const tree = renderer.create(<Root />).toJSON();
  expect(tree).toMatchSnapshot();
});
