import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Obj from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Obj.App/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


var x = function(x:string, y:any, z?:):string{
	
}
var x: string;
var y: array<number>;
let strTuple: [string, number]
void, string, number, any, undefined

()=>{}


interface Todo {title: string; text:string;}

var showToDo = (todo:ToDo)=>{ console.log(todo.title+ todo.string);}


class User{
	public name: string;
	email: string;

	constructor(name:string, email:string, age:number){
		this.name = name;
		this.email = email;
		this.age = age;
	}

}

enum color{Red, Green, Blue}
interface as{ad:string; bf:string}

<string>msg or (msg as string)

interface Foo{ bar: string; bas: string}

var foo = {} as Foo or <Foo> {}


class Hello extends React.Component<Props, Object> {
	render(){

	}
}

ad:void

var t = ad

var clock = shallow('<clock/>');
expect(clock.find('.div')).to.have.length(3);
<string>

import * as React from 'react';

export interface HiProps{ compiler:string, framework:string}

export const Hello = (props:HiProps)=><h1> Hello from {props.compiler} and {props.framework} </h1>

export class Hello extends React.Component<HelloProps,{}> {
	
	constructor(props:HelloProps){
		super(props);
		this.state

	}
	render(){}
}