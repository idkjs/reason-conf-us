// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");

function makeProps(firstName, lastName, param) {
  return {
          firstName: firstName,
          lastName: lastName
        };
}

function make(props) {
  return React.jsx("div", {
              children: props.firstName
            });
}

exports.makeProps = makeProps;
exports.make = make;
/* react Not a pure module */