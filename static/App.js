'use strict';

/*
const contentNode = document.getElementById('contents');
const component = <h1>Hello World!</h1>;  //A simple JSX component

ReactDOM.render(component, contentNode); //Render the component inside the contentNode
*/

var contentNode = document.getElementById('contents');

var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var message = continents.map(function (c) {
  return 'Hello ' + c + '!';
}).join('');

var component = React.createElement(
  'p',
  null,
  message
); //A simple JSX component
ReactDOM.render(component, contentNode); //Render the component inside the contentNode