package com.example.registration_service.service;

import com.example.registration_service.client.EventClient;
import com.example.registration_service.client.UserClient;
import com.example.registration_service.exception.ResourceNotFoundException;
import com.example.registration_service.model.Registration;
import com.example.registration_service.repository.RegistrationRepository;

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

        try {
            userClient.getUserById(userId);
        } catch (Exception e) {
            throw new ResourceNotFoundException(
                    "User not found with id: " + userId);
        }

        try {
            eventClient.getEventById(eventId);
        } catch (Exception e) {
            throw new ResourceNotFoundException(
                    "Event not found with id: " + eventId);
        }

        if (alreadyRegistered(userId, eventId)) {
            throw new RuntimeException(
                    "User already registered for this event");
        }

        Registration r = new Registration();
        r.setUserId(userId);
        r.setEventId(eventId);

        return repo.save(r);
    }

    public List<Registration> getAll() {
        return repo.findAll();
    }

    public List<Registration> getByEventId(Long eventId) {
        return repo.findByEventId(eventId);
    }

    private boolean alreadyRegistered(Long userId, Long eventId) {
        return repo.findAll().stream()
                .anyMatch(r ->
                        r.getUserId().equals(userId)
                                && r.getEventId().equals(eventId));
    }
}