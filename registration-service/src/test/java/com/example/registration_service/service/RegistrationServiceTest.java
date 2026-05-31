package com.example.registration_service.service;
import com.example.registration_service.client.EventClient;
import com.example.registration_service.client.UserClient;
import com.example.registration_service.model.Registration;
import com.example.registration_service.repository.RegistrationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;  
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;



@ExtendWith(MockitoExtension.class)
class RegistrationServiceTest {

    @Mock
    private RegistrationRepository repo;

    @Mock
    private UserClient userClient;

    @Mock
    private EventClient eventClient;

    @InjectMocks
    private RegistrationService service;

    @Test
    void testRegister() {

        when(userClient.getUserById(1L))
                .thenReturn(new Object());

        when(eventClient.getEventById(1L))
                .thenReturn(new Object());

        Registration saved = new Registration();
        saved.setId(1L);
        saved.setUserId(1L);
        saved.setEventId(1L);

        when(repo.save(any(Registration.class)))
                .thenReturn(saved);

        Registration result = service.register(1L, 1L);

        assertEquals(1L, result.getUserId());
        assertEquals(1L, result.getEventId());
    }
}
