import * as React from "react";
import * as ReactDom from "react-dom";
import {App, hello, fg} from "../shared/index";
import '../shared/css/global.less';
console.log(fg.y);
ReactDom.render(<App/>, document.getElementById('root'));

//intrinsic elements or custom components