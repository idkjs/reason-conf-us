// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Component1 = require("./Component1.bs.js");
var Component2 = require("./Component2.bs.js");

var index1 = document.querySelector("#index1");

if (index1 == null) {
  console.log("Coudn't find #root element to mount the React app.");
} else {
  ReactDom.render(React.createElement(Component1.make, {
            greeting: "Hello!"
          }), index1);
}

var index2 = document.querySelector("#index2");

if (index2 == null) {
  console.log("Coudn't find #root element to mount the React app.");
} else {
  ReactDom.render(React.createElement(Component2.make, {
            greeting: "Hello!"
          }), index2);
}

/* index1 Not a pure module */
