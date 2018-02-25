import React,{Component} from 'react';

var questionObject=[{ques:"What is capital",opt1:"delhi",opt2:"mumbai",opt3:"jaipur",opt4:"kolkata"},
{ques:"Who is prime minister of India",opt1:"gadkari",opt2:"jaitley",opt3:"Modi",opt4:"naidu"}];

export default class QuestionTest extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const Questions =  questionObject.map((question, key)=>{
			const data =  {...question, id:key, style:{}};
			return <Question key={key} {...data}/>
		});

		return <form onSubmit={(e)=>{console.log('hello'); e.preventDefault();}}>{Questions}<input type="submit" value="Click"/></form>;
	}
}


function Question(props){
	return (<ul style={props.style}>
				<li>{props.ques}</li>
				<RadioInputWithLabel id={props.id} option={props.opt1}/>
				<RadioInputWithLabel id={props.id} option={props.opt2}/>
				<RadioInputWithLabel id={props.id} option={props.opt3}/>
				<RadioInputWithLabel id={props.id} option={props.opt4}/>
			</ul>);
}


function RadioInputWithLabel({id, option}){
	return (<li>
				<label htmlFor={id}>{option}</label>
				<input type="radio" id={id} name={`question-${id}`} value={option}/>
			</li>);
}
