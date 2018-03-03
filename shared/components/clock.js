import React,{Component, PureComponent} from 'react';

//import TestRenderer from 'react-test-renderer';

export default class Clock extends Component{
	constructor(props){
		super(props);
		this.state={currentTime: new Date()};
		//Its essential to use super(props) statement in constructor to get right this.props value or will be undefined
		// and set initial state in constructor
		//Contructor executes, before the component gets mounted
		//this.setState({currentTime: "aditya"});
	}
    componentWillMount(){
		//Executes just before actual mounting. This is only hook called on serverside rendering
		//calling setState in this hook, will not call rerendering
		console.log(1);
		var prop = this.props;
		this.setState((pvSt)=>({currentTime: new Date}));

		
	}

	componentDidMount(){
		//this.id = setInterval(()=>this.setState({currentTime: new Date()}),1000);
		this.id = setInterval(()=>this.forceUpdate(
			()=>this.setState((pvSt)=>{
			return {currentTime: new Date};
		})),1000);
	}

	componentWillReceiveProps( nP){
		//change state according to new props received
		console.log("received props");
	}

	shouldComponentUpdate(np, ns){
		var props = this.props;
		var st= this.state;
		
		return true;
	}
	

	componentWillUpdate(np, ns){
		//you can't call setState in this hook, this hook is just for as a prepration before mounting updates
		var x = this;
		console.log("willUpdate");
	}

	render(){		
		return (<div>{this.state.currentTime.toLocaleTimeString()}<p className="hello1">Hello</p><CustomTextInput ip={(el)=>this.ele=el}/></div>);
	}

	componentDidUpdate(prProps, preSt){
		console.log("component did update");
	}

	
	componentWillUnmount(){
		clearInterval(this.id);
	}
} 

//This.setState({cTime:new Date()}) will do the shallow merge for states while 
//this.setState((prevSt,currentProps)=>{return{cTime:new Date}}) takes the reference of previos state too

Clock.defaultProps= {x:23,y:45};


const CustomTextInput = ({ip})=>{
	return <input type="text" ref={ip}/>
}