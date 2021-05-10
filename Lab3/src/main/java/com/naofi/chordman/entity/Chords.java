package com.naofi.chordman.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "chords")
@Data
public class Chords {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    private String author;
    private String title;
    @Column(columnDefinition = "text")
    private String text;
    private Date publicationDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "chords", fetch = FetchType.LAZY)
    private Set<Comment> comments;
}
