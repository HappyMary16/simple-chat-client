import {LOG_IN, LOG_OUT} from "../actions/authAction";
import StateLoader from "../store/StateLoader";

export default function authReducer(
    state = new StateLoader().loadState().authReducer || { username: undefined },
    action
) {
    switch (action.type) {

        case LOG_IN:
            return {
                ...state,
                username: action.payload.username
            };

        case LOG_OUT:
            return {
                ...state,
                username: undefined
            };

        default:
            return state;
    }
}