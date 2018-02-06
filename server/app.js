 //import path from 'path';
 import path from 'path';
 import express from 'express';
 import React from 'react';
 import {renderToString} from 'react-dom/server';
 import template from './template.js';
 import {matchPath, StaticRouter } from 'react-router-dom';
 import cors from 'cors';
 //import App from './index.js';
 import App from '../shared/index.js';
 //import cors from 'cors';
 
 const routes = [],
 server= express(),
 dir = path.join(__dirname,'../../'),
 assets = express.static(dir);
 
 console.log(`${dir}dist`);
 server.use('/dist', express.static("C:/dev/web/ReactApp/dist"));
 server.use('/build', express.static(`${dir}`));

 server.get('/',(req, res)=>{

	const context = {}, appString = renderToString( 
	<StaticRouter location={req.url} context={context}>
  		<App/> 
  	</StaticRouter>);
	/* 
	res.send(template({
		 body:appString, 
		 title: "Welcome from server"
	 }));*/

 	if (context.url) {
	    res.writeHead(302, {
	      Location: context.url
	    })
	    res.end()
	  } else {
		    res.send(template({
			 body:appString, 
			 title: "Welcome from server"
		}));
	    
	  }
	});
 server.listen(3000, ()=>console.log('app listening at port 3000'));
 
 //c:\Repositories\dev\build\dist