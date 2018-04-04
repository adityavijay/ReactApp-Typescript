'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.store = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reducerList = require('./reducers/reducerList.js');

var _reducerList2 = _interopRequireDefault(_reducerList);

var _reactRedux = require('react-redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import window from 'window';

var rootReducer = (0, _redux.combineReducers)(_reducerList2.default);
var store = exports.store = (0, _redux.createStore)(rootReducer, (0, _redux.applyMiddleware)(_reduxLogger2.default));
/*
	// const combined = combineReducers({ a, b })
function combined(state = {}, action) {
  return {
    a: a(state.a, action),
    b: b(state.b, action)
  };
}
*/

exports.default = function (_ref) {
		var children = _ref.children;

		return _react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				children
		);
};