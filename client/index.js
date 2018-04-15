import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

ReactDOM.render(<Hello/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
