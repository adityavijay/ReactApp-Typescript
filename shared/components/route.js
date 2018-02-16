import React, {Component} from 'react';
import {Route, Link, Switch, Redirect, IndexRoute} from 'react-router';
import Home from './home.js';

export default class Routes extends Component{
	render(){
		return (<div>			
			<Route path="/" render={()=>{
			return (<Home>
				<Route exact path="/" component={Initial}/>
				<Route path="/aboutUs" render={()=>{return <div>AboutUs</div>}}/>
				<Route path="/location" render={()=>{return <div>OfficeLocation is here</div>}}/>
				<Route path="/redirect" render={()=>{return <div> Redirected </div>}}/>	
			</Home>);
			}}/>
			
		</div>);
	}
}


function Initial(){

	return (<div>Hello Aditya</div>);
}