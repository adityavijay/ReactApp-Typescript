import {shallow} from 'enzyme';
import Clock from '../shared/components/clock.js';

describe("Clock component", ()=>{
	it("should create markup", ()=>{
		const wrapper = shallow(<Clock/>);
	})
})