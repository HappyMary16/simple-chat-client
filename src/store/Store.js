import StateLoader from './StateLoader';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux'
import {rootReducer} from '../reducers';
import index from "../sagas";

export default function createAppStore() {
    const stateLoader = new StateLoader();
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    sagaMiddleware.run(index)

    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    });

    return store;
}