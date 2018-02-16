import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setActive} from '../actions/actions';
class UserList extends Component{	
	createListItems(){
		return this.props.users.map((user,i)=>{
			return (<li key={i} onClick= {()=>(this.props.onSelectClick(user))}>{user.Firstname}</li>);
		});
	}
    render(){	
		return (<ul>{this.createListItems()}</ul>);
	}
}

var mapStateToProps = ( state, props )=>{	
	return {users:state.users};
}, 
mapDispatchToProps=(dispatch, props)=>{
	return {onSelectClick:(user)=>{	dispatch(setActive(user))}};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);






//export var x =connect(mapStateToProps)(UserList);
