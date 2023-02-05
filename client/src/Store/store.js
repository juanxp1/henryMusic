import {createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;