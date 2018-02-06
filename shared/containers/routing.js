import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


var NavRoute = ()=>{
	return <Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/dist/about-us">About us</Link></li>
						<li><Link to="/topics">Topics</Link></li>
					</ul>
						
					<hr/>
					
					<Route exact path="/dist" render={()=>(<div>Please click on above link</div>)}/>
					<Route exact path="/" component={Home}/>
					<Route path="/dist/about-us" component={Aboutus}/>
					<Route path="/topics" component={Topics}/>
				</div>
			</Router>
	
}, Home=()=>(<div>Home info</div>),

Aboutus=()=>(<div>Aboutus info</div>),

Topics= ({match})=>{
return 	<Router><div>
			<ul>
				<li><Link to={`${match.url}/WorldNews`}>World News</Link></li>
				<li><Link to={`${match.url}/CountryNews`}>Country News</Link></li>
				<li><Link to={`${match.url}/LocalNews`}>Local News</Link></li>
			</ul>
			<Route path={match.url+"/:topicId"} component={Topic}/>
			<Route exact path={match.url} render={()=>(<div>Type the news, you want to see</div>)}/>
		</div></Router>		
},
Topic = ({match})=>{
	return <div>{match.params.topicId}</div>
};

export default NavRoute;