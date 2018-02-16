'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _home = require('./home.js');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_Component) {
	_inherits(Routes, _Component);

	function Routes() {
		_classCallCheck(this, Routes);

		return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
	}

	_createClass(Routes, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_reactRouter.Route, { path: '/', render: function render() {
						return _react2.default.createElement(
							_home2.default,
							null,
							_react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: Initial }),
							_react2.default.createElement(_reactRouter.Route, { path: '/aboutUs', render: function render() {
									return _react2.default.createElement(
										'div',
										null,
										'AboutUs'
									);
								} }),
							_react2.default.createElement(_reactRouter.Route, { path: '/location', render: function render() {
									return _react2.default.createElement(
										'div',
										null,
										'OfficeLocation is here'
									);
								} }),
							_react2.default.createElement(_reactRouter.Route, { path: '/redirect', render: function render() {
									return _react2.default.createElement(
										'div',
										null,
										' Redirected '
									);
								} })
						);
					} })
			);
		}
	}]);

	return Routes;
}(_react.Component);

exports.default = Routes;


function Initial() {

	return _react2.default.createElement(
		'div',
		null,
		'Hello Aditya'
	);
}