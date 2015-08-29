var React = require('react');
var Nothing = require('./Nothing');


var App = React.createClass({
  componentDidMount: function() {
    console.log('wasasbi');
    Nothing.myfun();
  },
  render: function() {
    return (
      <h1>For Realz</h1>
    );
  }

});

React.render(
  <App/>,
  document.getElementById('react-app')
);
