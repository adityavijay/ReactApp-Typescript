'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../actions/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
	_inherits(UserList, _Component);

	function UserList() {
		_classCallCheck(this, UserList);

		return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
	}

	_createClass(UserList, [{
		key: 'createListItems',
		value: function createListItems() {
			var _this2 = this;

			return this.props.users.map(function (user, i) {
				return _react2.default.createElement(
					'li',
					{ key: i, onClick: function onClick() {

							_this2.props.onSelectClick(user);
						} },
					user.Firstname
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var x = this.props;
			return _react2.default.createElement(
				'ul',
				null,
				this.createListItems()
			);
		}
	}]);

	return UserList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, props) {
	return { users: state.users };
},
    mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
	return { onSelectClick: function onSelectClick(user) {
			dispatch((0, _actions.setActive)(user));
		} };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserList);

//export var x =connect(mapStateToProps)(UserList);