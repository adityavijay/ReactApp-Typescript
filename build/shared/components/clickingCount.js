"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const srcD = document.getElementById('root');
const trgD = document.getElementById('portal');
class Model extends React.Component {
    constructor(props) {
        super(props);
        this.ele = document.createElement('div');
    }
    componentDidMount() {
        trgD.appendChild(this.ele);
    }
    render() {
        return (ReactDom.createPortal(this.props.children, this.ele));
    }
}
exports.Model = Model;
class ClickingCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clickedNumber: 0 };
        this.ele = document.createElement('div');
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        trgD.appendChild(this.ele);
    }
    handleClick(e) {
        e.preventDefault(true);
        var counter;
        counter += this.state.clickedNumber;
        this.setState((ps) => ({ clickedNumber: counter }));
    }
    render() {
        ReactDom.createPortal(this.props.children, this.ele);
        return React.createElement("div", { onClick: this.handleClick },
            "Hello number of click counts",
            this.state.clickedNumber);
    }
}
exports.ClickingCount = ClickingCount;
const Child = () => React.createElement("div", null,
    React.createElement("button", null, "Click Me"));
exports.PortalBox = () => React.createElement(ClickingCount, null,
    React.createElement(Child, null));
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
