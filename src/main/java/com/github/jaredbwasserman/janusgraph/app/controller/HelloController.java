package com.github.jaredbwasserman.janusgraph.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.jaredbwasserman.janusgraph.app.service.HelloService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private final ObjectMapper mapper = new ObjectMapper();

    private final HelloService helloService;

    public HelloController(HelloService helloService) {
        this.helloService = helloService;
    }

    @RequestMapping("/hello")
    public ObjectNode helloWorld() {
        final ObjectNode objectNode = mapper.createObjectNode();
        objectNode.put("message", helloService.hello());
        return objectNode;
    }
}
