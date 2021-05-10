package com.naofi.chordman.repo;

import com.naofi.chordman.entity.Chords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChordsRepository extends JpaRepository<Chords, Long> {
}
