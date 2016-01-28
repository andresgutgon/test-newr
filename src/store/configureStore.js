import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';

import reducer from '../reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(),
  persistState('metrics'),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
