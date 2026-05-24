package com.example.event_service.config;

import com.example.event_service.jwt.JwtAuthFilter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.http.HttpMethod;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    private static final String EVENTS =
            "/events/**";

    private static final String ADMIN =
            "ADMIN";

    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(
            JwtAuthFilter jwtAuthFilter
    ) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http
    ) throws Exception {

        http

            .csrf(csrf -> csrf.disable())

            .sessionManagement(session ->
                    session.sessionCreationPolicy(
                            SessionCreationPolicy.STATELESS
                    )
            )

            .authorizeHttpRequests(auth -> auth

                .requestMatchers(
          "/auth/**",
                       "/v3/api-docs/**",
                       "/swagger-ui/**",
                       "/swagger-ui.html",
                       "/h2-console/**"
                ).permitAll()

                // EVENTS GET PUBLIC
                .requestMatchers(
                   HttpMethod.GET,
                   "/events/**"
                ).permitAll()

               // EVENTS ADMIN ONLY
                .requestMatchers(
                   HttpMethod.POST,
         "/events/**"
                ).hasRole("ADMIN")

                .requestMatchers(
                    HttpMethod.PUT,
          "/events/**"
                ).hasRole("ADMIN")

                .requestMatchers(
                     HttpMethod.DELETE,
                       "/events/**"
                ).hasRole("ADMIN")

                .anyRequest()
                .authenticated()
        )

            .addFilterBefore(
                    jwtAuthFilter,
                    UsernamePasswordAuthenticationFilter.class
            );

        return http.build();
    }
}
