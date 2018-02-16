'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _print = require('./print.js');

var _print2 = _interopRequireDefault(_print);

var _data = require('./data.json');

var _data2 = _interopRequireDefault(_data);

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

var _route = require('./components/route.js');

var _route2 = _interopRequireDefault(_route);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(_route2.default, null);
};
// import img from  './img/banner.png';
// import './css/global.css';
// import './css/global.less';

/*
export default function(){
	
	//clk1();
	// var icon = new Image();
	// icon.src = img;
	
	//setting images in React app
	//var Imag = ({w,h})=><img className="adi" width={w} height={h} src={img}/>,
	var numbers = [1,2,3,4,5],
	obj={x:23},
	//setting inner html
	Comp=()=><div dangerouslySetInnerHTML={{__html:"<p>Hello whatsup</p>"}}></div>	,
	
	Portal= ({children})=>ReactDOM.createPortal(children, document.getElementById("root1"));
	
	var ListItem = numbers.map((number)=><li key={number}>{number}</li>), Obj= {x:23,y:56},
	Frag = <div>
       hello Frag
      </div>;

    //var img =  <Imag w={"100em"} h={"100em"}/>
	
		
    return <div className="less"><Clock/><logInControl.LogInControl/><br/><temp.TemperatureConverter/><br/><HOC.SumFinal/><br/><HOC.SubFinal ad="qwe"/><br/><PT.FilterableProductTable/><App/><div className="test">CSS testing</div><Comp/><p className="test">Hello Less</p>{ListItem}{ React.createElement('div','','hello aditya')}{React.createElement('p',{width:100},'Hello P')}{ Frag}</div>
	
} */