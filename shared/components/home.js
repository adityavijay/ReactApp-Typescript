import React, {Component} from 'react';
import Header from './header.js';
import Content from "./content.js";


export default class Home extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return(<div className="container">
			   <Header className="m-nav"/>
			   <div className="m-content">{this.props.children}</div>
			</div>);
	}	
}