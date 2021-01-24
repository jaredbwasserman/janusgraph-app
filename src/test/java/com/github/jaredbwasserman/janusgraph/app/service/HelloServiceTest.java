package com.github.jaredbwasserman.janusgraph.app.service;

import org.junit.jupiter.api.Test;

public class HelloServiceTest {

    private final HelloService helloService = new HelloService();

    @Test
    public void helloShouldReturnHelloWorld() throws Exception {
        String helloResult = helloService.hello();
        assert (helloResult.equals("Hello, world!"));
    }
}
