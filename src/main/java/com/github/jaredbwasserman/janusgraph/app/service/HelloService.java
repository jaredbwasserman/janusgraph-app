/*
File copied from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/main/java/com/example/testingweb/GreetingService.java
File copied on 2021-01-24.
Copy of full license is located at licenses/gs-testing-web/LICENSE.

Modifications:
References to "greeting" and "greet" have been renamed to "hello".
The package definition was changed.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app.service;

import org.springframework.stereotype.Service;

@Service
public class HelloService {
    public String hello() {
        return "Hello, world!";
    }
}
