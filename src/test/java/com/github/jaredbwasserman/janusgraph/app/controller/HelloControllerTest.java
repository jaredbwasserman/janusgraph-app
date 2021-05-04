/*
File copied from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/test/java/com/example/testingweb/WebMockTest.java
File copied on 2021-01-24.
Copy of full license is located at licenses/gs-testing-web/LICENSE.

Modifications:
"HelloService" was used instead of "GreetingService".
"Hello, Mock" was changed to "Hello, mock!".
The package definition was changed.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app.controller;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.github.jaredbwasserman.janusgraph.app.service.HelloService;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(HelloController.class)
public class HelloControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private HelloService helloService;

    @Test
    public void helloShouldReturnMessageFromService() throws Exception {
        when(helloService.hello()).thenReturn("Hello, mock!");
        this.mockMvc.perform(get("/api/hello")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("Hello, mock!")));
    }
}
