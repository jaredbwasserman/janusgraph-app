// Modified from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/main/java/com/example/testingweb/TestingWebApplication.java

package com.github.jaredbwasserman.janusgraph.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// TODO: Add logging everywhere
// TODO: Add export to CSV option

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
