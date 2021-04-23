import {renderMessage} from "../actions/messageActions";
import {addError} from "../actions/errorAction";
import {connected} from "../actions/connectionAction";

let stompClient = null;

export const setupSocket = (dispatch) => {
    const Stomp = require("stompjs");
    let SockJS = require("sockjs-client");
    SockJS = new SockJS('http://localhost:8080/chat');
    stompClient = Stomp.over(SockJS);
    stompClient.connect({},  () => onConnected(dispatch), (err) =>  onError(err, dispatch));
}

const onConnected = (dispatch) => {
    dispatch(connected());

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

export const sendMessage = ({ name, text }) => {
    const message = {
        authorName: name,
        text: text
    };
    stompClient.send("/app/chat", {}, JSON.stringify(message));
};