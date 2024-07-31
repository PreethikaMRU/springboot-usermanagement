package com.crud.fullstackspring.repository;

import com.crud.fullstackspring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
