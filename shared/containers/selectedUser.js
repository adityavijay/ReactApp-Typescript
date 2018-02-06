import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {setActive} from '../actions/actions';

class SelectedUser extends Component{
	render(){
		if(this.props.currentUser != null && this.props.currentUser != undefined ){
			var selectedUser =  this.props.currentUser.selectedUser;
		}else
		{
			var selectedUser = "None Selected";
		}
		return <div>{selectedUser}</div>
	}
}


var mapStateToProps=(state)=>{
	return {currentUser: state.currentUser};
}


export default connect(mapStateToProps)(SelectedUser);