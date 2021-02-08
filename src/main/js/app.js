// Modified from https://github.com/spring-guides/tut-react-and-spring-data-rest/blob/master/basic/src/main/js/app.js

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
const Graph = require('./graph')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {graph: {}};
  }

  // TODO: Send query string somehow instead of always getting whole graph
  componentDidMount() {
    client({method: 'GET', path: '/api/query'}).done(response => {
      this.setState({graph: response.result});
    });
  }

  render() {
    return (
      <Graph graph={this.state.graph}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)
