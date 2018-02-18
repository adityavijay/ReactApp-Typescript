import React,{Component} from 'react';

export default class Clock extends Component{
	constructor(props){
		super(props);
		this.state={currentTime: new Date(),y:45}
	}

	componentDidMount(){
		setInterval(()=>this.setState({currentTime:new Date()}),1000);
	}

	render(){
		return (<div>{this.state.currentTime.toLocaleTimeString()}</div>);
	}
} 