'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reducerList = require('../reducers/reducerList.js');

var _reducerList2 = _interopRequireDefault(_reducerList);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)(_reducerList2.default);
var store = (0, _redux.createStore)(reducers);

exports.default = function (_ref) {
	var children = _ref.children;

	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		children
	);
};