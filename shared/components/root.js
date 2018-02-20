import React, {Component} from 'react';
import {Route, Link, Switch, Redirect, IndexRoute} from 'react-router';
import Home from './home.js';
import Clock from './clock.js';
//import {findDOMNode} from 'react-dom';
//import App from '../comp/redux.js';
import Store from './store.js';

export default class Routes extends Component{	
render(){ 
	window.ref1 = this.refs;
	console.log(window.ref1);
	return (<div>
			    <Store>		
					<Route path="/" render={()=>{
						return (<Home>
							<Route exact path="/" component={Initial}/>

							<Route path="/aboutUs" render={
								()=>{
								return <div>About us <Clock/></div>
							}}/>
							<Route path="/location" render={()=>{
								return <div>OfficeLocation is here</div>
							}}/>
							<Route path="/redirect" render={()=>{
								return <div> Redirected </div>}}/>	
						</Home>);
					}}/>			
				</Store>
			</div>);
		}
}	


class Initial extends Component{
	render(){
		return (<div>Hello</div>);
	}
}

/*
window.z = function (){
	console.log('biii');
}


	var Obj={
		x:34,
		 y: function(){
		this.z();
	}, z:function(){
		console.log("hello")
	}};

	const U = (Obj.y).bind(window);

	U();
*/