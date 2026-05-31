package com.example.event_service.service;
import com.example.event_service.dto.EventDTO;
import com.example.event_service.model.Event;
import com.example.event_service.repository.EventRepository;    
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;





@ExtendWith(MockitoExtension.class)
class EventServiceTest {

    @Mock
    private EventRepository eventRepository;

    @InjectMocks
    private EventService eventService;

    @Test
    void testCreateEvent() {

        EventDTO dto = new EventDTO();
        dto.setTitle("Spring Boot");
        dto.setLocation("Rabat");

        Event event = new Event();
        event.setId(1L);
        event.setTitle("Spring Boot");
        event.setLocation("Rabat");

        when(eventRepository.save(any(Event.class)))
                .thenReturn(event);

        Event result = eventService.create(dto);

        assertEquals("Spring Boot", result.getTitle());
    }

    @Test
    void testGetAllEvents() {

        List<Event> list = List.of(new Event());

        when(eventRepository.findAll())
                .thenReturn(list);

        List<Event> result = eventService.getAll();

        assertEquals(1, result.size());
    }
}
