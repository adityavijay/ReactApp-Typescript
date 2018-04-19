import React from 'react';

function sum(a,b){
	return parseInt(a)+parseInt(b);
}
function sub(a,b){
	return parseInt(a)-parseInt(b);
}

function HOC(WrappedComponent, selectData){
	return class extends React.Component{
		constructor(props){
			super(props);
			this.handleChange = this.handleChange.bind(this);
			this.input1 = 0;
			this.input2 = 0;
			this.state = {data:selectData(this.input1.value,this.input2.value)};
			
		}
						
		handleChange(e){
			this.setState({data:selectData(this.input1.value,this.input2.value)});
		}
		
		render(){
			
			return <WrappedComponent data = {this.state.data} obj={this} {...this.props}/>
			
		}
		
	};
}		

function SumInit(props){
	return (<fieldset>
			<label>Adder</label>	
			<input ref={(ip)=>(props.obj.input1=ip)} onChange={props.obj.handleChange}type="text" name="input1" placeholder="A"/>
			<input ref={(ip)=>(props.obj.input2=ip)} onChange={props.obj.handleChange} type="text" name="input2" placeholder="B"/>
			<input value={props.data||0} type="text" name="input2" placeholder="A+B"/>
			</fieldset>
	);
}	

function SubInit(props){
	return (<fieldset>
			<label>Substracter</label>	
			<input ref={(ip)=>(props.obj.input1=ip)} onChange={props.obj.handleChange}type="text" name="input1" placeholder="A"/>
			<input ref={(ip)=>(props.obj.input2=ip)} onChange={props.obj.handleChange} type="text" name="input2" placeholder="B"/>
			<input value={props.data||0} type="text" name="input2" placeholder="A-B"/>
			</fieldset>
	);
}

export var SumFinal = HOC(SumInit, sum);

export var SubFinal = HOC(SubInit, sub);
/*HOC is to reuse state smanagement code*/

