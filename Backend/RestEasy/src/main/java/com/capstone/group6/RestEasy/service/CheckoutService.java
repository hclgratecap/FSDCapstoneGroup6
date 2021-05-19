package com.capstone.group6.RestEasy.service;

import org.springframework.stereotype.Service;

import com.capstone.group6.RestEasy.dto.Purchase;


@Service
public interface CheckoutService {

	public void saveOrder(Purchase purchase);

}
