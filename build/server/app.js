'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _template = require('./template.js');

var _template2 = _interopRequireDefault(_template);

var _reactRouter = require('react-router');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _index = require('../shared/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import cors from 'cors';

//import path from 'path';
var routes = [],
    server = (0, _express2.default)(),
    dir = _path2.default.join(__dirname, '../../'),
    assets = _express2.default.static(dir);
//server.use('/dist', express.static(path.join(__dirname,'../../../dist')));

//import App from './index.js';
console.log(dir + 'dist');
server.use('/dist', _express2.default.static("C:/dev/My/ReactApp-Typescript/dist"));
server.use('/build', _express2.default.static('' + dir));

server.get('/aditya', function (req, res) {
  return res.send('Hello Test');
});

server.get('/', function (req, res) {

  var context = {},
      appString = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouter.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_index2.default, null)
  ));
  /* 
  res.send(template({
  	 body:appString, 
  	 title: "Welcome from server"
   }));*/

  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    res.send((0, _template2.default)({
      body: appString,
      title: "Welcome from server"
    }));
  }
});
server.listen(3005, function () {
  return console.log('app listening at port 3005');
});

//c:\Repositories\dev\build\dist