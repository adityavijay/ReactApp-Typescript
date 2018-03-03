import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import AllReducers from './reducers/reducerList.js';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const rootReducer = combineReducers(AllReducers);
let store = createStore(rootReducer, applyMiddleware(logger));

export default ({children})=>{
	return (
			<Provider store={store}>
				{children}
			</Provider>
		);
}	