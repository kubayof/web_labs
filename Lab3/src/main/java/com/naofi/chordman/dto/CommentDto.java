package com.naofi.chordman.dto;

import lombok.Data;

import java.util.Date;

@Data
public class CommentDto {
    private long id;
    private String text;
    private Date postDate;
    private String username;
}
