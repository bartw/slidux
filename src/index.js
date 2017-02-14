import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';

ReactDOM.render(
  <h1>{store.getState().selectedId}</h1>,
  document.getElementById('root')
);