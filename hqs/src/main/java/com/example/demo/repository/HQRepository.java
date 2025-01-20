package com.example.demo.repository;

import com.example.demo.model.HQ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HQRepository extends JpaRepository<HQ, Long> {
}
