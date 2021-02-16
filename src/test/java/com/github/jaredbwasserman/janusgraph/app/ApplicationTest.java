/*
File copied from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/test/java/com/example/testingweb/HttpRequestTest.java
File copied on 2021-01-24.
Copy of full license is located at licenses/gs-testing-web/LICENSE.

Modifications:
The endpoint was changed to "/api/hello".
"Hello, World" was changed to "Hello, world!".
The test name was changed.
The package definition was changed.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class ApplicationTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void helloShouldReturnMessage() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/api/hello",
                String.class)).contains("Hello, world!");
    }
}
