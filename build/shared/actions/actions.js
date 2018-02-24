"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setCurrentTime = exports.setActive = undefined;

var _actionList = require("./actionList.js");

var actions = _interopRequireWildcard(_actionList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setActive = exports.setActive = function setActive(user) {
	return { type: "setActive", user: user };
};

var setCurrentTime = exports.setCurrentTime = function setCurrentTime(time) {
	return { type: actions.setCurrentTime, time: time };
};