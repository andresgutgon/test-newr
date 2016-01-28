import { combineReducers } from 'redux';

import app from './app';
import metrics from './metrics';

const rootReducer = combineReducers({
  app,
  metrics,
});

export default rootReducer;
