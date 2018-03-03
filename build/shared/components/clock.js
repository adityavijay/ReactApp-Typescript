"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import TestRenderer from 'react-test-renderer';

var Clock = function (_Component) {
	_inherits(Clock, _Component);

	function Clock(props) {
		_classCallCheck(this, Clock);

		var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

		_this.state = { currentTime: new Date() };
		//Its essential to use super(props) statement in constructor to get right this.props value or will be undefined
		// and set initial state in constructor
		//Contructor executes, before the component gets mounted
		//this.setState({currentTime: "aditya"});
		return _this;
	}

	_createClass(Clock, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			//Executes just before actual mounting. This is only hook called on serverside rendering
			//calling setState in this hook, will not call rerendering
			console.log(1);
			var prop = this.props;
			this.setState(function (pvSt) {
				return { currentTime: new Date() };
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			//this.id = setInterval(()=>this.setState({currentTime: new Date()}),1000);
			this.id = setInterval(function () {
				return _this2.forceUpdate(function () {
					return _this2.setState(function (pvSt) {
						return { currentTime: new Date() };
					});
				});
			}, 1000);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nP) {
			//change state according to new props received
			console.log("received props");
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(np, ns) {
			var props = this.props;
			var st = this.state;

			return true;
		}
	}, {
		key: "componentWillUpdate",
		value: function componentWillUpdate(np, ns) {
			//you can't call setState in this hook, this hook is just for as a prepration before mounting updates
			var x = this;
			console.log("willUpdate");
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				"div",
				null,
				this.state.currentTime.toLocaleTimeString(),
				_react2.default.createElement(
					"p",
					{ className: "hello1" },
					"Hello"
				),
				_react2.default.createElement(CustomTextInput, { ip: function ip(el) {
						return _this3.ele = el;
					} })
			);
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate(prProps, preSt) {
			console.log("component did update");
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.id);
		}
	}]);

	return Clock;
}(_react.Component);

//This.setState({cTime:new Date()}) will do the shallow merge for states while 
//this.setState((prevSt,currentProps)=>{return{cTime:new Date}}) takes the reference of previos state too

exports.default = Clock;
Clock.defaultProps = { x: 23, y: 45 };

var CustomTextInput = function CustomTextInput(_ref) {
	var ip = _ref.ip;

	return _react2.default.createElement("input", { type: "text", ref: ip });
};