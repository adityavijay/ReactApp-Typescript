 import React, {Component, PureComponent} from 'react';
 import ReactDOM, {render, hydrate} from 'react-dom';
 import App from '../shared/index.js';
 import {BrowserRouter as Router, browserHistory, HashRouter,Route,withRouter} from 'react-router-dom';
 import d from '../shared/css/global.less';

 console.log(333);
 export const Child1=()=><div>Child1</div>
 export const Child=(props)=><div>{[ props.children,props.ad.x]}<ul style={{display:"flex"}}>{[<li className="col" key="1">123</li>,<li className="col" key="2">456</li>,<li className="col" key="3">789</li>]}</ul></div>
 const LocationTest= ({location})=>{
 	return <div>This is {location.pathname}</div>
}
const LocationWith = withRouter(LocationTest);

 if(env == 'development')
	console.log('dev');
else if (env == 'production')
	console.log('prod');

class RoutingApplication extends React.Component{
	render(){
		return (<Router><div><App/></div></Router>);
	}
}
 
render(<RoutingApplication>asdfgjh</RoutingApplication>, document.getElementById('root'));

