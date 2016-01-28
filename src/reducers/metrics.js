import _ from 'underscore';

import { METRICS, METADATAS }  from '../data/boostrap';
const CREATE_METRIC = 'CREATE_METRIC';
const UPDATE_METRIC = 'UPDATE_METRIC';
const REMOVE_METRIC = 'REMOVE_METRIC';

const generateID = () => _.uniqueId('metric_');
const initialMetrics = METRICS.map((metric) => _.extend(metric, {id: generateID()}));
const initialState = {
  entities: initialMetrics,
};

let entities = [];

function generateRandomMetadatas() {
  const used_indexes = [];
  return _.compact(_.range(_.random(1, METADATAS.length)).map((item) => {
    const index = _.random(0, METADATAS.length -1);
    if (_.contains(used_indexes, index)) return;

    used_indexes.push(index);
    return METADATAS[index];
  }));
}

export default function metric(state = initialState, action) {
  switch (action.type) {
    case CREATE_METRIC:
      entities = state.entities.concat([{
        id: generateID(),
        name: action.name,
        metadatas: generateRandomMetadatas(),
      }]);

      return Object.assign({}, state, { entities });

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

export function createMetric(name) {
  return { type: CREATE_METRIC, name }
};

export function removeMetric(id) {
  return { type: REMOVE_METRIC, id }
};

export function updateMetricName({ name, id }) {
  return { type: UPDATE_METRIC, id, name };
};

