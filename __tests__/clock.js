import React from 'react';
import {shallow,configure} from 'enzyme';
import Clock from '../shared/components/clock.js';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'raf/polyfill';
import 'babel-polyfill';


configure({adapter: new Adapter()});
describe("Clock component", ()=>{
	it("should create markup", ()=>{
		/*const wrapper = renderer.create(<Clock/>);
		let tree =  component.toJSON();
		expect(tree).toMatchSnapshot();*/

		const content = shallow(<Clock/>);
		//console.log(content.getRenderOutput());
		//expect(content.find('p')).toEqual(<p>Hello</p>);
	})
})	