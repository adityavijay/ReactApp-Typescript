import React from 'react';
import * as RX from './redux.js';
import PropTypes1 from 'prop-types';

export class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state={date:new Date()};
		this.tick = this.tick.bind(this);
	}	
	
	
	componentDidMount(){
		this.id = setInterval(()=>this.tick(),1000);
	}
	componentWillUnmount(){
		clearInterval(this.id);4
	}
	/*
	componentWillReceiveProps(nextProps){
		console.log(1);
	}
	
	shouldComponentUpdate(nextProps, NextSt){
		console.log(2);
		return true;
	}
	
	
	componentWillUpdate(nextProps, NextSt){
		console.log(3);
	}
	
	componentDidUpdate(prevProps, prevSt){
		console.log(4);
	}*/
	
	tick(){
		this.setState({date:new Date()});
	}
	
	
	tostring(){
		console.log(12);
	}
	
	render(){
		return(
			<div>
				<h2>Time is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}

Clock.propTypes={name1: PropTypes1.string};	

export var test = ()=>(console.log('test'));

//export default {Clock,test};

//export default test;

//import * as xx from 'xx'  (when there is no default)
// import {Clock, test} from 'xx' (exact name of variable from module like clock and test)
// import anyName from 'xx' (when you set default)
// import React from 'react' uses export default{Component}, that's why you can fetch Component through React.Component
// you can also do    import React, {Component} from 'react';

//you can not add default to var,const or let declaration directly, you need to add them later export default x;.

//Usually default value can be accessed by any identifier in import but to create React Element the identifier should be //excaly same as react component name
