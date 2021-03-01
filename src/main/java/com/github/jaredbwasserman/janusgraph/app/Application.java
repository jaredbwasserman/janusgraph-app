/*
File copied from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/main/java/com/example/testingweb/TestingWebApplication.java
File copied on 2021-01-17.
Copy of full license is located at licenses/gs-testing-web/LICENSE.

Modifications:
"TestingWebApplication" was renamed to "Application".
The package definition was changed.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
