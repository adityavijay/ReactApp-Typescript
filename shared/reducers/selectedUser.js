export default function(state=null, action){
	switch(action.type){
		case "setActive": return{selectedUser:action.user.Firstname+" "+action.user.Surname };
		default: return state;
	}
}
