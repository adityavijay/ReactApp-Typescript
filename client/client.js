 import React from 'react';
 import {render} from 'react-dom';
 import App from '../shared/index.js';
 import {BrowserRouter as Router} from 'react-router-dom';
 
 //var P = ()=>{return <div><div>hello<div></div>}
class RoutingApplication extends React.Component{
	render(){
		return (<Router><App {...this.props}/></Router>);
	}
}

 render(<RoutingApplication/>, document.getElementById('root'));