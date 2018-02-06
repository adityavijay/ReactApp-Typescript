import React from 'react';

function toCelcius(frn){
	return (frn-32)*5/9;
}

function toFarenheit(clc){
	return(clc*9/5)+32;
}

function tryConvert(temp, convertFunc){
	const input = parseFloat(temp);
	if(Number.isNaN(input)){
		console.log('type only Number, characters are not allowed');
		return '';
	}
	
	const output = Math.round(convertFunc(input));
	
	return output.toString();
}

function Celcius(props){
	/*function handChange(e,x){
		props.onChange(e.target.value);
	}*/	
	
	var temp = props.temp, x={a:12,b:23},
	handChange = (function(e){
		props.onChange(e.target.value);
	}).bind(x);		
		return(<fieldset>
		<label>{props.children}</label>
		<input type="text" value={temp} onChange={handChange}/>
		</fieldset>);
}
/*
class Celcius extends React.Component{
	constructor(props){
		super(props);
		this.handChange = this.handChange.bind(this);
	}
	
	handChange(e){
		this.props.onChange(e.target.value);
	}
	
	render(){
		var temp = this.props.temp;		
		return(<fieldset>
		<label>Celcius</label>
		<input type="text" value={temp} onChange={this.handChange}/>
		</fieldset>);
	}
	
}*/

class Farenheit extends React.Component{
	constructor(props){
		super(props);
		this.handChange = this.handChange.bind(this);
	}
	
	handChange(e){
		this.props.onChange(e.target.value);
	}
	
	render(){
		var temp = this.props.temp;		
		return(<fieldset>
		<label>Farenheit</label>
		<input type="text" value={temp} onChange={this.handChange}/>
		</fieldset>);
	}
	
}

export class TemperatureConverter extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {temp:"0", scale:"c"};
		this.handleCel= this.handleCel.bind(this);
		this.handleFar = this.handleFar.bind(this);
	}
	
	handleCel(val){
		//this.setState({temp:val,scale:'c'});
		this.setState(pvSt=>({temp:val,scale:'c'}));
	}
	
	handleFar(val){
		//this.setState({temp:val,scale:'f'});
		this.setState(pvSt=>({temp:val,scale:'f'}));
	}
	
	render(){
		var value = this.state.temp, 
		scale =this.state.scale,
		
		c=["Hello", "Celcius"],
		list = c.map((d)=>(<span data-width="20" key={d}>{d}</span>));
		
		var celVal= scale=='c'? value: tryConvert(value, toCelcius);
		var farVal= scale=='f'? value: tryConvert(value, toFarenheit);
		return (<div><Celcius temp={celVal} onChange={this.handleCel}>{list}</Celcius><Farenheit temp={farVal} onChange={this.handleFar}/></div>);
	}
}
