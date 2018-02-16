import React, {Component} from 'react';
import {Route, Link, Switch, Redirect} from 'react-router';
import Home from './home.js';

export default class Routes extends Component{
	render(){
		return (<div>			
			<Route path="/" render={()=>{
			return (<Home>
				<Route path="/aboutUs" render={()=>{return <div>AboutUs</div>}}/>
				<Route path="/location" render={()=>{return <div>OfficeLocation is here</div>}}/>
				<Route path="/redirect" render={()=>{return <div> Redirected </div>}}/>
			</Home>);
			}}/>
			
		</div>);
	}
}