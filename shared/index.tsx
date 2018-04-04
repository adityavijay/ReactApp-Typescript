import * as React from 'react';
import {ClickingCount, HelloProps} from './components/clickingCount';

//export interface HelloProps { compiler: string; framework: string; }
export interface len {length:number;}
export interface Arr{ type:string;length:number; ad(x:number):number;}

function Identity<T,U>(x:T,y:U):len|Arr{
    let result= {} as T & U;
    (result) = (x as any);
    return {length:23};
}


var ar:Arr = {type:"car", length:12, ad(x){return 123;}},
leng:len = {length:67};

interface Bird {
    fly():void,
    layEggs():void
}

interface Fish {
    swim():void;
    layEggs():void;
}

function getPet():Fish|Bird{
    return {swim(){}, layEggs(){}}
}

var pet = getPet() as Fish;
pet.swim();

class B{}
class A extends B implements Fish{    
    constructor(public x:number){super();}
    swim(){}
    layEggs(){}
}

var i = new A(23);
i.x;

type N= string;
declare function aliased(x:N):void;

enum En {x=1,y=789,z };
function ad():En{
    return En.z;
}


function keyIndicator<T,K extends keyof T>(o:T, k:K[]):T[K]{
    return o[k[0]];
}

//let validator:{[sr:string]:number};


export namespace fg{
   export var validator:{[st:string]:number}={x:345};
   export class A{constructor(public x:number){}}
}
var t = new fg.A(12);

export namespace fg{
    export var y = validator.x;
}

interface ad{x:23; y():void}


/*declare namespace JSX {
   interface IntrinsicElements {
       [elemName: string]: any;
   }
}*/ 


class Vas extends React.Component<{bar:boolean, children:JSX.Element},{}>{    
    render() {
        return <div>Hello Tanu {this.props.children}</div>
    }
}

class Type {
    public x: string;
    public y(arg:string):number{
        return 234;
    }
}


var T= new Type();
T.x="";
T.y("");


//<Vas bar={true}>I am coming</Vas> //it gives error
function App(){ 
    return <div>aditya vijay<div></div><ClickingCount/></div>
};

export {keyIndicator as hello, App};