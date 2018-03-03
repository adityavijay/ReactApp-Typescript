'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {setActive} from '../actions/actions';

var SelectedUser = function (_Component) {
	_inherits(SelectedUser, _Component);

	function SelectedUser() {
		_classCallCheck(this, SelectedUser);

		return _possibleConstructorReturn(this, (SelectedUser.__proto__ || Object.getPrototypeOf(SelectedUser)).apply(this, arguments));
	}

	_createClass(SelectedUser, [{
		key: 'render',
		value: function render() {
			if (this.props.currentUser != null && this.props.currentUser != undefined) {
				var selectedUser = this.props.currentUser.selectedUser;
			} else {
				var selectedUser = "None Selected";
			}
			return _react2.default.createElement(
				'div',
				null,
				selectedUser
			);
		}
	}]);

	return SelectedUser;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return { currentUser: state.selectedUser };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SelectedUser);