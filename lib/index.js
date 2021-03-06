var React, ga, script, scriptIsAdded, _name,
  __slice = [].slice;

React = require('react');

script = React.DOM.script;

if (typeof window !== "undefined" && window !== null) {
  if (window.GoogleAnalyticsObject == null) {
    window.GoogleAnalyticsObject = 'ga';
  }
}

if (typeof window !== "undefined" && window !== null) {
  if (window.ga == null) {
    window.ga = ga;
  }
}

ga = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return typeof window !== "undefined" && window !== null ? window[window.GoogleAnalyticsObject].apply(window, args) : void 0;
};

if (typeof window !== "undefined" && window !== null) {
  if (window[_name = window.GoogleAnalyticsObject] == null) {
    window[_name] = function() {
      var api, args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      api = window[window.GoogleAnalyticsObject];
      (api.q || (api.q = [])).push(args);
    };
  }
}

scriptIsAdded = false;

ga.Initializer = React.createClass({
  displayName: 'GAInitializer',
  componentDidMount: function() {
    window[window.GoogleAnalyticsObject].l = new Date().getTime();
    if (!scriptIsAdded) {
      return this.addScript(this.props.protocol || 'http');
    }
  },
  addScript: function(protocol) {
    var el, s;
    scriptIsAdded = true;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.async = true;
    el.src = protocol + '://www.google-analytics.com/analytics.js';
    s = document.getElementsByTagName('script')[0];
    return s.parentNode.insertBefore(el, s);
  },
  render: function() {
    return script(null);
  }
});

module.exports = ga;
