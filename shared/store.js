import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import AllReducers from './reducers/reducerList.js';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
//import window from 'window';

const rootReducer = combineReducers(AllReducers);
export let store = createStore(rootReducer, applyMiddleware(logger));
/*
	// const combined = combineReducers({ a, b })
function combined(state = {}, action) {
  return {
    a: a(state.a, action),
    b: b(state.b, action)
  };
}
*/
export default ({children})=>{
	return (
			<Provider store={store}>
				{children}
			</Provider>
		);
}	