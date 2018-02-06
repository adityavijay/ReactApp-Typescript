'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TemperatureConverter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function toCelcius(frn) {
	return (frn - 32) * 5 / 9;
}

function toFarenheit(clc) {
	return clc * 9 / 5 + 32;
}

function tryConvert(temp, convertFunc) {
	var input = parseFloat(temp);
	if (Number.isNaN(input)) {
		console.log('type only Number, characters are not allowed');
		return '';
	}

	var output = Math.round(convertFunc(input));

	return output.toString();
}

function Celcius(props) {
	/*function handChange(e,x){
 	props.onChange(e.target.value);
 }*/

	var temp = props.temp,
	    x = { a: 12, b: 23 },
	    handChange = function (e) {
		props.onChange(e.target.value);
	}.bind(x);
	return _react2.default.createElement(
		'fieldset',
		null,
		_react2.default.createElement(
			'label',
			null,
			props.children
		),
		_react2.default.createElement('input', { type: 'text', value: temp, onChange: handChange })
	);
}
/*
class Celcius extends React.Component{
	constructor(props){
		super(props);
		this.handChange = this.handChange.bind(this);
	}
	
	handChange(e){
		this.props.onChange(e.target.value);
	}
	
	render(){
		var temp = this.props.temp;		
		return(<fieldset>
		<label>Celcius</label>
		<input type="text" value={temp} onChange={this.handChange}/>
		</fieldset>);
	}
	
}*/

var Farenheit = function (_React$Component) {
	_inherits(Farenheit, _React$Component);

	function Farenheit(props) {
		_classCallCheck(this, Farenheit);

		var _this = _possibleConstructorReturn(this, (Farenheit.__proto__ || Object.getPrototypeOf(Farenheit)).call(this, props));

		_this.handChange = _this.handChange.bind(_this);
		return _this;
	}

	_createClass(Farenheit, [{
		key: 'handChange',
		value: function handChange(e) {
			this.props.onChange(e.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			var temp = this.props.temp;
			return _react2.default.createElement(
				'fieldset',
				null,
				_react2.default.createElement(
					'label',
					null,
					'Farenheit'
				),
				_react2.default.createElement('input', { type: 'text', value: temp, onChange: this.handChange })
			);
		}
	}]);

	return Farenheit;
}(_react2.default.Component);

var TemperatureConverter = exports.TemperatureConverter = function (_React$Component2) {
	_inherits(TemperatureConverter, _React$Component2);

	function TemperatureConverter(props) {
		_classCallCheck(this, TemperatureConverter);

		var _this2 = _possibleConstructorReturn(this, (TemperatureConverter.__proto__ || Object.getPrototypeOf(TemperatureConverter)).call(this, props));

		_this2.state = { temp: "0", scale: "c" };
		_this2.handleCel = _this2.handleCel.bind(_this2);
		_this2.handleFar = _this2.handleFar.bind(_this2);
		return _this2;
	}

	_createClass(TemperatureConverter, [{
		key: 'handleCel',
		value: function handleCel(val) {
			//this.setState({temp:val,scale:'c'});
			this.setState(function (pvSt) {
				return { temp: val, scale: 'c' };
			});
		}
	}, {
		key: 'handleFar',
		value: function handleFar(val) {
			//this.setState({temp:val,scale:'f'});
			this.setState(function (pvSt) {
				return { temp: val, scale: 'f' };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var value = this.state.temp,
			    scale = this.state.scale,
			    c = ["Hello", "Celcius"],
			    list = c.map(function (d) {
				return _react2.default.createElement(
					'span',
					{ 'data-width': '20', key: d },
					d
				);
			});

			var celVal = scale == 'c' ? value : tryConvert(value, toCelcius);
			var farVal = scale == 'f' ? value : tryConvert(value, toFarenheit);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					Celcius,
					{ temp: celVal, onChange: this.handleCel },
					list
				),
				_react2.default.createElement(Farenheit, { temp: farVal, onChange: this.handleFar })
			);
		}
	}]);

	return TemperatureConverter;
}(_react2.default.Component);