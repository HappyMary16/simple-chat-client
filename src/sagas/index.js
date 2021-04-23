import {call, takeEvery} from 'redux-saga/effects'
// import {SEND_MESSAGE} from "../actions/messageActions";
import http from "../services/http";

export function* messageWatcher() {
    // yield takeEvery(SEND_MESSAGE, action => sendMessage(socket, action));
}

// function* sendMessage(socket, action) {
//     try {
//         const { authorName, text } = action.payload
//
//         yield call(http, {
//             url: 'chat',
//             method: 'post',
//             data: {
//                 authorName,
//                 text
//             }
//         })
//
//     } catch (e) {
//         alert(e)
//     }
// }