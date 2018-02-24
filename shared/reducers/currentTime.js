export default ( state=null , action)=>{
	if(action.type=="setCurrentTime")
		return action.time;

	return new Date().toLocaleTimeString();
};