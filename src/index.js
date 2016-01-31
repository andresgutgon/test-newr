require("font-awesome-webpack");

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/App';
import configureStore from 'store/configureStore';
const store = configureStore();

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  div
);
