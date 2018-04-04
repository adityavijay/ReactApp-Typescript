import * as React from 'react';
import * as ReactDom from 'react-dom';
/*
const srcD = document.getElementById('root');
const trgD = document.getElementById('portal');
*/

export interface HelloProps {compiler?:string;};
export interface ModelProps {onClick?:number;};

class Model extends React.Component<ModelProps,{}> {

	constructor(props:{}){ super(props); }

	componentDidMount(){
		//trgD.appendChild(this.ele);
	}

	render(){
		const x = <div>{this.props.children}</div>;
		return(ReactDom.createPortal(<Child/>, document.getElementById('portal')));
	}
}

export class ClickingCount extends React.Component<HelloProps,{}> {
    state:{clickedNumber:number};
   
    constructor(props:{}){
    	super(props);
    	this.state = {clickedNumber:0};
    	this.handleClick = this.handleClick.bind(this);
    }

	
	handleClick(e:any){
		e.preventDefault(true);
		var counter:number=1;
		counter += this.state.clickedNumber;
		this.setState((ps:any):any=>({clickedNumber:counter}))
	}    
    render() {
        return <div>
				<div onClick={this.handleClick}>Click <Model/></div><div>Hello number of click counts{this.state.clickedNumber} 
				</div>
			</div>;
    }
}

const Child = ()=><div><button>Click Me</button></div>;

