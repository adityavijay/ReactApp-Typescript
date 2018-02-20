export function sqr(x){     return x*x;
	
}


export function cube(x){
	return x*x*x;
}
/*
JestEnzyme test case
//export {cube};]
import {shallow} from 'enzyme';

test('checkbox label changes after click',()=>{
const checkbox = shallow(<Checkboxwithlabel/>);
expect(checkbox.text()).toEqual('off');
checkbox.find('input').simulate('change');
expect(checkbox.text()).toEqual('on');
})*/