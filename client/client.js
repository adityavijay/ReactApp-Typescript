 import React, {Component, PureComponent} from 'react';
 import ReactDOM, {render, hydrate} from 'react-dom';
 import App from '../shared/index.js';
 import {BrowserRouter as Router, browserHistory, HashRouter} from 'react-router-dom';
 import d from '../shared/css/global.less';
 

class RoutingApplication extends React.Component{
	render(){
		return (<HashRouter><App {...this.props}/></HashRouter>);
	}
}

class S extends PureComponent{
	componentWillUpdate(s,p){
		console.log("S is updating")
	}
	render(){
		return <label htmlFor="but">Button</label>
	}
}


class R extends Component{
	constructor(props){
		super(props);
		this.state={x:20};
	}
	componentWillUpdate(s,p){
		console.log("R is updating")
	}
	render(){
		return <form><S/><input id="but" type="text" onClick={()=>this.setState({y:50})}/></form>
	}
}





render(<RoutingApplication/>, document.getElementById('root'));

