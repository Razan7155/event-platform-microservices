package com.example.registration_service.config;

import feign.RequestInterceptor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;

@Configuration
public class FeignConfig {

    @Bean
    public RequestInterceptor requestInterceptor() {

    System.out.println("FEIGN CONFIG LOADED");

    return requestTemplate -> {

        System.out.println("INTERCEPTOR EXECUTED");

        // Authentication auth =
        //     SecurityContextHolder
        //         .getContext()
        //         .getAuthentication();

        // System.out.println("AUTH = " + auth);

        // if (auth != null) {

        //     String token =
        //         auth.getCredentials().toString();

        //     System.out.println("TOKEN SENT = " + token);

        //     requestTemplate.header(
        //         "Authorization",
        //         "Bearer " + token
        //     );
        // }
    };
}
}
