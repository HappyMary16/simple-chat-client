import { combineReducers } from 'redux'
import messageReducer from './messageReducer'
import authReducer from './authReducer'

export const chat = combineReducers({
    messageReducer,
    authReducer
})