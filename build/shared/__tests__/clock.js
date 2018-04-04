'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link() {
    return _react2.default.createElement(
        'a',
        { id: 'link', href: '#' },
        ' Aditya',
        _react2.default.createElement(
            'span',
            null,
            'Hello'
        ),
        ' '
    );
};
//import Clock from './components/clock.js';


describe(" Clock is here", function () {
    it("should do tick", function () {
        expect(2).toBe(2);
    });
});

var tree = _reactTestRenderer2.default.create(_react2.default.createElement(Link, null)).toJSON();
expect(tree).toMatchSnapshot();