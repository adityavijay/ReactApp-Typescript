import 'raf/polyfill';
import 'babel-polyfill';

/*test('adds 1 + 2 to equal 3', () => {
 var sum = require('../sum.js');
  expect(sum(2,1)).toBe(3);
});*/
/*
const sum = require('../sum');
describe("Test1",()=>{
	it("should equal to 3", ()=>{
		expect(sum(2,1)).toBe(3);
	});
})*/

import sum from '../sum';
describe("Test1",()=>{
	it("should equal to 4", ()=>{
		expect(sum(2,1)).toBe(3);
	});

	it("should equal to 10", ()=>{
		expect(sum(6,4)).toBe(10);
	});
});


