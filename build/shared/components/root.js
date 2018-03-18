'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _home = require('./home.js');

var _home2 = _interopRequireDefault(_home);

var _clock = require('./clock.js');

var _clock2 = _interopRequireDefault(_clock);

var _store = require('../store.js');

var _store2 = _interopRequireDefault(_store);

var _questionTest = require('./questionTest.js');

var _questionTest2 = _interopRequireDefault(_questionTest);

var _userList = require('../containers/userList');

var _userList2 = _interopRequireDefault(_userList);

var _selectedUser = require('../containers/selectedUser');

var _selectedUser2 = _interopRequireDefault(_selectedUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Clock from '../containers/clock.js';


var Root = function (_Component) {
	_inherits(Root, _Component);

	function Root() {
		_classCallCheck(this, Root);

		return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	}

	_createClass(Root, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_store2.default,
					null,
					_react2.default.createElement(_reactRouter.Route, { path: '/', render: function render(_ref) {
							var match = _ref.match,
							    location = _ref.location,
							    rest = _objectWithoutProperties(_ref, ['match', 'location']);

							return _react2.default.createElement(
								_home2.default,
								null,
								_react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: Initial }),
								_react2.default.createElement(_reactRouter.Route, { path: '/aboutUs/', render: function render(_ref2) {
										var match = _ref2.match,
										    location = _ref2.location,
										    history = _ref2.history;

										var loc = { key: 'ac3df4', pathname: '/questions', hash: '#howdy', state: { x: true } };
										history.push(loc);
										return _react2.default.createElement(
											'div',
											null,
											'aboutus-',
											match.params.id
										);
									} }),
								_react2.default.createElement(_reactRouter.Route, { path: '/location', children: function children(_ref3) {
										var match = _ref3.match,
										    rest = _objectWithoutProperties(_ref3, ['match']);

										return _react2.default.createElement(
											'div',
											{ className: match ? 'active' : '' },
											'This is the location'
										);
									} }),
								_react2.default.createElement(_reactRouter.Route, { path: '/redirect', render: function render() {
										return _react2.default.createElement(
											'div',
											null,
											' Redirected '
										);
									} }),
								_react2.default.createElement(_reactRouter.Route, { path: '/questions', component: _questionTest2.default })
							);
						} })
				)
			);
		}
	}]);

	return Root;
}(_react.Component);

exports.default = Root;

var TestWithRouter = function (_Component2) {
	_inherits(TestWithRouter, _Component2);

	function TestWithRouter() {
		_classCallCheck(this, TestWithRouter);

		return _possibleConstructorReturn(this, (TestWithRouter.__proto__ || Object.getPrototypeOf(TestWithRouter)).apply(this, arguments));
	}

	_createClass(TestWithRouter, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('TestWithRouter Mounted');
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			console.log('TestWithRouter receiving Props');
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate() {
			console.log('TestWithRouter will update');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'You are at ',
				this.props.location.pathname
			);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('TestWithRouter unMounted');
		}
	}]);

	return TestWithRouter;
}(_react.Component);

var TextComp = function (_Component3) {
	_inherits(TextComp, _Component3);

	function TextComp() {
		_classCallCheck(this, TextComp);

		return _possibleConstructorReturn(this, (TextComp.__proto__ || Object.getPrototypeOf(TextComp)).apply(this, arguments));
	}

	_createClass(TextComp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('TextComp Mounted');
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(x, y) {
			console.log('TextComp receiving Props');
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate() {
			console.log('TestComp will update');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'TextComp'
			);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('TextComp unMounted');
		}
	}]);

	return TextComp;
}(_react.Component);

var ShowLocation = (0, _reactRouter.withRouter)(TestWithRouter);

var Initial = function (_Component4) {
	_inherits(Initial, _Component4);

	function Initial() {
		_classCallCheck(this, Initial);

		return _possibleConstructorReturn(this, (Initial.__proto__ || Object.getPrototypeOf(Initial)).apply(this, arguments));
	}

	_createClass(Initial, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Hello',
				_react2.default.createElement(
					'div',
					null,
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
					_react2.default.createElement(_selectedUser2.default, null)
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'div',
					null,
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
					_react2.default.createElement(_selectedUser2.default, null)
				)
			);
		}
	}]);

	return Initial;
}(_react.Component);

var Payments = function (_Component5) {
	_inherits(Payments, _Component5);

	function Payments() {
		_classCallCheck(this, Payments);

		return _possibleConstructorReturn(this, (Payments.__proto__ || Object.getPrototypeOf(Payments)).apply(this, arguments));
	}

	return Payments;
}(_react.Component);

var ErrorBoundary = function (_Component6) {
	_inherits(ErrorBoundary, _Component6);

	function ErrorBoundary(props) {
		_classCallCheck(this, ErrorBoundary);

		var _this6 = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

		_this6.state = { hasError: false };return _this6;
	}

	_createClass(ErrorBoundary, [{
		key: 'componentDidCatch',
		value: function componentDidCatch(error, info) {
			this.setState({ hasError: true });
		}
	}, {
		key: 'render',
		value: function render() {
			var x = null;
			if (this.state.hasError) x = _react2.default.createElement(
				'h1',
				null,
				'Something went wrong'
			);else x = this.props.children;

			return x;
		}
	}]);

	return ErrorBoundary;
}(_react.Component);