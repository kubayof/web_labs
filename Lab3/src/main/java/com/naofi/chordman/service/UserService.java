package com.naofi.chordman.service;

import com.naofi.chordman.entity.User;
import com.naofi.chordman.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    PasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return Optional.ofNullable(userRepository.findByEmail(email))
                .orElseThrow(() -> new UsernameNotFoundException("User with email '" + email + "' not found"));
    }

    public boolean saveUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        if (!userRepository.findById(user.getEmail()).isPresent()) {
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

}
