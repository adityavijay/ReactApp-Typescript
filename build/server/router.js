'use strict';

var _print = require('./print.js');

var _print2 = _interopRequireDefault(_print);

var _data = require('./data.json');

var _data2 = _interopRequireDefault(_data);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _math = require('./comp/math.js');

var math456 = _interopRequireWildcard(_math);

var _clock = require('./comp/clock.js');

var _loginControl = require('./comp/loginControl.js');

var logInControl = _interopRequireWildcard(_loginControl);

var _temperature = require('./comp/temperature.js');

var temp = _interopRequireWildcard(_temperature);

var _HOCTest = require('./comp/HOCTest.js');

var HOC = _interopRequireWildcard(_HOCTest);

var _productTable = require('./comp/productTable.js');

var PT = _interopRequireWildcard(_productTable);

var _redux = require('./comp/redux.js');

var _redux2 = _interopRequireDefault(_redux);

var _banner = require('./img/banner.png');

var _banner2 = _interopRequireDefault(_banner);

require('./css/global.css');

require('./css/global.less');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	//clk1();
	var icon = new Image();
	icon.src = _banner2.default;

	//setting images in React app
	var Imag = function Imag(_ref) {
		var w = _ref.w,
		    h = _ref.h;
		return _react2.default.createElement('img', { className: 'adi', width: w, height: h, src: _banner2.default });
	},
	    numbers = [1, 2, 3, 4, 5],

	//setting inner html
	Comp = function Comp() {
		return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "<p>Hello whatsup</p>" } });
	},
	    Portal = function Portal(_ref2) {
		var children = _ref2.children;
		return _reactDom2.default.createPortal(children, document.getElementById("root1"));
	};

	var ListItem = numbers.map(function (number) {
		return _react2.default.createElement(
			'li',
			{ key: number },
			number
		);
	}),
	    Obj = { x: 23, y: 56 },
	    Frag = function Frag() {
		return _react2.default.createElement(
			'div',
			null,
			'hello'
		);
	};

	_reactDom2.default.render(_react2.default.createElement(
		'div',
		{ className: 'less' },
		_react2.default.createElement(_clock.Clock, null),
		_react2.default.createElement(logInControl.LogInControl, null),
		_react2.default.createElement('br', null),
		_react2.default.createElement(temp.TemperatureConverter, null),
		_react2.default.createElement('br', null),
		_react2.default.createElement(HOC.SumFinal, null),
		_react2.default.createElement('br', null),
		_react2.default.createElement(HOC.SubFinal, { ad: 'qwe' }),
		_react2.default.createElement('br', null),
		_react2.default.createElement(PT.FilterableProductTable, null),
		_react2.default.createElement(_redux2.default, null),
		_react2.default.createElement(
			'div',
			{ className: 'test' },
			'CSS testing'
		),
		_react2.default.createElement(Imag, { w: "100em", h: "100em" }),
		_react2.default.createElement(Comp, null),
		_react2.default.createElement(
			'p',
			{ className: 'test' },
			'Hello Less'
		),
		ListItem
	), document.getElementById('root'));
})();