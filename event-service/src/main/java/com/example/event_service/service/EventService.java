package com.example.event_service.service;


import com.example.event_service.model.Event;
import com.example.event_service.repository.EventRepository;
import org.springframework.stereotype.Service;

import com.example.event_service.dto.EventDTO;
import com.example.event_service.exception.ResourceNotFoundException;
import java.util.List;

@Service
public class EventService {

    private final EventRepository repo;

    public EventService(EventRepository repo) {
        this.repo = repo;
    }

    public Event create(EventDTO dto) {
        Event e = new Event();
        e.setTitle(dto.getTitle());
        e.setLocation(dto.getLocation());
        return repo.save(e);
    }

    public Event update(Long id, EventDTO dto) {
        Event existing = repo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Event not found with id " + id));

        existing.setTitle(dto.getTitle());
        existing.setLocation(dto.getLocation());

        return repo.save(existing);
    }
    public Event getById(Long id) {
        return repo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Event not found with id " + id));
    }
    public List<Event> getAll() {
        return repo.findAll();
    }

    public void delete(Long id) {
        if (!repo.existsById(id)) {
        throw new ResourceNotFoundException("Event not found with id " + id);
       }
      repo.deleteById(id);
    }

}