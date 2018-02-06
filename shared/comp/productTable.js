import React from 'react' ;

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football',id:'0'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball',id:'1'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball',id:'2'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch',id:'3'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5',id:'4'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7',id:'5'}
];

class Category extends React.Component{
	render(){
		return (<tr><th>{this.props.cgr}</th></tr>);
	}
}

function ProductRow(props){
	return (<tr key={props.product.key}><td>{props.product.name}</td><td>{props.product.price}</td></tr>)
	//return <li>{props.product.name}</li>
}



function ProductTable(props){
	var products = props.products,
	rows= [], lastcategory=null;
	
	rows= products.map((product)=>{
		var row=[];
		if(lastcategory != product.category)
			row.push(<Category cgr={product.category}/>);
		lastcategory= product.category;
		row.push( <ProductRow key={product.name} product={product}/>);
		return row;
	})
	//return <ul>{rows}</ul>
	return <table><tbody>{rows}</tbody></table>;
}

function SearchBar(props){
	return <form><input value={props.value} placeholder="search...." onChange= {props.onChange}/></form>
}


function filter(keyword, products){
	var filtered = [];
	for(var product of products){
	 var fullRowString = "";
		for(var key in product){
			
			fullRowString += product[key];
		}
		var regex = new RegExp(keyword);
		if(regex.test(fullRowString))
			filtered.push(product);	
	}
	return filtered;
}

export class FilterableProductTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {keyword:"49"};
		this.onTypeHandle= this.onTypeHandle.bind(this);
	}
	
	onTypeHandle(e){
		this.setState({keyword: e.target.value});
	}
	
	render(){
		var filteredProducts = filter(this.state.keyword, PRODUCTS);
		
		return <div><SearchBar value= {this.state.keyword} onChange={this.onTypeHandle}/><ProductTable products={filteredProducts}/></div>
	}
}

console.log('redux2');

