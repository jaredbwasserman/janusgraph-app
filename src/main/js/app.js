// Modified from https://github.com/spring-guides/tut-react-and-spring-data-rest/blob/master/basic/src/main/js/app.js

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  componentDidMount() {
    client({method: 'GET', path: '/hello'}).done(response => {
      this.setState({message: `${response.entity.message}`});
    });
  }

  render() {
    return (
      <Hello message={this.state.message}/>
    )
  }
}

class Hello extends React.Component{
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)
