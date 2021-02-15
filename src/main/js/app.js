// Modified from https://github.com/spring-guides/tut-react-and-spring-data-rest/blob/master/basic/src/main/js/app.js

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
const Graph = require('./graph');
const Query = require('./query');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {graph: {}};
  }

  componentDidMount() {
    client({
      method: 'GET',
      path: '/api/graph'
    }).then(response => {
      this.setState({graph: response.entity.graph});
    });
  }

  render() {
    return (
      <>
        <Query />
        <Graph graph={this.state.graph} />
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
);
