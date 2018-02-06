"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var setActive = exports.setActive = function setActive(user) {
	return { type: "setActive", user: user };
};