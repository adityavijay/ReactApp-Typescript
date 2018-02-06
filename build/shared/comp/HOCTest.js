"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SubFinal = exports.SumFinal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function sum(a, b) {
	return parseInt(a) + parseInt(b);
}
function sub(a, b) {
	return parseInt(a) - parseInt(b);
}

function HOC(WrappedComponent, selectData) {
	return function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class(props) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

			_this.handleChange = _this.handleChange.bind(_this);
			_this.input1 = 0;
			_this.input2 = 0;
			_this.state = { data: selectData(_this.input1.value, _this.input2.value) };

			return _this;
		}

		_createClass(_class, [{
			key: "handleChange",
			value: function handleChange(e) {
				this.setState({ data: selectData(this.input1.value, this.input2.value) });
			}
		}, {
			key: "render",
			value: function render() {

				return _react2.default.createElement(WrappedComponent, _extends({ data: this.state.data, obj: this }, this.props));
			}
		}]);

		return _class;
	}(_react2.default.Component);
}

function SumInit(props) {
	return _react2.default.createElement(
		"fieldset",
		null,
		_react2.default.createElement(
			"label",
			null,
			"Adder"
		),
		_react2.default.createElement("input", { ref: function ref(ip) {
				return props.obj.input1 = ip;
			}, onChange: props.obj.handleChange, type: "text", name: "input1", placeholder: "A" }),
		_react2.default.createElement("input", { ref: function ref(ip) {
				return props.obj.input2 = ip;
			}, onChange: props.obj.handleChange, type: "text", name: "input2", placeholder: "B" }),
		_react2.default.createElement("input", { value: props.data || 0, type: "text", name: "input2", placeholder: "A+B" })
	);
}

function SubInit(props) {
	return _react2.default.createElement(
		"fieldset",
		null,
		_react2.default.createElement(
			"label",
			null,
			"Substracter"
		),
		_react2.default.createElement("input", { ref: function ref(ip) {
				return props.obj.input1 = ip;
			}, onChange: props.obj.handleChange, type: "text", name: "input1", placeholder: "A" }),
		_react2.default.createElement("input", { ref: function ref(ip) {
				return props.obj.input2 = ip;
			}, onChange: props.obj.handleChange, type: "text", name: "input2", placeholder: "B" }),
		_react2.default.createElement("input", { value: props.data || 0, type: "text", name: "input2", placeholder: "A-B" })
	);
}

var SumFinal = exports.SumFinal = HOC(SumInit, sum);

var SubFinal = exports.SubFinal = HOC(SubInit, sub);
/*HOC is to reuse state smanagement code*/