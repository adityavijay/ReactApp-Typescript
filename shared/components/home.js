import React, {Component} from 'react';
import Header from './header.js';
import Content from "./content.js";


export default class Home extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return(<div className="container">
			   <div><Header className="Hello"/></div>
			   <div><Content/></div>
			   <div>{this.props.children}</div>
			</div>);
	}	
}