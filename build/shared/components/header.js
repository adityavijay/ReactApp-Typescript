'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
				return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
												'ul',
												null,
												_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																				_reactRouterDom.NavLink,
																				{ to: '/' },
																				'Home'
																)
												),
												_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																				_reactRouterDom.NavLink,
																				{ to: '/aboutUs' },
																				'AboutUs'
																)
												),
												_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																				_reactRouterDom.NavLink,
																				{ to: '/location' },
																				'OfficeLocation'
																)
												)
								)
				);
};