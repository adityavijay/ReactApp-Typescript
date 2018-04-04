import React from 'react';
//import Clock from './components/clock.js';
import renderer from 'react-test-renderer';

const Link = ()=><a  id="link" href="#"> Aditya<span>Hello</span> </a>;


describe(" Clock is here", ()=>{
    it("should do tick",()=>{
        expect(2).toBe(2);
    })
})

const tree = renderer.create(<Link/>).toJSON();
  expect(tree).toMatchSnapshot();