import { combineReducers } from 'redux'
import messageReducer from './messageReducer'
import authReducer from './authReducer'
import errorReducer from "./errorReducer";

export const rootReducer = combineReducers({
    messageReducer,
    authReducer,
    errorReducer
})