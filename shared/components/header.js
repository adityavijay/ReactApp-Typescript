import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import  "../css/global.css";

export default ()=><div>
				<ul><li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/aboutUs">AboutUs</NavLink></li>
				<li><NavLink to="/location">OfficeLocation</NavLink></li>
				</ul>				
			</div>;
 
