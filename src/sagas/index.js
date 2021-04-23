import { all } from 'redux-saga/effects';
import { messageWatcher } from './messageSagas';

export default function* index() {
    yield all([
        messageWatcher()
    ]);
}