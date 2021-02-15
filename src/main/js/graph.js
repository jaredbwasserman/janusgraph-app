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
    const events = {
      select: function(event) {
        var { nodes, edges } = event;

        // TODO: Remove log statements
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
      }
    };

    return(
      <div id="graph">
        <VisReact graph={data} options={options} events={events} />
      </div>
    );
  }
}

module.exports = Graph
