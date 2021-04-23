import { all } from 'redux-saga/effects';
import { messageWatcher } from '../sagas';

export default function* rootSaga() {
    yield all([
        messageWatcher()
    ]);
}