'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
				return _react2.default.createElement(
								'div',
								props,
								_react2.default.createElement(
												'ul',
												null,
												_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																				_reactRouterDom.NavLink,
																				{ exact: true, activeClassName: 'activeLink', to: '/' },
																				'Home'
																)
												),
												_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																				_reactRouterDom.NavLink,
																				{ activeClassName: 'activeLink', to: '/aboutUs' },
																				'AboutUs'
																)
												),
												_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																				_reactRouterDom.NavLink,
																				{ activeClassName: 'activeLink', to: '/location' },
																				'OfficeLocation'
																)
												),
												_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																				_reactRouterDom.NavLink,
																				{ activeClassName: 'activeLink', to: '/questions' },
																				'Questions'
																)
												)
								)
				);
};