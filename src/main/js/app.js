/*
File copied from https://github.com/spring-guides/tut-react-and-spring-data-rest/blob/master/basic/src/main/js/app.js
File copied on 2021-02-06.
Copy of full license is located at licenses/tut-react-and-spring-data-rest/LICENSE.

Modifications:
The Employee and EmployeeList Components were removed.
API calls were updated to be janusgraph-app specific.
Rendered Components were updated.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
const Graph = require('./graph');
const Query = require('./query');
const Bar = require('./bar');

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
        <Bar />
        <Query />
        <Graph graphId='graph' graph={this.state.graph} />
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
);
