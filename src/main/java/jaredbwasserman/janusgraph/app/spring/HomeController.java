package jaredbwasserman.janusgraph.app.spring;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @RequestMapping("/")
    public @ResponseBody
    String helloWorld() {
        return "Hello, world!\n";
    }

}
