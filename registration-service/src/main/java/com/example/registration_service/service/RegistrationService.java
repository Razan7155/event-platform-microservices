package com.example.registration_service.service;

import com.example.registration_service.client.EventClient;
import com.example.registration_service.client.UserClient;
import com.example.registration_service.dto.RegistrationDTO;
import com.example.registration_service.dto.UserDTO;
import com.example.registration_service.exception.ResourceNotFoundException;
import com.example.registration_service.model.Registration;
import com.example.registration_service.repository.RegistrationRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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

    public Registration register(String email, Long eventId) {

    UserDTO user = userClient.getUserByEmail(email);

    if (user == null) {
        throw new ResourceNotFoundException("User not found");
    }

    eventClient.getEventById(eventId);

    if (alreadyRegistered(user.getId(), eventId)) {
        throw new RuntimeException("Already registered");
    }

    Registration r = new Registration();
    r.setUserId(user.getId());
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
    public Registration update(
        Long id,
        RegistrationDTO dto) {

    Registration registration =
            repo.findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException(
                            "Registration not found"));

    registration.setEventId(dto.getEventId());

    return repo.save(registration);
}

    public void delete(Long id) {

        Registration registration =
            repo.findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException(
                            "Registration not found"));

        repo.delete(registration);
    }
    public Registration createForUser(String email, Long eventId) {
    return register(email, eventId);
    }
    
    
}