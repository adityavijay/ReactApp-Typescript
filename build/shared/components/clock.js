'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions/actions.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import TestRenderer from 'react-test-renderer';

var Clock = function (_Component) {
	_inherits(Clock, _Component);

	function Clock() {
		_classCallCheck(this, Clock);

		return _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).apply(this, arguments));
	}

	_createClass(Clock, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.id = setInterval(function () {
				_this2.props.setCurrentTime(new Date().toLocaleTimeString());
			}, 1000);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.props.currentTime
			);
		}
	}]);

	return Clock;
}(_react.Component);

var mapStateToProps = function mapStateToProps(st) {
	return { currentTime: st.currentTime };
},
    mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return { setCurrentTime: function setCurrentTime(time) {
			return dispatch((0, _actions.setCurrentTime)(time));
		} };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Clock);

//This.setState({cTime:new Date()}) will do the shallow merge for states while 
//this.setState((prevSt,currentProps)=>{return{cTime:new Date}}) takes the reference of previos state too