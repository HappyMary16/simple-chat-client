import {call, put, takeEvery} from 'redux-saga/effects'
import http from "../services/httpService";
import {clearMessage, LOAD_MESSAGES, renderMessages, SEND_MESSAGE} from "../actions/messageActions";
import {addError} from "../actions/errorActions";
import {socket} from "../services/socketService";

export function* messageWatcher() {
    yield takeEvery(LOAD_MESSAGES, loadMessagesProcessor);
    yield takeEvery(SEND_MESSAGE, sendMessageProcessor);
}

function* loadMessagesProcessor() {
    try {
        let response = yield call(http, {
            url: 'messages',
            method: 'get'
        })

        if (response && response.status === 200) {
            yield put(renderMessages(response.data))
        } else {
            yield put(addError("Something went wrong, sorry :("))
        }
    } catch (e) {
        yield put(addError("Something went wrong, sorry :("))
    }
}

function* sendMessageProcessor(action) {
    try {
        const { username, messageText } = action.payload

        yield call(socket, {
            topic: "/app/chat",
            body: {
                username,
                messageText
            }
        })

        yield put(clearMessage())

    } catch (error) {
        yield put(addError("Can't send a message, sorry :("))
    }
}