package com.example.event_service.controller;

import com.example.event_service.dto.EventDTO;
import com.example.event_service.model.Event;
import com.example.event_service.service.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService service;

    public EventController(EventService service) {
        this.service = service;
    }

    @PostMapping
    public Event create(@RequestBody EventDTO dto) {
        Event e = new Event();
        e.setTitle(dto.title);
        e.setLocation(dto.location);
        return service.create(e);
    }

    @GetMapping
    public List<Event> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Event getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
