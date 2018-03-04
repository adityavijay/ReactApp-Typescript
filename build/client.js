"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
//import App from '../shared/index.js';
//import {BrowserRouter as Router, browserHistory, HashRouter} from 'react-router-dom';
require("../shared/css/global.less");
exports.Hello = (props) => React.createElement("h1", null,
    "Hello from ",
    props.compiler,
    " !");
react_dom_1.render(React.createElement(exports.Hello, { compiler: [1, 2, 3] }), document.getElementById('root'));
