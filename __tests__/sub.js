import 'raf/polyfill';
import 'babel-polyfill';
var sum= (a,b)=>a+b;
describe("Test1",()=>{
	it("should equal to 4", ()=>{
		expect(sum(2,1)).toBe(3);
	});

	it("should equal to 10", ()=>{
		expect(sum(6,4)).toBe(10);
	});
});

