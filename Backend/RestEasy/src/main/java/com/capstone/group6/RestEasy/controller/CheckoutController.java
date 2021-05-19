package com.capstone.group6.RestEasy.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.group6.RestEasy.dto.Purchase;
import com.capstone.group6.RestEasy.service.CheckoutServiceImpl;

@CrossOrigin
@RestController
@Transactional
public class CheckoutController {
	@Autowired
	CheckoutServiceImpl checkoutSevice;

	// Fetching and Saving the order details
	@PostMapping("/checkout")
	public void saveOrderDetails(@RequestBody Purchase purchase) {
		checkoutSevice.saveOrder(purchase);
	}

}
