import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default (props)=><div {...props}>
				<ul><li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/aboutUs">AboutUs</NavLink></li>
				<li><NavLink to="/location">OfficeLocation</NavLink></li>
				<li><NavLink to="/questions">Questions</NavLink></li>
				</ul>				
			</div>;
 
