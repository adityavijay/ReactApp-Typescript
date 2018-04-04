import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Route, Link, Switch, Redirect, IndexRoute, withRouter} from 'react-router';
import Home from './home.js';
//import Clock from '../containers/clock.js';
import {Clock} from './clock.js';
import Store from '../store.js';
import QuestionTest from './questionTest.js';
import UserList from '../containers/userList';
import SelectedUser from '../containers/selectedUser';
import axios from 'axios';

export default class Root extends Component{	
render(){	
	return (<div>	
			   <Store>
			   		<Route path="/" render={({match,location,...rest})=>{
						return (<Home>
							<Route exact path="/"  component={Initial}/>

							<Route path="/aboutUs/"  render={
								({match,location,history})=>{
									const loc = {key:'ac3df4',pathname:'/questions',hash:'#howdy',state:{x:true}};
									history.push(loc);
								return <div>aboutus-{match.params.id}</div>
							}} />
							<Route path="/location" children={({match, ...rest})=>(<div className={match?'active':''}>This is the location</div>)}/>
							<Route path="/redirect" render={()=>{
								return <div> Redirected </div>}}/>	
							<Route path="/questions" component={QuestionTest}/>
						</Home>);
					}}/>			
				</Store>
			</div>);	
		}
}	


class Initial extends Component{
	componentDidMount(){
		axios.get('/aditya').
					then((x)=>console.log(x)).
					catch(()=>console.log('error'));
	}
	render(){
		return (<div>
				<input type="button" onClick={
					()=>{
					axios.get('/aditya').
					then((x)=>console.log(x)).
					catch(()=>console.log('error'))}
				} />
			</div>);
	}
}


 //Redux Thunk Middleware
 export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        axios.get(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}


 class ErrorBoundary extends Component{
 	constructor(props){super(props); this.state={hasError:false}}
 	
 	componentDidCatch(error,info){
 		this.setState({hasError:true});
 	}

 	render(){
 		var x=null;
 		if(this.state.hasError)
 			x= <h1>Something went wrong</h1>;
 		else
 			x= this.props.children;

 		return x;
 	}	
 }

