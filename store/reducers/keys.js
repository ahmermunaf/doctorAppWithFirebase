import Main_Action from '../actions/main_action.js'
function keys(state = [], action) {
  switch (action.type) {
  case Main_Action.dataFromStorage:
    return Object.assign([], action.keys);
  default:
    return state
  }
}

export default keys;