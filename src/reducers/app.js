const TOGGLE_EDITING = 'TOGGLE_EDITING';

export default function metric(state = {editing: false}, action) {
  switch (action.type) {
  case TOGGLE_EDITING:
    return Object.assign({}, state, {editing: !state.editing});
  default:
    return state;
  }
}

export function toggle() {
  return {
    type: TOGGLE_EDITING
  };
}
