import { combineReducers } from 'redux'
import {user} from './reducers/user'
import {settings} from './reducers/settings'

export default combineReducers({
  user,
  settings
})
