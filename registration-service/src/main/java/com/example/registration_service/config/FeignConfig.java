package com.example.registration_service.config;

import feign.RequestInterceptor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.core.context.SecurityContextHolder;

@Configuration
public class FeignConfig {

    @Bean
    public RequestInterceptor requestInterceptor() {

        return requestTemplate -> {

            Object credentials =
                    SecurityContextHolder
                            .getContext()
                            .getAuthentication()
                            .getCredentials();

            if (credentials != null) {

                String token = credentials.toString();

                requestTemplate.header(
                        "Authorization",
                        "Bearer " + token
                );

                System.out.println("TOKEN FORWARDED = " + token);
            }
        };
    }
}