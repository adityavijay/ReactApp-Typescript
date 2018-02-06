'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FilterableProductTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', id: '0' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', id: '1' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', id: '2' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', id: '3' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', id: '4' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', id: '5' }];

var Category = function (_React$Component) {
	_inherits(Category, _React$Component);

	function Category() {
		_classCallCheck(this, Category);

		return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
	}

	_createClass(Category, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'tr',
				null,
				_react2.default.createElement(
					'th',
					null,
					this.props.cgr
				)
			);
		}
	}]);

	return Category;
}(_react2.default.Component);

function ProductRow(props) {
	return _react2.default.createElement(
		'tr',
		{ key: props.product.key },
		_react2.default.createElement(
			'td',
			null,
			props.product.name
		),
		_react2.default.createElement(
			'td',
			null,
			props.product.price
		)
	);
	//return <li>{props.product.name}</li>
}

function ProductTable(props) {
	var products = props.products,
	    rows = [],
	    lastcategory = null;

	rows = products.map(function (product) {
		var row = [];
		if (lastcategory != product.category) row.push(_react2.default.createElement(Category, { cgr: product.category }));
		lastcategory = product.category;
		row.push(_react2.default.createElement(ProductRow, { key: product.name, product: product }));
		return row;
	});
	//return <ul>{rows}</ul>
	return _react2.default.createElement(
		'table',
		null,
		_react2.default.createElement(
			'tbody',
			null,
			rows
		)
	);
}

function SearchBar(props) {
	return _react2.default.createElement(
		'form',
		null,
		_react2.default.createElement('input', { value: props.value, placeholder: 'search....', onChange: props.onChange })
	);
}

function filter(keyword, products) {
	var filtered = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var product = _step.value;

			var fullRowString = "";
			for (var key in product) {

				fullRowString += product[key];
			}
			var regex = new RegExp(keyword);
			if (regex.test(fullRowString)) filtered.push(product);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return filtered;
}

var FilterableProductTable = exports.FilterableProductTable = function (_React$Component2) {
	_inherits(FilterableProductTable, _React$Component2);

	function FilterableProductTable(props) {
		_classCallCheck(this, FilterableProductTable);

		var _this2 = _possibleConstructorReturn(this, (FilterableProductTable.__proto__ || Object.getPrototypeOf(FilterableProductTable)).call(this, props));

		_this2.state = { keyword: "49" };
		_this2.onTypeHandle = _this2.onTypeHandle.bind(_this2);
		return _this2;
	}

	_createClass(FilterableProductTable, [{
		key: 'onTypeHandle',
		value: function onTypeHandle(e) {
			this.setState({ keyword: e.target.value });
		}
	}, {
		key: 'render',
		value: function render() {
			var filteredProducts = filter(this.state.keyword, PRODUCTS);

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(SearchBar, { value: this.state.keyword, onChange: this.onTypeHandle }),
				_react2.default.createElement(ProductTable, { products: filteredProducts })
			);
		}
	}]);

	return FilterableProductTable;
}(_react2.default.Component);

console.log('redux2');