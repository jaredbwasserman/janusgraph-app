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
    // Info display logic based on https://github.com/visjs/vis-network/blob/master/examples/network/data/importingFromGephi.html
    // Cursor update logic based on https://github.com/visjs/vis-network/blob/master/examples/network/other/cursorChange.html
    const updateState = (nodes, edges) => {
      if ((nodes === undefined || nodes.length == 0) && (edges === undefined || edges.length == 0)) {
        this.setState({info: ''});
      }
      else {
        // TODO: Remove
        console.log(nodes[0]);

        this.setState({info: JSON.stringify({nodes: nodes,edges: edges}, null, 2)});
      }
    };
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
