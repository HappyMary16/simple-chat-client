import {processMessage} from "../actions/messageActions";

let stompClient = null;

export const setupSocket = (dispatch) => {
    const Stomp = require("stompjs");
    let SockJS = require("sockjs-client");
    SockJS = new SockJS('http://localhost:8080/chat');
    stompClient = Stomp.over(SockJS);
    stompClient.connect({},  () => onConnected(dispatch), (err) =>  onError(err));
}


const onConnected = (dispatch) => {

    stompClient.subscribe(
        "/topic/messages",
        (frame) => {
            dispatch(processMessage(JSON.parse(frame.body)))
        }
    );
};

const onError = (err) => {
    console.log(err);
};

export const sendMessage = (name, text) => {
        const message = {
            authorName: name,
            text: text
        };
        stompClient.send("/app/chat", {}, JSON.stringify(message));
};