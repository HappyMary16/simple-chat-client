import {renderMessage} from "../actions/messageActions";
import {addError} from "../actions/errorAction";

let stompClient = null;

export const setupSocket = (dispatch) => {
    const Stomp = require("stompjs");
    let SockJS = require("sockjs-client");
    SockJS = new SockJS('http://localhost:8080/chat');
    stompClient = Stomp.over(SockJS);
    stompClient.connect({}, () => onConnected(dispatch), (err) => onError(err, dispatch));
}

const onConnected = (dispatch) => {
    stompClient.subscribe(
        "/topic/messages",
        (frame) => {
            dispatch(renderMessage(JSON.parse(frame.body)))
        }
    );
};

const onError = (err, dispatch) => {
    dispatch(addError(err));
};

export const socket = ({ topic, body }) => {
    stompClient.send(topic, {}, JSON.stringify(body));
};