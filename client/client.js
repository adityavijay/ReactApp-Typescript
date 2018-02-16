 import React from 'react';
 import ReactDOM, {render, hydrate} from 'react-dom';
 import App from '../shared/index.js';
 import {BrowserRouter as Router, browserHistory, HashRouter} from 'react-router-dom';
 import '../shared/css/global.less';
 
 
class RoutingApplication extends React.Component{
	render(){
		return (<HashRouter><App {...this.props}/></HashRouter>);
	}
}
ReactDOM.render(<RoutingApplication/>, document.getElementById('root'));
