import StateLoader from './StateLoader';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import {chat} from '../reducers';
import rootSaga from "./rootSaga";

export default function createAppStore() {
    const stateLoader = new StateLoader();
    const sagaMiddleware = createSagaMiddleware();

    const rootReducer = combineReducers({
        chat
    });

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    sagaMiddleware.run(rootSaga)

    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    });

    return store;
}