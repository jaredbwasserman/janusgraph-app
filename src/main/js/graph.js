'use strict';

const Vis = require('vis-network/standalone')
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

    // Create empty DataSets
    const nodes = new Vis.DataSet();
    const edges = new Vis.DataSet();

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

    // Add the parsed and transformed data to the DataSets
    nodes.add(parsed.nodes);
    edges.add(parsed.edges);

    // Create a network
    const container = document.getElementById("graph");
    const data = {
      nodes: nodes,
      edges: edges,
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
      }
    }
    const network = new Vis.Network(container, data, options);
    network.fit();

    return (null);
  }
}

module.exports = Graph
