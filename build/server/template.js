"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var body = _ref.body,
	    title = _ref.title;


	return "<!Doctype html>\n\t<html>\n\t<head>\n\t<title>" + title + "</title>\n\t<script src=\"https://d3js.org/d3.v5.min.js\"></script>\n\t</head>\n\t<body>\n\t  <div id=\"root\">" + body + "</div>\n\t</body>\n\t<script src=\"/dist/bundle.js\"></script>";
};