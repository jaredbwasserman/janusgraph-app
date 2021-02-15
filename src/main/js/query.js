'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    }
  }

  handleChange(e) {
    // Only submit on Enter with modifier key
    if(e.keyCode === 13 && (e.shiftKey === true || e.ctrlKey === true)) {
      e.preventDefault();

      client({
        method: 'POST',
        path: '/api/query',
        entity: event.target.value,
      }).then(response => {
        this.setState({result: response.entity.result});
      });
    }
  }

  render() {
    return(
      <>
        <textarea className='query-request'
          placeholder='Type Gremlin query here and then press Shift+Enter or Control+Enter to send.'
          onKeyDown={this.handleChange.bind(this)}></textarea>
        <div id="query-separator"></div>
        <textarea readOnly
          className='query-result'
          placeholder='Query result here...'
          value={this.state.result}></textarea>
      </>
    );
  }
}

module.exports = Query
