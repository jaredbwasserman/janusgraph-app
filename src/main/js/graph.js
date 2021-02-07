'use strict';

const Vis = require('vis-network/standalone')
const React = require('react');
const ReactDOM = require('react-dom');

class Graph extends React.Component {
  render() {
    // TODO: Use the graph input parameter for data instead of hard-coded

    // create an array with nodes
    const nodes = new Vis.DataSet([
      { id: 1, label: `${this.props.graph}` },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" },
    ]);

    // create an array with edges
    const edges = new Vis.DataSet([
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 3 },
    ]);

    // create a network
    const container = document.getElementById("graph");
    const data = {
      nodes: nodes,
      edges: edges,
    };
    const options = {};
    const network = new Vis.Network(container, data, options);

    return (null);
  }
}

module.exports = Graph
