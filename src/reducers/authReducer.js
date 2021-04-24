import {LOG_IN, LOG_OUT, SAVE_USERNAME} from "../actions/authAction";
import StateLoader from "../store/StateLoader";

export default function authReducer(
    state = new StateLoader().loadState().authReducer || { isAuthorized: false },
    action
) {
    switch (action.type) {

        case LOG_IN:
            return {
                ...state,
                isAuthorized: true
            };

        case LOG_OUT:
            return {
                ...state,
                isAuthorized: false,
                username: undefined
            };

        case SAVE_USERNAME:
            return {
                ...state,
                username: action.payload.username
            };

        default:
            return state;
    }
}