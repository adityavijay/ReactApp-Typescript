import * as React from 'react';
import * as ReactDom from 'react-dom';
 

export interface HelloProps { compiler?: string; framework?: string; }

const srcD = document.getElementById('root');
const trgD = document.getElementById('portal');

export class Model extends React.Component {
	ele:any;

	constructor(props:{}){
		super(props);
		this.ele = document.createElement('div');
	}

	componentDidMount(){
		trgD.appendChild(this.ele);
	}

	render(){
		return(ReactDom.createPortal(this.props.children, this.ele));
	}
}

export class ClickingCount extends React.Component<HelloProps,{}> {
    compiler:string; 
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
        return <div onClick={this.handleClick}><div>Hello number of click counts{this.state.clickedNumber}</div><div><Model><Child/></Model></div></div>;
    }
}


const Child = ()=><div><button>Click Me</button></div>;


export const PortalBox = ()=><ClickingCount><Child/></ClickingCount>;

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