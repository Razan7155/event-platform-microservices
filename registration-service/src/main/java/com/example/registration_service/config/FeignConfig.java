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

    return requestTemplate -> {

        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();

        if (auth != null && auth.getDetails() != null) {

            String token = auth.getDetails().toString();

            requestTemplate.header("Authorization", "Bearer " + token);

            System.out.println("TOKEN FORWARDED = " + token);
        }
    };
}
}