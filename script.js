var App = React.createClass({
  render: function() {
    return React.DOM.h1(null, "Hello World!")
  }
})

ReactDOM.render(React.createElement(App, null), document.getElementById("app"))
