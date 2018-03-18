import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Route, Link, Switch, Redirect, IndexRoute, withRouter} from 'react-router';
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
			   		<Route path="/" render={({match,location,...rest})=>{
						return (<Home>
							<Route exact path="/"  component={Initial}/>

							<Route path="/aboutUs/"  render={
								({match,location,history})=>{
									const loc = {key:'ac3df4',pathname:'/questions',hash:'#howdy',state:{x:true}};
									history.push(loc);
								return <div>aboutus-{match.params.id}</div>
							}} />
							<Route path="/location" children={({match, ...rest})=>(<div className={match?'active':''}>This is the location</div>)}/>
							<Route path="/redirect" render={()=>{
								return <div> Redirected </div>}}/>	
							<Route path="/questions" component={QuestionTest}/>
						</Home>);
					}}/>			
				</Store>
			</div>);	
		}
}	

class TestWithRouter extends Component{
	componentDidMount(){
		console.log('TestWithRouter Mounted');
	}
	
	componentWillReceiveProps(){
		console.log('TestWithRouter receiving Props');
	}
	componentWillUpdate(){
		console.log('TestWithRouter will update');
	}

	render(){
		return <div>You are at {this.props.location.pathname}</div>
	}

	componentWillUnmount(){
		console.log('TestWithRouter unMounted')
	}
}

class TextComp extends Component{
	componentDidMount(){
		console.log('TextComp Mounted');
	}
	
	componentWillReceiveProps(x,y){
		console.log('TextComp receiving Props');
	}
	componentWillUpdate(){
		console.log('TestComp will update');
	}

	render(){
		return <div>TextComp</div>
	}
	componentWillUnmount(){
		console.log('TextComp unMounted');
	}
}

const ShowLocation = withRouter(TestWithRouter);


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


 class Payments extends Component{

 }

 class ErrorBoundary extends Component{
 	constructor(props){super(props); this.state={hasError:false}}
 	
 	componentDidCatch(error,info){
 		this.setState({hasError:true});
 	}

 	render(){
 		var x=null;
 		if(this.state.hasError)
 			x= <h1>Something went wrong</h1>;
 		else
 			x= this.props.children;

 		return x;
 	}	
 }

