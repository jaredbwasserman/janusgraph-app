'use strict';

const Vis = require('vis-network/standalone')
const React = require('react');
const ReactDOM = require('react-dom');

// TODO: Add node content in and make it look like https://visjs.github.io/vis-network/examples/network/data/importingFromGephi.html
// TODO: See https://github.com/visjs/vis-network/blob/master/examples/network/data/importingFromGephi.html

class Graph extends React.Component {
  render() {
    // Create an array with nodes
    const nodes = new Vis.DataSet();

    // Create an array with edges
    const edges = new Vis.DataSet();


    // TODO: Remove
    console.log('hey')
    console.log(this.props)
    console.log(this.props.graph)


    // TODO: Add some options?
    // TODO: Make this use parameter not hard-coded
//    const parsed = Vis.parseGephiNetwork(JSON.parse(this.props.graph), {});
    const parsed = Vis.parseGephiNetwork(JSON.parse("{\"nodes\":[{\"label\":\"12328\",\"x\":-433.24365234375,\"y\":74.62841796875,\"id\":\"12328\",\"attributes\":{\"labelV\":\"location\",\"name\":\"tartarus\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"12496\",\"x\":44.76390075683594,\"y\":111.12054443359375,\"id\":\"12496\",\"attributes\":{\"labelV\":\"monster\",\"name\":\"hydra\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"12344\",\"x\":-267.91619873046875,\"y\":190.69561767578125,\"id\":\"12344\",\"attributes\":{\"labelV\":\"human\",\"name\":\"alcmene\",\"age\":\"45\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"4304\",\"x\":-168.53575134277344,\"y\":-479.8660583496094,\"id\":\"4304\",\"attributes\":{\"labelV\":\"god\",\"name\":\"neptune\",\"age\":\"4500\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"8232\",\"x\":31.306961059570312,\"y\":61.1588134765625,\"id\":\"8232\",\"attributes\":{\"labelV\":\"demigod\",\"name\":\"hercules\",\"age\":\"30\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"8400\",\"x\":258.04290771484375,\"y\":-375.625244140625,\"id\":\"8400\",\"attributes\":{\"labelV\":\"god\",\"name\":\"pluto\",\"age\":\"4000\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"8248\",\"x\":-158.22853088378906,\"y\":-319.02337646484375,\"id\":\"8248\",\"attributes\":{\"labelV\":\"god\",\"name\":\"jupiter\",\"age\":\"5000\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"4216\",\"x\":304.5936279296875,\"y\":481.55084228515625,\"id\":\"4216\",\"attributes\":{\"labelV\":\"titan\",\"name\":\"saturn\",\"age\":\"10000\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"4152\",\"x\":131.7163543701172,\"y\":-433.1604309082031,\"id\":\"4152\",\"attributes\":{\"labelV\":\"location\",\"name\":\"sky\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"4136\",\"x\":145.3367156982422,\"y\":-12.7685546875,\"id\":\"4136\",\"attributes\":{\"labelV\":\"location\",\"name\":\"sea\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"4344\",\"x\":299.26849365234375,\"y\":463.062255859375,\"id\":\"4344\",\"attributes\":{\"labelV\":\"monster\",\"name\":\"nemean\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0},{\"label\":\"8440\",\"x\":-187.1047821044922,\"y\":238.2271728515625,\"id\":\"8440\",\"attributes\":{\"labelV\":\"monster\",\"name\":\"cerberus\"},\"color\":\"rgb(0,0,0)\",\"size\":10.0}],\"edges\":[{\"source\":\"8440\",\"target\":\"12328\",\"id\":\"2sf-6ig-b2t-9ig\",\"attributes\":{\"labelE\":\"lives\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8400\",\"target\":\"8248\",\"id\":\"5y2-6hc-cnp-6d4\",\"attributes\":{\"labelE\":\"brother\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"4304\",\"target\":\"8248\",\"id\":\"55m-3bk-cnp-6d4\",\"attributes\":{\"labelE\":\"brother\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8232\",\"target\":\"12344\",\"id\":\"4qt-6co-8ph-9iw\",\"attributes\":{\"labelE\":\"mother\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8248\",\"target\":\"4216\",\"id\":\"4qv-6d4-7x1-394\",\"attributes\":{\"labelE\":\"father\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8232\",\"target\":\"8248\",\"id\":\"4cl-6co-7x1-6d4\",\"attributes\":{\"labelE\":\"father\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8248\",\"target\":\"4152\",\"id\":\"553-6d4-b2t-37c\",\"attributes\":{\"reason\":\"loves fresh breezes\",\"labelE\":\"lives\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8400\",\"target\":\"4304\",\"id\":\"6ca-6hc-cnp-3bk\",\"attributes\":{\"labelE\":\"brother\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8232\",\"target\":\"8440\",\"id\":\"5xh-6co-9hx-6ig\",\"attributes\":{\"labelE\":\"battled\",\"place\":\"POINT (22 39)\",\"time\":\"12\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8248\",\"target\":\"4304\",\"id\":\"5jb-6d4-cnp-3bk\",\"attributes\":{\"labelE\":\"brother\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8400\",\"target\":\"8440\",\"id\":\"74q-6hc-bv9-6ig\",\"attributes\":{\"labelE\":\"pet\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8248\",\"target\":\"8400\",\"id\":\"5xj-6d4-cnp-6hc\",\"attributes\":{\"labelE\":\"brother\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8400\",\"target\":\"12328\",\"id\":\"6qi-6hc-b2t-9ig\",\"attributes\":{\"reason\":\"no fear of death\",\"labelE\":\"lives\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8232\",\"target\":\"4344\",\"id\":\"551-6co-9hx-3co\",\"attributes\":{\"labelE\":\"battled\",\"place\":\"POINT (23.700001 38.099998)\",\"time\":\"1\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"8232\",\"target\":\"12496\",\"id\":\"5j9-6co-9hx-9n4\",\"attributes\":{\"labelE\":\"battled\",\"place\":\"POINT (23.9 37.700001)\",\"time\":\"2\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"4304\",\"target\":\"4136\",\"id\":\"4re-3bk-b2t-36w\",\"attributes\":{\"reason\":\"loves waves\",\"labelE\":\"lives\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0},{\"source\":\"4304\",\"target\":\"8400\",\"id\":\"5ju-3bk-cnp-6hc\",\"attributes\":{\"labelE\":\"brother\"},\"color\":\"rgb(0,0,0)\",\"size\":1.0}]}"), {});


    // TODO: Remove
    console.log('hey 2')


    // Add the parsed data to the DataSets
    nodes.add(parsed.nodes);
    edges.add(parsed.edges);

    // Create a network
    const container = document.getElementById("graph");
    const data = {
      nodes: nodes,
      edges: edges,
    };
    const options = {};
    const network = new Vis.Network(container, data, options);
    network.fit();

    return (null);
  }
}

module.exports = Graph
