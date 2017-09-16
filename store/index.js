import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DateObj from './reducers/date.js'
import data from './reducers/data.js'
import mainData from './reducers/mainData.js'
import keys from './reducers/keys.js'

const middleware = applyMiddleware(thunk);
export const rootReducer = combineReducers({
    DateObj,
    data,
    mainData,
    keys
})
let store = createStore(
  rootReducer,
  middleware
  )
export default store;