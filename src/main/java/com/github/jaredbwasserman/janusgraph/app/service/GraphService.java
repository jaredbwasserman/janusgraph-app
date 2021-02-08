// Modified from https://github.com/pluradj/janusgraph-java-example/blob/master/src/main/java/pluradj/janusgraph/example/JavaExample.java

package com.github.jaredbwasserman.janusgraph.app.service;

import com.github.jaredbwasserman.janusgraph.app.util.GraphUtil;
import org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversalSource;
import org.apache.tinkerpop.gremlin.structure.io.IoCore;
import org.janusgraph.core.JanusGraph;
import org.janusgraph.core.JanusGraphFactory;
import org.janusgraph.example.GraphOfTheGodsFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;

// TODO: Add tests

@Service
public class GraphService {
    private final Logger logger = LoggerFactory.getLogger(GraphService.class);

    private final JanusGraph graph;
    private final GraphTraversalSource g;

    public GraphService() {
        graph = JanusGraphFactory.open("conf/janusgraph-berkeleyje-lucene.properties");
        g = graph.traversal();
        if (g.V().count().next() == 0) {
            // load the schema and graph data
            GraphOfTheGodsFactory.load(graph);
            logger.info("Loaded GraphOfTheGodsFactory");
        }
    }

    // TODO: Fix
    // TODO: Needs to give query result not whole graph eventually
    public String query() {
        try {
            ByteArrayOutputStream byteStream = new ByteArrayOutputStream();
            graph.io(IoCore.graphml()).writer().create().writeGraph(byteStream, graph);
            return GraphUtil.graphMLToJSON(byteStream.toByteArray());
        }
        catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }
}
