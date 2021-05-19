package com.capstone.group6.RestEasy.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.group6.RestEasy.entity.User;

@Repository
public interface RegisterRepository extends JpaRepository<User, Integer> {
	public User findByEmail(String email);

	public User findByEmailAndPassword(String email, String password);
}
