import React,{Component} from 'react';

//import TestRenderer from 'react-test-renderer';

export default class Clock extends Component{
	constructor(props){
		super(props);
		this.state={currentTime: new Date()}
	}
    componentWillMount(){
		console.log(1);
	}
	componentDidMount(){
		this.id = setInterval(()=>this.setState({currentTime: new Date()}),1000);
	}

	componentWillUnmount(){
		clearInterval(this.id);
	}

	render(){
		return (<div>{this.state.currentTime.toLocaleTimeString()}<p>Hello</p></div>);
	}
} 

//This.setState({cTime:new Date()}) will do the shallow merge for states while 
//this.setState((prevSt,currentProps)=>{return{cTime:new Date}}) takes the reference of previos state too