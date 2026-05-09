package com.example.user_service.service;
import com.example.user_service.model.User;
import com.example.user_service.repository.UserRepository;
import com.example.user_service.dto.UserRequestDTO;
import com.example.user_service.dto.UserResponseDTO;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;



@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    // =========================
    // TEST CREATE USER
    // =========================
    @Test
    void testCreateUser() {

        UserRequestDTO dto = new UserRequestDTO();
        dto.setName("Hafsa");
        dto.setEmail("hafsa@gmail.com");
        dto.setPassword("1234");

        when(passwordEncoder.encode("1234")).thenReturn("encoded1234");

        User savedUser = new User();
        savedUser.setId(1L);
        savedUser.setName("Hafsa");
        savedUser.setEmail("hafsa@gmail.com");
        savedUser.setPassword("encoded1234");

        when(userRepository.save(any(User.class)))
                .thenReturn(savedUser);

        UserResponseDTO result = userService.create(dto);

        assertEquals("Hafsa", result.getName());
        assertEquals("hafsa@gmail.com", result.getEmail());
    }

    // =========================
    // TEST GET BY ID
    // =========================
    @Test
    void testGetById() {

        User user = new User();
        user.setId(1L);
        user.setName("Hafsa");
        user.setEmail("hafsa@gmail.com");

        when(userRepository.findById(1L))
                .thenReturn(Optional.of(user));

        UserResponseDTO result = userService.getById(1L);

        assertEquals("Hafsa", result.getName());
    }

    // =========================
    // TEST DELETE
    // =========================
    @Test
    void testDeleteUser() {

        when(userRepository.existsById(1L))
                .thenReturn(true);

        userService.delete(1L);

        verify(userRepository, times(1))
                .deleteById(1L);
    }
}