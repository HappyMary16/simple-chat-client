import {LOG_OUT} from "../actions/authAction";
import {CLEAR_MESSAGE, RENDER_MESSAGE, RENDER_MESSAGES, SAVE_MESSAGE} from "../actions/messageActions";
import StateLoader from "../store/StateLoader";
export default function messageReducer(
    state = new StateLoader().loadState().messageReducer || { messages: [], messageText: "" },
    action
) {
    switch (action.type) {

        case RENDER_MESSAGES:
            return {
                ...state,
                messages: action.payload.messages
            };

        case RENDER_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload.message
                ]
            };

        case CLEAR_MESSAGE:
            return {
                ...state,
                messageText: ""
            }

        case SAVE_MESSAGE:
            return {
                ...state,
                messageText: action.payload.messageText
            }

        case LOG_OUT:
            return {
                ...state,
                messages: [],
                messageText: ""
            };

        default:
            return state;
    }
}