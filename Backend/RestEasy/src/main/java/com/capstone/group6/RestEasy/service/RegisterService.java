package com.capstone.group6.RestEasy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.group6.RestEasy.dao.RegisterRepository;
import com.capstone.group6.RestEasy.entity.User;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository registerRepository;

	// saving the user registration data in the database
	public User saveUser(User user) {
		return registerRepository.save(user);
	}

	// fetching the user details from the database using email
	public User fetchUserByEmail(String email) {
		return registerRepository.findByEmail(email);
	}
	// fetching the user details from the database using email and password
	public User fetchUserByEmailAndPassword(String email, String password) {
		return registerRepository.findByEmailAndPassword(email, password);
	}
}
