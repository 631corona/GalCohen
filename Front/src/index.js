import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import labs from './store/reducers/labs';
import soldiresReducer from './store/reducers/soldiers';
import graph from './store/reducers/graph';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchLabs } from './store/sagas/index';

const rootReducer = combineReducers({
    labs: labs,
    graph: graph,
    soldiers: soldiresReducer
});

const sagaMiddleware = createSagaMiddleware();

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk, sagaMiddleware)));

sagaMiddleware.run(watchLabs); 

ReactDOM.render(<Provider store={store} > <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
