package com.naofi.chordman.controller;

import com.naofi.chordman.dto.CommentDto;
import com.naofi.chordman.entity.Chords;
import com.naofi.chordman.entity.Comment;
import com.naofi.chordman.entity.User;
import com.naofi.chordman.repo.ChordsRepository;
import com.naofi.chordman.repo.CommentRepository;
import com.naofi.chordman.utils.AppUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ChordsRepository chordsRepository;

    @Autowired
    EntityManager em;

    @GetMapping("/all")
    public List<CommentDto> getAllComments() {
        return em.createQuery("select comment from Comment comment join fetch comment.user", Comment.class)
                .getResultList()
                .stream()
                .map(comment -> {
                    CommentDto commentDto = new CommentDto();
                    BeanUtils.copyProperties(comment, commentDto);
                    commentDto.setUsername(comment.getUser().getUsername());
                    return commentDto;
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/{chordsId}")
    public List<CommentDto> getCommentsByChordsId(@PathVariable Long chordsId) {
        return commentRepository.findByChordsId(chordsId).stream()
                .map(AppUtils::<Comment, CommentDto>toDto)
                .collect(Collectors.toList());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<CommentDto> deleteCommentById(@PathVariable Long id, @AuthenticationPrincipal User user) {
        List<Comment> comments = em.createQuery("select c from Comment c join fetch c.user where c.id=:id", Comment.class)
                .setParameter("id", id)
                .getResultList();
        if (comments.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Comment comment = comments.get(0);
        if (comment.getUser().getEmail().equals(user.getEmail())) {
            commentRepository.deleteById(id);
            return ResponseEntity.ok(AppUtils.toDto(comment));
        }
        return ResponseEntity.ok(null);
    }

    @PostMapping("/new/{chordsId}")
    public ResponseEntity<CommentDto> postNewComment(CommentDto commentDto, @PathVariable Long chordsId,
                                                     @AuthenticationPrincipal User user) {
        commentDto.setPostDate(new Date());
        Comment comment = new Comment();
        BeanUtils.copyProperties(commentDto, comment);
        comment.setUser(user);
        Optional<Chords> chords = chordsRepository.findById(chordsId);
        if (chords.isPresent()) {
            comment.setChords(chords.get());
        } else {
            return ResponseEntity.notFound().build();
        }
        commentRepository.save(comment);
        return ResponseEntity.ok(commentDto);
    }
}
