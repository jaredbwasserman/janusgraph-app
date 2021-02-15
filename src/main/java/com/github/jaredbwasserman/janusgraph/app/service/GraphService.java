// Modified from https://github.com/pluradj/janusgraph-java-example/blob/master/src/main/java/pluradj/janusgraph/example/JavaExample.java

package com.github.jaredbwasserman.janusgraph.app.service;

import com.github.jaredbwasserman.janusgraph.app.util.GraphUtil;
import org.apache.tinkerpop.gremlin.groovy.engine.GremlinExecutor;
import org.apache.tinkerpop.gremlin.jsr223.ConcurrentBindings;
import org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversalSource;
import org.apache.tinkerpop.gremlin.process.traversal.strategy.verification.ReadOnlyStrategy;
import org.apache.tinkerpop.gremlin.structure.io.IoCore;
import org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONMapper;
import org.apache.tinkerpop.gremlin.structure.io.graphson.GraphSONVersion;
import org.apache.tinkerpop.shaded.jackson.databind.ObjectMapper;
import org.janusgraph.core.JanusGraph;
import org.janusgraph.core.JanusGraphFactory;
import org.janusgraph.example.GraphOfTheGodsFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.concurrent.CompletableFuture;

// TODO: Add tests and logging

@Service
public class GraphService {
    private final Logger logger = LoggerFactory.getLogger(GraphService.class);

    private final JanusGraph graph;
    private final GraphTraversalSource g;
    private final GremlinExecutor ge;
    private final ObjectMapper mapper;

    // TODO: Make functions that load data instead of hard-coded single db
    // TODO: The different graphs should have different directories so can swap between graphs
    // TODO: Probably need to have traversal returned from loading functions so query can use them
    // TODO: Which graph to use would need to be passed in
    // TODO: Graph and traversal need to not be instance variables anymore
    public GraphService() {
        graph = JanusGraphFactory.open("conf/janusgraph-berkeleyje-lucene.properties");
        g = graph.traversal().withStrategies(ReadOnlyStrategy.instance());
        if (g.V().count().next() == 0) {
            // load the schema and graph data
            GraphOfTheGodsFactory.load(graph);
            logger.info("Loaded GraphOfTheGodsFactory");
        }

        // Prepare executor for queries
        ConcurrentBindings b = new ConcurrentBindings();
        b.putIfAbsent("g", g);
        ge = GremlinExecutor.build().scriptEvaluationTimeout(15000L).globalBindings(b).create();

        // Prepare mapper to format query output
        mapper = GraphSONMapper.build().version(GraphSONVersion.V1_0).create().createMapper();
    }

    public String getGraph() {
        try {
            ByteArrayOutputStream byteStream = new ByteArrayOutputStream();
            graph.io(IoCore.graphml()).writer().create().writeGraph(byteStream, graph);
            return GraphUtil.graphMLToJSON(byteStream.toByteArray());
        } catch (Exception e) {
            e.printStackTrace(); // TODO: Log
            return "";
        }
    }

    public String query(String queryString) {
        CompletableFuture<Object> evalResult = ge.eval(queryString);

        try {
            Object result = evalResult.get();
            if (result == null) {
                return "";
            }
            return mapper.writeValueAsString(result);
        } catch (Exception e) {
            e.printStackTrace(); // TODO: Log
            return e.getMessage();
        }
    }
}
