/*
File copied from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/test/java/com/example/testingweb/SmokeTest.java
File copied on 2021-01-24.
Copy of full license is located at licenses/gs-testing-web/LICENSE.

Modifications:
Additional controllers were added and tested.
The package definition was changed.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app;

import static org.assertj.core.api.Assertions.assertThat;

import com.github.jaredbwasserman.janusgraph.app.controller.GraphController;
import com.github.jaredbwasserman.janusgraph.app.controller.HelloController;
import com.github.jaredbwasserman.janusgraph.app.controller.HomeController;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SmokeTest {

    @Autowired
    private HelloController helloController;

    @Autowired
    private HomeController homeController;

    @Autowired
    private GraphController graphController;

    @Test
    public void contextLoads() {
        assertThat(helloController).isNotNull();
        assertThat(homeController).isNotNull();
        assertThat(graphController).isNotNull();
    }
}
