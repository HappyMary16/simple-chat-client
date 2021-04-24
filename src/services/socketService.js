import {renderMessage} from "../actions/messageActions";
import {addError} from "../actions/errorActions";
import {socketUrl, topics} from '../config.json'
import {connected, disconnected} from "../actions/connectionActions";

let stompClient = null;

export const setupSocket = (dispatch) => {
    const Stomp = require("stompjs");
    let SockJS = require("sockjs-client");
    SockJS = new SockJS(socketUrl);
    stompClient = Stomp.over(SockJS);
    stompClient.connect({}, () => onConnected(dispatch), (err) => onError(err, dispatch));
}

const onConnected = (dispatch) => {
    dispatch(connected());

    topics.forEach(topic =>
        stompClient.subscribe(
            topic,
            (frame) => {
                dispatch(renderMessage(JSON.parse(frame.body)))
            }
        ));
};

const onError = (err, dispatch) => {
    dispatch(disconnected());
    dispatch(addError(err));
};

export const socket = ({topic, body}) => {
    stompClient.send(topic, {}, JSON.stringify(body));
};