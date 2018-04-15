import React from 'react';

export default class Hello extends React.Component {
  constructor(params) {
    super(params);
    this.state = { name: 'React' };
  }

  render() {
    return (
      <div>
        <h1>Hello from {this.state.name}!</h1>
      </div>
    );
  }
}
