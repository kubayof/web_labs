package com.naofi.chordman.dto;

import lombok.Data;

import java.util.Date;

@Data
public class UserDto {
    private String email;
    private String name;
    private String gender;
    private String password;
    private Date birthDate;
}
