package com.naofi.chordman.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ChordsDto {
    private long id;
    private String author;
    private String title;
    private String text;
    private Date publicationDate;
    private String userId;
}
