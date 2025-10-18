package com.example.onlineplatform.service;

import com.example.onlineplatform.model.User;
import com.example.onlineplatform.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AdminService {
    private final UserRepository userRepository;

    public AdminService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
