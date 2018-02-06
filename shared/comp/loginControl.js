import React from 'react';

function Greeting(props){
	var isLoggedIn = props.state;
	if(isLoggedIn)
		return (<div>Hello welcome</div>);
	return (<div>You are logged out</div>);
}

function LogInButton(props){
	
	return (<button onClick= {props.onClick}>LogIn</button>);
}


function LogOutButton(props){
	return (<button onClick= {props.onClick}>LogOut</button>);
}
	 


export class LogInControl extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {isLoggedIn: false};
		this.onLogInClick = this.onLogInClick.bind(this);
		this.onLogOutClick = this.onLogOutClick.bind(this);
	}
	
	componentWillReceiveProps(nextSt){
		console.log(1);
	}
	
	shouldComponentUpdate(nextProps, NextSt){
		console.log(2);
		return true;
	}
	
	componentWillUpdate(nextProps, NextSt){
		console.log(3);
	}
	
	componentDidUpdate(nextProps, NextSt){
		console.log(4);
	}
	
	onLogInClick(){
		this.setState({isLoggedIn:true});
	}
	
	onLogOutClick(){
		this.setState({isLoggedIn:false});
	}
	
	
	render(){
		var isLoggedIn = this.state.isLoggedIn;
		
		return isLoggedIn?<div><LogOutButton onClick={this.onLogOutClick}/>
		<Greeting state={isLoggedIn}/></div>:<div><LogInButton onClick={this.onLogInClick}/><Greeting state={isLoggedIn}/></div>;
	}
} 