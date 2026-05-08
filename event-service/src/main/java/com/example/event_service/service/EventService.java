package com.example.event_service.service;


import com.example.event_service.model.Event;
import com.example.event_service.repository.EventRepository;
import org.springframework.stereotype.Service;
import com.example.event_service.exception.ResourceNotFoundException;
import java.util.List;

@Service
public class EventService {

    private final EventRepository repo;

    public EventService(EventRepository repo) {
        this.repo = repo;
    }

    public Event create(Event e) {
        return repo.save(e);
    }

    public List<Event> getAll() {
        return repo.findAll();
    }

    public Event getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
    }
     
    public Event update(Long id, Event newEvent) {

    Event existingEvent = getById(id); // vérifie si existe

    existingEvent.setTitle(newEvent.getTitle());
    existingEvent.setLocation(newEvent.getLocation());

    return repo.save(existingEvent);
    }
    public void delete(Long id) {
        repo.deleteById(id);
    }
}