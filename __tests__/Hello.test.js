import React from 'react';
import renderer from 'react-test-renderer';
import Hello from '../client/Hello';

it('renders correctly', () => {
  const hello = renderer.create(<Hello/>);
  expect(hello.toJSON()).toMatchSnapshot();
});
