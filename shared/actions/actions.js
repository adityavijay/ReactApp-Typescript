import * as actions from './actionList.js';

export const setActive= (user)=>{	
	return {type:"setActive", user};
}

export const setCurrentTime= (time)=>{
	return {type: actions.setCurrentTime, time};
}