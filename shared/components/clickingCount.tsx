import * as React from 'react';
import * as ReactDom from 'react-dom';

const srcD = document.getElementById('root');
const trgD = document.getElementById('portal');

export interface HelloProps {compiler?:string;};
export interface ModelProps {onClick?:number;};

class Model extends React.Component<ModelProps,{}> {

	constructor(props:{}){ super(props); }

	componentDidMount(){
		//trgD.appendChild(this.ele);
	}

	render(){
		const x = <div>{this.props.children}</div>;
		return(ReactDom.createPortal(<Child/>, trgD));
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
        return <div onClick={this.handleClick}><div>Hello number of click counts{this.state.clickedNumber} <div onClick={function(){console.log(123);}}><Parent > <Hello compiler={"dd"}/></Parent></div><div><Model>Hello</Model></div></div></div>;
    }
}

const Child = ()=><div><button>Click Me</button></div>;


export interface HelloProps1 { compiler: string;}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps1, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and Aditya !<input type="button"/></h1>;
    }
}

const Parent= (props:{children:any;})=><div><React.Fragment>{props.children}</React.Fragment></div>
/*
const Test = (x:string):boolean=>true;

let someValue:[string, string] = ["ad","ee"];

//let strLength: number = (someValue as string).length;
class TestC {
	constructor(private a:number, private b:number){

	}

	protected add1():number{ return this.a+this.b;}
}

class TestD extends TestC {
	c:number;

	constructor(a:number, b:number, c:number){
		super(a+b, c)
	}

	add(){
		return super.add1();
	}

}

var td = new TestD(12,13,14);
console.log(td.add());


enum color {blue,red,yellow};

var col:color = color.blue;

interface rt {a:string, b:number}

var g:rt;
g={a:"r",b:34};

//generic indentity
/*
const gen = <T>(arg:Array<T>):Array<T>=>{console.log(arg.length); return arg;}

gen([1,2,3]);*/
/*
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue= 23;

class fg<T,S>{
	a:T;
	b:S;
}

var y = new fg<string,number>();
y.a="fff";

*/