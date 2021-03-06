/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

// TODO: Syntax highlighting for query request script
// TODO: Syntax highlighting and formatting for query response output

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
    const formatResult = (result) => {
      if (!result || result === '') {
        return '';
      }
      else {
        var parsed;
        try {
          parsed = JSON.parse(this.state.result);
          return JSON.stringify(parsed, null, 2);
        }
        catch (e) {
          return this.state.result;
        }
      }
    }

    return(
      <>
        <div className="split col1">
          <textarea className='query-request'
            placeholder='Type a Gremlin query here and then press Shift+Enter or Control+Enter to send the query. Separate multiple statements with semicolons.'
            onKeyDown={this.handleChange.bind(this)}></textarea>
          <textarea readOnly
            className='query-result'
            placeholder='Query results will appear here after a query is sent.'
            value={formatResult(this.state.result)}></textarea>
        </div>
      </>
    );
  }
}

module.exports = Query
