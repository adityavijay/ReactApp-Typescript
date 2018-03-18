import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default (props)=><div {...props}>
				<ul><li><NavLink exact activeClassName="activeLink" to="/">Home</NavLink></li>
				<li><NavLink activeClassName="activeLink" to="/aboutUs">AboutUs</NavLink></li>
				<li><NavLink activeClassName="activeLink" to="/location">OfficeLocation</NavLink></li>
				<li><NavLink activeClassName="activeLink" to="/questions">Questions</NavLink></li>
				</ul>				
			</div>;
 
