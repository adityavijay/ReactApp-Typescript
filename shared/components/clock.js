import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentTime} from '../actions/actions.js';

//import TestRenderer from 'react-test-renderer';

class Clock extends Component{
	componentDidMount(){
		this.id = setInterval(()=>{
			this.props.setCurrentTime(new Date().toLocaleTimeString())
		},1000);
	}

	render(){
		return (<div>{this.props.currentTime}</div>);
	}
} 

const mapStateToProps = (st)=>{
	return {currentTime:st.currentTime};
},
mapDispatchToProps = (dispatch)=>{
	return {setCurrentTime:(time)=>dispatch(setCurrentTime(time))};
}

export default connect(mapStateToProps,mapDispatchToProps)(Clock);


//This.setState({cTime:new Date()}) will do the shallow merge for states while 
//this.setState((prevSt,currentProps)=>{return{cTime:new Date}}) takes the reference of previos state too