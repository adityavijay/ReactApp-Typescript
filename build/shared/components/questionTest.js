"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var questionObject = [{ ques: "What is capital", opt1: "delhi", opt2: "mumbai", opt3: "jaipur", opt4: "kolkata" }, { ques: "Who is prime minister of India", opt1: "gadkari", opt2: "jaitley", opt3: "Modi", opt4: "naidu" }];

var QuestionTest = function (_Component) {
	_inherits(QuestionTest, _Component);

	function QuestionTest(props) {
		_classCallCheck(this, QuestionTest);

		return _possibleConstructorReturn(this, (QuestionTest.__proto__ || Object.getPrototypeOf(QuestionTest)).call(this, props));
	}

	_createClass(QuestionTest, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var ad = this.refs;
			var Questions = questionObject.map(function (question, key) {
				var data = _extends({}, question, { id: key, style: { listStyle: 'none', backgroundColor: 'grey	' } });
				return _react2.default.createElement(Question, _extends({ key: key }, data));
			});

			return _react2.default.createElement(
				"form",
				{ onSubmit: function onSubmit(e) {
						console.log(_this2.refs);e.preventDefault();
					} },
				Questions,
				_react2.default.createElement(ExtraInputs, { ref: function ref(obj) {
						return obj.handleClick();
					} }),
				_react2.default.createElement("input", { type: "submit", value: "Click" })
			);
		}
	}]);

	return QuestionTest;
}(_react.Component);

exports.default = QuestionTest;

var ExtraInputs = function (_Component2) {
	_inherits(ExtraInputs, _Component2);

	function ExtraInputs() {
		_classCallCheck(this, ExtraInputs);

		return _possibleConstructorReturn(this, (ExtraInputs.__proto__ || Object.getPrototypeOf(ExtraInputs)).apply(this, arguments));
	}

	_createClass(ExtraInputs, [{
		key: "handleClick",
		value: function handleClick() {
			console.log('Hello ref');
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("input", { type: "text" });
		}
	}]);

	return ExtraInputs;
}(_react.Component);

function Question(props) {
	return _react2.default.createElement(
		"ul",
		{ style: props.style },
		_react2.default.createElement(
			"li",
			null,
			props.ques
		),
		_react2.default.createElement(RadioInputWithLabel, { id: "opt1" + props.id, option: props.opt1 }),
		_react2.default.createElement(RadioInputWithLabel, { id: "opt2" + props.id, option: props.opt2 }),
		_react2.default.createElement(RadioInputWithLabel, { id: "opt3" + props.id, option: props.opt3 }),
		_react2.default.createElement(RadioInputWithLabel, { id: "opt4" + props.id, option: props.opt4 })
	);
}

function RadioInputWithLabel(_ref) {
	var id = _ref.id,
	    option = _ref.option;

	return _react2.default.createElement(
		"li",
		null,
		_react2.default.createElement(
			"label",
			{ htmlFor: id },
			option
		),
		_react2.default.createElement("input", { type: "radio", id: id, name: "question-" + id, value: option })
	);
}