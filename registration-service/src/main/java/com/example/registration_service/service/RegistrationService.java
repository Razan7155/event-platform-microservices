package com.example.registration_service.service;

import com.example.registration_service.model.Registration;
import com.example.registration_service.repository.RegistrationRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class RegistrationService {

    private final RegistrationRepository repo;
    private final RestTemplate restTemplate = new RestTemplate();

    public RegistrationService(RegistrationRepository repo) {
        this.repo = repo;
    }

    
    private Object getUser(Long userId) {
        return restTemplate.getForObject(
                "http://localhost:8081/users/" + userId,
                Object.class
        );
    }

    private Object getEvent(Long eventId) {
        return restTemplate.getForObject(
                "http://localhost:8082/events/" + eventId,
                Object.class
        );
    }

    public Registration register(Long userId, Long eventId) {

        // vérifier user existe
        getUser(userId);

        // vérifier event existe
        getEvent(eventId);

        Registration r = new Registration();
        r.setUserId(userId);
        r.setEventId(eventId);

        return repo.save(r);
    }

    public List<Registration> getAll() {
        return repo.findAll();
    }

    public List<Registration> getByEventId(Long eventId) {
        return repo.findAll()
                .stream()
                .filter(r -> r.getEventId().equals(eventId))
                .toList();
    }
}

