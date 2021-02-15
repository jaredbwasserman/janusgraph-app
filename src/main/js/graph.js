'use strict';

const Vis = require('vis-network/standalone');
const VisReact = require('react-vis-network-graph').default;
const React = require('react');
const ReactDOM = require('react-dom');

// TODO: Add node content in and make it look like https://visjs.github.io/vis-network/examples/network/data/importingFromGephi.html
// TODO: See https://github.com/visjs/vis-network/blob/master/examples/network/data/importingFromGephi.html
// TODO: Add hover text too that would be cool
// TODO: Fix the labels to not be the id
// TODO: Why does it load twice?

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    }
  }

  render() {
    // Exit early if empty input
    if (Object.keys(this.props.graph).length === 0) {
      return (null);
    }

    // Parse input
    const parsed = Vis.parseGephiNetwork(JSON.parse(this.props.graph), {});

    // Transform input
    parsed.nodes.forEach(node => {
      // Remove color
      delete node.color;
    });
    parsed.edges.forEach(edge => {
      // Remove color
      delete edge.color;
    });

    // Configure network
    const data = {
      nodes: parsed.nodes,
      edges: parsed.edges,
    };
    const options = {
      nodes: {
        color: {
          border: '#2B7CE9',
          background: '#97C2FC',
          highlight: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          },
          hover: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          }
        }
      },
      edges: {
        color: {
          color: '#848484',
          highlight: '#848484',
          hover: '#848484',
          inherit: 'from',
          opacity: 1.0
        }
      }
    };

    // Configure events
    const updateState = (nodes, edges) => {
      if ((nodes === undefined || nodes.length == 0) && (edges === undefined || edges.length == 0)) {
        this.setState({info: ''});
      }
      else {
        this.setState({info: JSON.stringify({nodes: nodes,edges: edges}, null, 2)});
      }
    };
    const events = {
      select: function(e) {
        const { nodes, edges } = e;
        updateState(nodes, edges);
      }
    };

    return(
      <>
        <div className="split col2">
          <div className="centered">
            <div id="graph">
              <VisReact graph={data} options={options} events={events} />
            </div>
          </div>
        </div>
        <div className="split col3">
          <div className="centered">
            <textarea readOnly
              className='graph-info'
              placeholder='Click on graph elements to display more info here.'
              value={this.state.info}></textarea>
          </div>
        </div>
      </>
    );
  }
}

module.exports = Graph
