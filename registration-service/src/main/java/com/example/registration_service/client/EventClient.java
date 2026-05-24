package com.example.registration_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(
    name = "event-service",
    configuration = com.example.registration_service.config.FeignConfig.class
)
public interface EventClient {

    @GetMapping("/events/{id}")
    Object getEventById(@PathVariable("id") Long id);
}