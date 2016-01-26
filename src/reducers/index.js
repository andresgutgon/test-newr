import { combineReducers } from 'redux';

import app from './app';
import metric from './metric';

const rootReducer = combineReducers({
  app,
  metric,
});

export default rootReducer;
