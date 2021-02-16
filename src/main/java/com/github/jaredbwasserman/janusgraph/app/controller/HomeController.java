/*
File copied from https://github.com/spring-guides/tut-react-and-spring-data-rest/blob/master/basic/src/main/java/com/greglturnquist/payroll/HomeController.java
File copied on 2021-02-06.
Copy of full license is located at licenses/tut-react-and-spring-data-rest/LICENSE.

Modifications:
RequestMethod GET was added to the RequestMapping.
The original author field was removed (original author Greg Turnquist).
The package definition was changed.
 */

/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "index";
    }
}
