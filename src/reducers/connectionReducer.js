import StateLoader from "../store/StateLoader";
import {CONNECTED, DISCONNECTED} from "../actions/connectionActions";

export default function connectionReducer(
    state = new StateLoader().loadState().connectionReducer || { },
    action
) {
    switch (action.type) {

        case CONNECTED:
            return {
                ...state,
                isConnected: true
            };

        case DISCONNECTED:
            return {
                ...state,
                isConnected: false
            };

        default:
            return state;
    }
}