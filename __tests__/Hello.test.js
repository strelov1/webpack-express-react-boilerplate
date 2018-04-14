import React from 'react';
import Hello from '../client/Hello';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const hello = renderer.create(<Hello/>);
    expect(hello.toJSON()).toMatchSnapshot();
});