'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _users = require('../reducers/users');

var _users2 = _interopRequireDefault(_users);

var _selectedUser = require('../reducers/selectedUser');

var _selectedUser2 = _interopRequireDefault(_selectedUser);

var _reactRedux = require('react-redux');

var _userList = require('../containers/userList');

var _userList2 = _interopRequireDefault(_userList);

var _selectedUser3 = require('../containers/selectedUser');

var _selectedUser4 = _interopRequireDefault(_selectedUser3);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import NavRoute from '../containers/routing';

var allReducers = (0, _redux.combineReducers)({ users: _users2.default, currentUser: _selectedUser2.default });
var allReducers1 = function allReducers1() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	return { users: (0, _users2.default)(state, action), currentUser: (0, _selectedUser2.default)(state, action) };
};
var store = (0, _redux.createStore)(allReducers1);
/*
* 1. Here store is a center storage of states for the app(all containers and compoents inside them will be connected here). First instance of App instantiated from initial state of storage.
  2. This storage is synched through mapStateToProps function argument of connected function
  
  3. Any events dispatches some action to root reducer as argument, which passes to each reducer in to it and set a new state in storage. Which ultimately rerender component again because setstate happens
*/

var TestPropType = function TestPropType(_ref) {
	var name = _ref.name;
	return _react2.default.createElement(
		'div',
		null,
		name
	);
};
TestPropType.propTypes = {
	name: _propTypes2.default.string
};

var ReactApp = function ReactApp(props) {
	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: props.store },
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(TestPropType, { name: "Testing proptype" }),
			_react2.default.createElement(
				'div',
				null,
				'Users List'
			),
			_react2.default.createElement(_userList2.default, null),
			_react2.default.createElement('br', null),
			_react2.default.createElement(
				'div',
				null,
				'Selected User'
			),
			_react2.default.createElement(_selectedUser4.default, null),
			_react2.default.createElement(
				'p',
				null,
				_react2.default.createElement(
					'b',
					null,
					'Routing Navigation'
				)
			)
		)
	);
};

var App = function App() {
	return _react2.default.createElement(ReactApp, { store: store });
};

exports.default = App;