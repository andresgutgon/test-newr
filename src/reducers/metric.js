import _ from 'underscore';

import { METRICS, METADATAS }  from '../data/boostrap';
const ADD_METRIC = 'ADD_METRIC';
const UPDATE_METRIC = 'UPDATE_METRIC';
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

  case UPDATE_METRIC:
    const { metrics } = state;
    const metric = metrics.byId[action.data.id];

    if (!metric) return state;

    metric.name = action.data.name || 'no title';

    return Object.assign({}, state, {
      entities: metrics.entities,
      byId: _.indexBy(metrics.entities, 'id'),
    });

  default:
    return state;
  }
}

export function updateMetricName({ name, id }) {
  return {
    type: UPDATE_METRIC,
    data: {name, id},
  }
};
