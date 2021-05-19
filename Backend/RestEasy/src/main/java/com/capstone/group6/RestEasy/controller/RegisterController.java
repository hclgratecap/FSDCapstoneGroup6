	package com.capstone.group6.RestEasy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.group6.RestEasy.entity.User;
import com.capstone.group6.RestEasy.service.RegisterService;

@RestController
public class RegisterController {
	@Autowired
	private RegisterService service;

	// for registering a new user
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception {

		String tempEmail = user.getEmail();

		if (tempEmail != null && "".equals(tempEmail)) {
			User userObject = service.fetchUserByEmail(tempEmail);
			if (userObject != null) {
				throw new Exception("user with " + tempEmail + "is already exist");
			}
		}

		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}

	// for login of existing user
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception {
		
		// checking if email is present in database or not
		// if not exception wrong credentials
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		User userObj = null;
		
		if (tempEmail != null && tempPass != null) {
			userObj = service.fetchUserByEmailAndPassword(tempEmail, tempPass);
		}
		if (userObj == null) {
			throw new Exception("bad credentials");
		}
		return userObj;
	}
}
