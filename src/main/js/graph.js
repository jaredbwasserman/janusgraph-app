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
    });
    parsed.edges.forEach(edge => {
      // Remove color
      delete edge.color;
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
          border: '#2B7CE9',
          background: '#97C2FC',
          highlight: {
            border: '#2B7CE9',
            background: '#D2E5FF',
          },
          hover: {
            border: '#2B7CE9',
            background: '#D2E5FF',
          }
        }
      },
      edges: {
        color: {
          color: '#848484',
          highlight: '#848484',
          hover: '#848484',
          inherit: 'from',
          opacity: 1.0,
        }
      },
      interaction: {
        hover: true,
      }
    };

    // Configure events
    //----- START code copied from importingFromGephi -----//
    const updateState = (nodes, edges) => {
      if ((nodes === undefined || nodes.length == 0) && (edges === undefined || edges.length == 0)) {
        this.setState({info: ''});
      }
      else {
        const nodeInfo = [];
        nodes.forEach((nodeId) => {
          nodeInfo.push(nodeLookup[nodeId]);
        });
        const edgeInfo = [];
        edges.forEach((edgeId) => {
          edgeInfo.push(edgeLookup[edgeId]);
        });

        this.setState({info: JSON.stringify({nodes: nodeInfo,edges: edgeInfo}, null, 2)});
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
          <div className='centered'>
            <div id={this.state.graphId}>
              <VisReact graph={data} options={options} events={events} />
            </div>
          </div>
        </div>
        <div className='split col3'>
          <div className='centered'>
            <textarea readOnly
              className='graph-info'
              placeholder='Information will appear here after a graph element is clicked.'
              value={this.state.info}></textarea>
          </div>
        </div>
      </>
    );
  }
}

module.exports = Graph
