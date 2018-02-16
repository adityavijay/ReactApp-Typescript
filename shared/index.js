 import React from 'react';
 import dOM1 from 'react-dom';
 import pme from './print.js';
 import data12 from './data.json';
 import * as math456 from './comp/math.js';
 import {Clock} from './comp/clock.js';
 import * as logInControl from './comp/loginControl.js';
 import * as temp from './comp/temperature.js';
 import * as HOC from './comp/HOCTest.js';
 import * as PT from './comp/productTable.js';
 import App from './comp/redux.js';
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
import Routes from './components/route.js';

export default ()=><Routes/>;