package com.example.registration_service.service;

import com.example.registration_service.exception.ResourceNotFoundException;
import com.example.registration_service.model.Registration;
import com.example.registration_service.repository.RegistrationRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class RegistrationService {

    private final RegistrationRepository repo;
    private final RestTemplate restTemplate;

    public RegistrationService(RegistrationRepository repo, RestTemplate restTemplate) {
        this.repo = repo;
        this.restTemplate = restTemplate;
    }

    private void checkUserExists(Long userId) {
        try {
            restTemplate.getForObject(
                    "http://localhost:8081/users/" + userId,
                    Object.class
            );
        } catch (Exception e) {
            throw new ResourceNotFoundException("User not found with id: " + userId);
        }
    }

    private void checkEventExists(Long eventId) {
        try {
            restTemplate.getForObject(
                    "http://localhost:8082/events/" + eventId,
                    Object.class
            );
        } catch (Exception e) {
            throw new ResourceNotFoundException("Event not found with id: " + eventId);
        }
    }

    public Registration register(Long userId, Long eventId) {

        checkUserExists(userId);
        checkEventExists(eventId);

        if (alreadyRegistered(userId, eventId)) {
            throw new RuntimeException("User already registered for this event");
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
                .anyMatch(r -> r.getUserId().equals(userId)
                        && r.getEventId().equals(eventId));
    }
} 