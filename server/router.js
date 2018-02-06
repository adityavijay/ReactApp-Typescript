 import pme from './print.js';
 import data12 from './data.json';
 import React from 'react';
 import ReactDOM from 'react-dom';
 import * as math456 from './comp/math.js';
 import {Clock} from './comp/clock.js';
 import * as logInControl from './comp/loginControl.js';
 import * as temp from './comp/temperature.js';
 import * as HOC from './comp/HOCTest.js';
 import * as PT from './comp/productTable.js';
 import App from './comp/redux.js';
 import img from  './img/banner.png';
 import './css/global.css';
 import './css/global.less';
 
(function(){
	//clk1();
	var icon = new Image();
	icon.src = img;
	
	//setting images in React app
	var Imag = ({w,h})=><img className="adi" width={w} height={h} src={img}/>,
	numbers = [1,2,3,4,5],
	//setting inner html
	Comp=()=><div dangerouslySetInnerHTML={{__html:"<p>Hello whatsup</p>"}}></div>	,
	
	Portal= ({children})=>ReactDOM.createPortal(children, document.getElementById("root1"));
	
	var ListItem = numbers.map((number)=><li key={number}>{number}</li>), Obj= {x:23,y:56},
	Frag = ()=><div>
       hello
      </div>;
	
	



		
	ReactDOM.render(	
	 	<div className="less"><Clock/><logInControl.LogInControl/><br/><temp.TemperatureConverter/><br/><HOC.SumFinal/><br/><HOC.SubFinal ad="qwe"/><br/><PT.FilterableProductTable/><App/><div className="test">CSS testing</div><Imag w={"100em"} h={"100em"}/><Comp/><p className="test">Hello Less</p>{ListItem}</div>,
	  document.getElementById('root')
	);
})(); 