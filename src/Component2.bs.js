// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Component2(Props) {
  var greeting = Props.greeting;
  var match = React.useReducer((function (state, action) {
          if (action) {
            return /* record */[
                    /* count */state[/* count */0],
                    /* show */!state[/* show */1]
                  ];
          } else {
            return /* record */[
                    /* count */state[/* count */0] + 1 | 0,
                    /* show */state[/* show */1]
                  ];
          }
        }), /* record */[
        /* count */0,
        /* show */true
      ]);
  var dispatch = match[1];
  var state = match[0];
  var message = "You've clicked this " + (String(state[/* count */0]) + " times(s)");
  var match$1 = state[/* show */1];
  return React.jsxs("div", {
              children: /* array */[
                React.jsx("button", {
                      children: message,
                      onClick: (function (_event) {
                          return Curry._1(dispatch, /* Click */0);
                        })
                    }),
                /* array */[React.jsx("div", {
                        children: "one"
                      }, "foo")],
                React.jsx("button", {
                      children: "Toggle greeting",
                      onClick: (function (_event) {
                          return Curry._1(dispatch, /* Toggle */1);
                        })
                    }),
                match$1 ? greeting : null
              ]
            });
}

var make = Component2;

exports.make = make;
/* react Not a pure module */
