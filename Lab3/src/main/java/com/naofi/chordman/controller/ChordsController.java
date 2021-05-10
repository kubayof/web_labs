package com.naofi.chordman.controller;

import com.naofi.chordman.dto.ChordsDto;
import com.naofi.chordman.entity.Chords;
import com.naofi.chordman.entity.User;
import com.naofi.chordman.repo.ChordsRepository;
import com.naofi.chordman.utils.AppUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/chords")
public class ChordsController {
    @Autowired
    ChordsRepository chordsRepository;

    @Autowired
    EntityManager em;

    @GetMapping("/all")
    public List<ChordsDto> getChords() {
        return em.createQuery("select c from Chords c join fetch c.user", Chords.class)
                .getResultStream()
                .map(chords -> {
                    ChordsDto chordsDto = new ChordsDto();
                    BeanUtils.copyProperties(chords, chordsDto);
                    chordsDto.setUserId(chords.getUser().getUsername());
                    return chordsDto;
                })
                .sorted(Comparator.comparing(ChordsDto::getPublicationDate).reversed())
                .collect(Collectors.toList());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ChordsDto> deleteChordsById(@PathVariable Long id, @AuthenticationPrincipal User user) {
        List<Chords> chordsList = em.createQuery("select c from Chords c join fetch c.user where c.id = :id", Chords.class)
                .setParameter("id", id)
                .getResultList();
        if (chordsList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        Chords chords = chordsList.get(0);
        if (chords.getUser().getEmail().equals(user.getEmail())) {
            chordsRepository.deleteById(id);
            return ResponseEntity.ok(AppUtils.toDto(chords));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }

    @PostMapping("/new")
    public ResponseEntity<ChordsDto> postNewChords(@RequestBody ChordsDto chordsDto, @AuthenticationPrincipal User user) {
        chordsDto.setPublicationDate(new Date());
        Chords chords = new Chords();
        BeanUtils.copyProperties(chordsDto, chords);
        chords.setUser(user);
        chordsRepository.save(chords);
        return ResponseEntity.ok(chordsDto);
    }
}