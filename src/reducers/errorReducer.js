import StateLoader from "../store/StateLoader";
import {ADD_ERROR, REMOVE_ERROR} from "../actions/errorAction";

export default function errorReducer(
    state = new StateLoader().loadState().errorReducer || {  },
    action
) {
    switch (action.type) {

        case ADD_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        case REMOVE_ERROR:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}