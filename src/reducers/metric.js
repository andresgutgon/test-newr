import _ from 'underscore';

import { METRICS, METADATAS }  from '../data/boostrap';
const ADD_METRIC = 'ADD_METRIC';
const REMOVE_METRIC = 'REMOVE_METRIC';

const initialMetrics = METRICS.map((metric) => _.extend(metric, {id: _.uniqueId('metric_')}));
const initialState = {
  metrics: {
    entities: initialMetrics,
    byId: _.indexBy(initialMetrics, 'id'),
  },
};

export default function metric(state = initialState, action) {
  switch (action.type) {
  case ADD_METRIC:
    return state;
  case REMOVE_METRIC:
    return state;
  default:
    return state;
  }
}
