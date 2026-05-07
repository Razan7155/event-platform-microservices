package com.example.registration_service.service;

import com.example.registrationservice.client.EventClient;
import com.example.registrationservice.client.UserClient;
import com.example.registrationservice.model.Registration;
import com.example.registrationservice.repository.RegistrationRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    private final RegistrationRepository repo;
    private final UserClient userClient;
    private final EventClient eventClient;

    public RegistrationService(RegistrationRepository repo,
                               UserClient userClient,
                               EventClient eventClient) {

        this.repo = repo;
        this.userClient = userClient;
        this.eventClient = eventClient;
    }

    public Registration register(Long userId, Long eventId) {

        // VERIFY USER
        userClient.getUserById(userId);

        // VERIFY EVENT
        eventClient.getEventById(eventId);

        Registration r = new Registration();

        r.setUserId(userId);
        r.setEventId(eventId);

        return repo.save(r);
    }

    public List<Registration> getAll() {
        return repo.findAll();
    }
}
