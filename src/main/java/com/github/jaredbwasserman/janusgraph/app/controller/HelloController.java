/*
File copied from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/main/java/com/example/testingweb/GreetingController.java
File copied on 2021-01-24.
Copy of full license is located at licenses/gs-testing-web/LICENSE.

Modifications:
References to "greeting" and "greet" have been renamed to "hello".
The request and response implementations were modified.
The package definition was changed.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app.controller;

import com.github.jaredbwasserman.janusgraph.app.model.HelloResult;
import com.github.jaredbwasserman.janusgraph.app.service.HelloService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    private final HelloService helloService;

    public HelloController(HelloService helloService) {
        this.helloService = helloService;
    }

    @RequestMapping(value = "/api/hello", method = RequestMethod.GET)
    public ResponseEntity<HelloResult> helloWorld() {
        return ResponseEntity.ok(new HelloResult(helloService.hello()));
    }
}
