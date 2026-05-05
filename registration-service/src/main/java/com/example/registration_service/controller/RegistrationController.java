package com.example.registration_service.controller;


import com.example.registration_service.model.Registration;
import com.example.registration_service.service.RegistrationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registrations")
public class RegistrationController {

    private final RegistrationService service;

    public RegistrationController(RegistrationService service) {
        this.service = service;
    }

    @PostMapping
    public Registration register(@RequestParam Long userId,
                                 @RequestParam Long eventId) {
        return service.register(userId, eventId);
    }

    @GetMapping
    public List<Registration> getAll() {
        return service.getAll();
    }
}