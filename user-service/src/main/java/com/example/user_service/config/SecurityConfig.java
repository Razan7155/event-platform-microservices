package com.example.user_service.config;

import com.example.user_service.jwt.JwtAuthFilter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.http.HttpMethod;

@Configuration
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http

            // Disable CSRF
            .csrf(csrf -> csrf.disable())

            // Stateless JWT
            .sessionManagement(session ->
                    session.sessionCreationPolicy(
                            SessionCreationPolicy.STATELESS))

            // Authorization
            .authorizeHttpRequests(auth -> auth

                    .requestMatchers(
                "/auth/**",
                        "/v3/api-docs/**",
                        "/swagger-ui/**",
                        "/swagger-ui.html",
                        "/h2-console/**"
                    ).permitAll()

                     .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                    // ADMIN ONLY
                    .requestMatchers(
                         HttpMethod.POST,
                "/events/**"
                    )
                    .hasRole("ADMIN")

                    .requestMatchers(
                         HttpMethod.PUT,
                "/events/**"
                    )
                    .hasRole("ADMIN")

                    .requestMatchers(
                        HttpMethod.DELETE,
                "/events/**"
                    )
                    .hasRole("ADMIN")

                    // REGISTRATION USER/ADMIN
                    .requestMatchers(
                "/registrations/**"
                    )
                    .hasAnyRole("USER", "ADMIN")
                    .requestMatchers(
                      HttpMethod.GET,
         "/users/email/**"
                    )
                    .hasAnyRole("USER", "ADMIN")
                    // USERS ADMIN ONLY
                    .requestMatchers(
                "/users/**"
                   )
                    .hasRole("ADMIN")
                    .anyRequest().authenticated()
                   
            )

            // JWT FILTER
            .addFilterBefore(
                    jwtAuthFilter,
                    UsernamePasswordAuthenticationFilter.class
            )

            .httpBasic(Customizer.withDefaults());

        // H2 Console
        http.headers(headers ->
                headers.frameOptions(frame -> frame.disable()));

        return http.build();
    }
}