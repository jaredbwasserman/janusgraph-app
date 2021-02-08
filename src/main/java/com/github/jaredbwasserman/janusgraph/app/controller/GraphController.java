package com.github.jaredbwasserman.janusgraph.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.jaredbwasserman.janusgraph.app.service.GraphService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// TODO: Add tests
// TODO: Logging

@RestController
public class GraphController {
    private final ObjectMapper mapper = new ObjectMapper();
    private final GraphService graphService;

    public GraphController(GraphService graphService) {
        this.graphService = graphService;
    }

    // TODO: Make this a POST request?
    @RequestMapping("/api/query")
    public ObjectNode query() {
        final ObjectNode objectNode = mapper.createObjectNode();
        objectNode.put("result", graphService.query());
        return objectNode;
    }
}
