import {LOG_OUT} from "../actions/authAction";
import {PROCESS_MESSAGE} from "../actions/messageActions";
import StateLoader from "../store/StateLoader";

export default function messageReducer(
    state = new StateLoader().loadState().messageReducer || { messages: [] },
    action
) {
    switch (action.type) {

        case PROCESS_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload.message
                    ]
            };

        case LOG_OUT:
            return {
                ...state,
                messages: []
            };

        default:
            return state;
    }
}