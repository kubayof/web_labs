package com.naofi.chordman.controller;

import com.naofi.chordman.dto.UserDto;
import com.naofi.chordman.entity.User;
import com.naofi.chordman.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


@Controller
public class RegistrationController {
    @Autowired
    private UserService userService;

    @PostMapping(value = "/signUp", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public RedirectView signUp(UserDto userDto, @RequestParam("user_birth") String userBirth) throws ParseException {
        userDto.setGender(userDto.getGender().equals("1") ? "male" : "female");
        Date birthDate = new SimpleDateFormat("yyyy-MM-dd").parse(userBirth);
        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        user.setBirthDate(birthDate);
        if (userService.saveUser(user)) {
            return new RedirectView("/?message=Now you can sign in");
        }
        return new RedirectView("/?message=User with specified email already exists");
    }

    @GetMapping("/isAuthorized")
    @ResponseBody
    public ResponseEntity<Boolean> isAuthorized(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user != null);
    }

    @GetMapping("/authenticationPrincipal")
    @ResponseBody
    public ResponseEntity<UserDto> getCurrentUser(@AuthenticationPrincipal User user) {
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(user, userDto);
        return ResponseEntity.ok(userDto);
    }
}
