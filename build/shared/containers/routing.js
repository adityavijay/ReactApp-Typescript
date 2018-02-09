'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavRoute = function NavRoute() {
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
					_reactRouterDom.Link,
					{ to: '/' },
					'Home'
				)
			),
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/dist/about-us' },
					'About us'
				)
			),
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/topics' },
					'Topics'
				)
			)
		),
		_react2.default.createElement('hr', null),
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/dist', render: function render() {
				return _react2.default.createElement(
					'div',
					null,
					'Please click on above link'
				);
			} }),
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
		_react2.default.createElement(_reactRouterDom.Route, { path: '/dist/about-us', component: Aboutus }),
		_react2.default.createElement(_reactRouterDom.Route, { path: '/topics', component: Topics })
	);
},
    Home = function Home() {
	return _react2.default.createElement(
		'div',
		null,
		'Home info'
	);
},
    Aboutus = function Aboutus() {
	return _react2.default.createElement(
		'div',
		null,
		'Aboutus info'
	);
},
    Topics = function Topics(_ref) {
	var match = _ref.match;

	return _react2.default.createElement(
		Router,
		null,
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: match.url + '/WorldNews' },
						'World News'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: match.url + '/CountryNews' },
						'Country News'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: match.url + '/LocalNews' },
						'Local News'
					)
				)
			),
			_react2.default.createElement(_reactRouterDom.Route, { path: match.url + "/:topicId", component: Topic }),
			_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url, render: function render() {
					return _react2.default.createElement(
						'div',
						null,
						'Type the news, you want to see'
					);
				} })
		)
	);
},
    Topic = function Topic(_ref2) {
	var match = _ref2.match;

	return _react2.default.createElement(
		'div',
		null,
		match.params.topicId
	);
};

exports.default = NavRoute;