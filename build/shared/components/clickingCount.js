"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
;
;
class Model extends React.Component {
    constructor(props) { super(props); }
    componentDidMount() {
        //trgD.appendChild(this.ele);
    }
    render() {
        const x = React.createElement("div", null, this.props.children);
        return (ReactDom.createPortal(React.createElement(Child, null), document.getElementById('portal')));
    }
}
class ClickingCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clickedNumber: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault(true);
        var counter = 1;
        counter += this.state.clickedNumber;
        this.setState((ps) => ({ clickedNumber: counter }));
    }
    render() {
        return React.createElement("div", null,
            React.createElement("div", { onClick: this.handleClick },
                "Click ",
                React.createElement(Model, null)),
            React.createElement("div", null,
                "Hello number of click counts",
                this.state.clickedNumber));
    }
}
exports.ClickingCount = ClickingCount;
const Child = () => React.createElement("div", null,
    React.createElement("button", null, "Click Me"));
