/*
Portions of file copied from
  https://github.com/visjs/vis-network/blob/master/examples/network/data/importingFromGephi.html
  https://github.com/visjs/vis-network/blob/master/examples/network/other/cursorChange.html
Files copied on 2021-02-15.
Copy of full license is located at licenses/vis-network/LICENSE.

Modifications:
Only code surrounded by the "code copied from importingFromGephi" section below was taken from importingFromGephi.
Only code surrounded by the "code copied from cursorChange" section below was taken from cursorChange.
The applicable code sections were modified to match the style of this file.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

'use strict';

const Vis = require('vis-network/standalone');
const VisReact = require('react-vis-network-graph').default;
const React = require('react');
const ReactDOM = require('react-dom');

// TODO: Syntax highlighting for node info
// TODO: Add node content in and make it look like https://visjs.github.io/vis-network/examples/network/data/importingFromGephi.html
// TODO: See https://github.com/visjs/vis-network/blob/master/examples/network/data/importingFromGephi.html
// TODO: Add hover text too that would be cool
// TODO: Fix the labels to not be the id
// TODO: Why does it load twice?

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphId: this.props.graphId,
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

      // Assign name (or label if name is missing)
      if (node.hasOwnProperty('attributes')) {
        if (node.attributes.hasOwnProperty('name')) {
          node.label = node.attributes.name;
        }
        else if (node.attributes.hasOwnProperty('labelV')) {
          node.label = node.attributes.labelV;
        }
      }
    });
    parsed.edges.forEach(edge => {
      // Remove color
      delete edge.color;

      // Assign label
      if (edge.hasOwnProperty('attributes') && edge.attributes.hasOwnProperty('labelE')) {
        edge.label = edge.attributes.labelE;
      }
    });

    // Create maps to use for node info
    const nodeLookup = {};
    parsed.nodes.forEach((node) => {
      nodeLookup[node.id] = node;
    });
    const edgeLookup = {};
    parsed.edges.forEach((edge) => {
      edgeLookup[edge.id] = edge;
    });

    // Configure network
    const data = {
      nodes: parsed.nodes,
      edges: parsed.edges,
    };
    const options = {
      nodes: {
        color: {
          border: '#174787',
          background: '#0a0742',
          highlight: {
            border: '#2B7CE9',
            background: '#130c8a',
          },
          hover: {
            border: '#2B7CE9',
            background: '#130c8a',
          }
        },
        font: {
          mono: {
            face: 'monaco,Consolas,Lucida Console,monospace',
          },
          color: '#E4E6EB',
          strokeWidth: 0,
        },
      },
      edges: {
        color: {
          color: '#174787',
          highlight: '#2B7CE9',
          hover: '#2B7CE9',
          inherit: 'from',
          opacity: 1.0,
        },
        font: {
          mono: {
            face: 'monaco,Consolas,Lucida Console,monospace',
          },
          color: '#E4E6EB',
          strokeWidth: 0,
        },
      },
      interaction: {
        hover: true,
        selectConnectedEdges: false,
        multiselect: false,
      }
    };

    // Configure events
    //----- START code copied from importingFromGephi -----//
    const updateState = (nodes, edges) => {
      if ((nodes === undefined || nodes.length === 0) && (edges === undefined || edges.length === 0)) {
        this.setState({info: ''});
      }
      else {
        if (nodes !== undefined && nodes.length > 0) {
          this.setState({info: JSON.stringify(nodeLookup[nodes[0]], null, 2)});
        }
        else if (edges !== undefined && edges.length > 0) {
          this.setState({info: JSON.stringify(edgeLookup[edges[0]], null, 2)});
        }
      }
    };
    //----- END code copied from importingFromGephi -----//
    //----- START code copied from cursorChange -----//
    const updateCursor = (cursorStyle) => {
      document.getElementById(this.state.graphId).getElementsByTagName('canvas')[0].style.cursor = cursorStyle;
    };
    const events = {
      select: (e) => {
        const { nodes, edges } = e;
        updateState(nodes, edges);
      },
      hoverNode: () => {
        updateCursor('grab');
      },
      blurNode: () => {
        updateCursor('grab');
      },
      hoverEdge: () => {
        updateCursor('grab');
      },
      blurEdge: () => {
        updateCursor('grab');
      },
      dragStart: () => {
        updateCursor('grabbing');
      },
      dragging: () => {
        updateCursor('grabbing');
      },
      dragEnd: () => {
        updateCursor('grab');
      },
    };
    //----- END code copied from cursorChange -----//

    return(
      <>
        <div className='split col2'>
          <div id={this.state.graphId}>
            <VisReact graph={data} options={options} events={events} />
          </div>
        </div>
        <div className='split col3'>
          <textarea readOnly
            className='graph-info'
            placeholder='Information will appear here after a graph element is clicked.'
            value={this.state.info}></textarea>
        </div>
      </>
    );
  }
}

module.exports = Graph
