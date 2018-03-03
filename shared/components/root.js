import React, {Component} from 'react';
import {Route, Link, Switch, Redirect, IndexRoute} from 'react-router';
import Home from './home.js';
//import Clock from '../containers/clock.js';
import Clock from './clock.js';
import Store from '../store.js';
import QuestionTest from './questionTest.js';
import UserList from '../containers/userList';
import SelectedUser from '../containers/selectedUser';

export default class Root extends Component{	
render(){	
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
							<Route path="/questions" component={QuestionTest}/>
						</Home>);
					}}/>			
				</Store>
			</div>);	
		}
}	


class Initial extends Component{
	render(){
		return (<div>Hello
				<div>
				    <div>Users List</div>
					<UserList/>
					<br/>
					<div>Selected User</div>
					<SelectedUser/>
				</div>
				<br/>
				<div>
				    <div>Users List</div>
					<UserList/>
					<br/>
					<div>Selected User</div>
					<SelectedUser/>
				</div>
			</div>);
	}
}


