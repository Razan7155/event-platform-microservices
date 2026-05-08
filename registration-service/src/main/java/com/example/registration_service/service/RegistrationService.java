package com.example.registrationservice.service;

import com.example.registrationservice.model.Registration;
import com.example.registrationservice.repository.RegistrationRepository;
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

    public Registration register(Long userId, Long eventId) {

        restTemplate.getForObject("http://localhost:8081/users/" + userId, Object.class);
        restTemplate.getForObject("http://localhost:8082/events/" + eventId, Object.class);

        Registration r = new Registration();
        r.setUserId(userId);
        r.setEventId(eventId);

        return repo.save(r);
    }

    public List<Registration> getAll() {
        return repo.findAll();
    }
}
