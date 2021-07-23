
switch (ReactDOM.querySelector("#index1")) {
| Some(index1) => ReactDOM.render(<Component1 greeting="Hello!" />, index1)
| None => Js.log("Coudn't find #root element to mount the React app.")
};
switch (ReactDOM.querySelector("#index2")) {
| Some(index2) => ReactDOM.render(<Component2 greeting="Hello!" />, index2)
| None => Js.log("Coudn't find #root element to mount the React app.")
};
