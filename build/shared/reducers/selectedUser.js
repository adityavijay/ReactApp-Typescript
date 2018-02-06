"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	switch (action.type) {
		case "setActive":
			return { selectedUser: action.user.Firstname + " " + action.user.Surname };
		default:
			return state;
	}
};