// Modified from https://github.com/spring-guides/gs-testing-web/blob/master/complete/src/main/java/com/example/testingweb/TestingWebApplication.java
// See APACHE_LICENSE_COPY_1

package com.github.jaredbwasserman.janusgraph.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
