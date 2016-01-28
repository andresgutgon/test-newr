import _ from 'underscore';

import { METRICS, METADATAS }  from '../data/boostrap';
const ADD_METRIC = 'ADD_METRIC';
const UPDATE_METRIC = 'UPDATE_METRIC';
const REMOVE_METRIC = 'REMOVE_METRIC';

const initialMetrics = METRICS.map((metric) => _.extend(metric, {id: _.uniqueId('metric_')}));
const initialState = {
  entities: initialMetrics,
};

let entities = [];

export default function metric(state = initialState, action) {
  switch (action.type) {
  case ADD_METRIC:
    return state;

  case REMOVE_METRIC:
    entities = state.entities.filter((m) => m.id !== action.id);

    return Object.assign({}, state, { entities });

  case UPDATE_METRIC:
    entities = state.entities.map((metric) => {
      if (metric.id !== action.id) return metric;
      const name = action.name || 'No title';
      return Object.assign({}, metric, { name });
    });

    return Object.assign({}, state, { entities });

  default:
    return state;
  }
}

export function updateMetricName({ name, id }) {
  return { type: UPDATE_METRIC, id, name };
};

export function removeMetric(id) {
  return { type: REMOVE_METRIC, id }
};
