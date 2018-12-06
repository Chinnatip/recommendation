// import { TYPES } from './Action'
import { combineReducers } from 'redux'
import { statics } from './global/Reducer'

export default history =>
  combineReducers({
    statics
  })
