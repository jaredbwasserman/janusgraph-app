// Modified from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/main/java/com/example/testingweb/GreetingService.java
// See APACHE_LICENSE_COPY_1

package com.github.jaredbwasserman.janusgraph.app.service;

import org.springframework.stereotype.Service;

@Service
public class HelloService {

    public String hello() {
        return "Hello, world!";
    }
}
