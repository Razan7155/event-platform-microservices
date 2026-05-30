package com.example.registration_service.controller;

import com.example.registration_service.dto.RegistrationDTO;
import com.example.registration_service.model.Registration;
import com.example.registration_service.service.RegistrationService;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
@RestController
@RequestMapping("/registrations")
public class RegistrationController {

    private final RegistrationService service;

    public RegistrationController(
            RegistrationService service
    ) {
        this.service = service;
    }

    @PostMapping
    public Registration create(
        @RequestBody RegistrationDTO dto,
        Authentication authentication
    ) {

    String email = authentication.getName();

    return service.createForUser(
            email,
            dto.getEventId()
    );
}

    @GetMapping
    public List<Registration> getAll() {
        return service.getAll();
    }

    @GetMapping("/event/{eventId}")
    public List<Registration> getByEventId(
            @PathVariable Long eventId
    ) {
        return service.getByEventId(eventId);
    }

    @PutMapping("/{id}")
    public Registration update(
            @PathVariable Long id,
            @RequestBody RegistrationDTO dto
    ) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(
            @PathVariable Long id
    ) {
        service.delete(id);
    }
}