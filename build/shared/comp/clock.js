'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.test = exports.Clock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('./redux.js');

var RX = _interopRequireWildcard(_redux);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = exports.Clock = function (_React$Component) {
	_inherits(Clock, _React$Component);

	function Clock(props) {
		_classCallCheck(this, Clock);

		var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

		_this.state = { date: new Date() };
		_this.tick = _this.tick.bind(_this);
		return _this;
	}

	_createClass(Clock, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.id = setInterval(function () {
				return _this2.tick();
			}, 1000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.id);4;
		}
		/*
  componentWillReceiveProps(nextProps){
  	console.log(1);
  }
  
  shouldComponentUpdate(nextProps, NextSt){
  	console.log(2);
  	return true;
  }
  
  
  componentWillUpdate(nextProps, NextSt){
  	console.log(3);
  }
  
  componentDidUpdate(prevProps, prevSt){
  	console.log(4);
  }*/

	}, {
		key: 'tick',
		value: function tick() {
			this.setState({ date: new Date() });
		}
	}, {
		key: 'tostring',
		value: function tostring() {
			console.log(12);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'Time is ',
					this.state.date.toLocaleTimeString()
				)
			);
		}
	}]);

	return Clock;
}(_react2.default.Component);

Clock.propTypes = { name1: _propTypes2.default.string };

var test = exports.test = function test() {
	return console.log('test');
};

//export default {Clock,test};

//export default test;

//import * as xx from 'xx'  (when there is no default)
// import {Clock, test} from 'xx' (exact name of variable from module like clock and test)
// import anyName from 'xx' (when you set default)
// import React from 'react' uses export default{Component}, that's why you can fetch Component through React.Component
// you can also do    import React, {Component} from 'react';

//you can not add default to var,const or let declaration directly, you need to add them later export default x;.

//Usually default value can be accessed by any identifier in import but to create React Element the identifier should be //excaly same as react component name