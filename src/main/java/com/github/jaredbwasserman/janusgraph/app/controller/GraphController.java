/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app.controller;

import com.github.jaredbwasserman.janusgraph.app.model.GraphResult;
import com.github.jaredbwasserman.janusgraph.app.model.QueryRequest;
import com.github.jaredbwasserman.janusgraph.app.model.QueryResult;
import com.github.jaredbwasserman.janusgraph.app.service.GraphService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GraphController {
    private final GraphService graphService;

    public GraphController(GraphService graphService) {
        this.graphService = graphService;
    }

    @RequestMapping(value = "/api/graph", method = RequestMethod.GET)
    public ResponseEntity<GraphResult> getGraph() {
        return ResponseEntity.ok(new GraphResult(graphService.getGraph()));
    }

    @RequestMapping(value = "/api/query", method = RequestMethod.POST)
    public ResponseEntity<QueryResult> query(@RequestBody QueryRequest queryRequest) {
        return ResponseEntity.ok(new QueryResult(graphService.query(queryRequest.queryString)));
    }
}
