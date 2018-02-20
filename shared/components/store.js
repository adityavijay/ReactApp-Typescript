import React from 'react';
import {createStore} from 'redux';
import AllReducers from '../reducers/reducerList.js';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';


const reducers = combineReducers(AllReducers);
let store = createStore(reducers);

export default ({children})=>{
	return (
			<Provider store={store}>
				{children}
			</Provider>
		);
}	