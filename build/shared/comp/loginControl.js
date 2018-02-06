'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LogInControl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Greeting(props) {
	var isLoggedIn = props.state;
	if (isLoggedIn) return _react2.default.createElement(
		'div',
		null,
		'Hello welcome'
	);
	return _react2.default.createElement(
		'div',
		null,
		'You are logged out'
	);
}

function LogInButton(props) {

	return _react2.default.createElement(
		'button',
		{ onClick: props.onClick },
		'LogIn'
	);
}

function LogOutButton(props) {
	return _react2.default.createElement(
		'button',
		{ onClick: props.onClick },
		'LogOut'
	);
}

var LogInControl = exports.LogInControl = function (_React$Component) {
	_inherits(LogInControl, _React$Component);

	function LogInControl(props) {
		_classCallCheck(this, LogInControl);

		var _this = _possibleConstructorReturn(this, (LogInControl.__proto__ || Object.getPrototypeOf(LogInControl)).call(this, props));

		_this.state = { isLoggedIn: false };
		_this.onLogInClick = _this.onLogInClick.bind(_this);
		_this.onLogOutClick = _this.onLogOutClick.bind(_this);
		return _this;
	}

	_createClass(LogInControl, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextSt) {
			console.log(1);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, NextSt) {
			console.log(2);
			return true;
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps, NextSt) {
			console.log(3);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(nextProps, NextSt) {
			console.log(4);
		}
	}, {
		key: 'onLogInClick',
		value: function onLogInClick() {
			this.setState({ isLoggedIn: true });
		}
	}, {
		key: 'onLogOutClick',
		value: function onLogOutClick() {
			this.setState({ isLoggedIn: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var isLoggedIn = this.state.isLoggedIn;

			return isLoggedIn ? _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(LogOutButton, { onClick: this.onLogOutClick }),
				_react2.default.createElement(Greeting, { state: isLoggedIn })
			) : _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(LogInButton, { onClick: this.onLogInClick }),
				_react2.default.createElement(Greeting, { state: isLoggedIn })
			);
		}
	}]);

	return LogInControl;
}(_react2.default.Component);