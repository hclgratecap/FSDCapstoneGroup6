package com.capstone.group6.RestEasy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.capstone.group6.RestEasy.dao.CustomerRepository;
import com.capstone.group6.RestEasy.dto.Purchase;
import com.capstone.group6.RestEasy.entity.Address;
import com.capstone.group6.RestEasy.entity.Customer;
import com.capstone.group6.RestEasy.entity.Order;

@Service
public class CheckoutServiceImpl implements CheckoutService {
	@Autowired
	CustomerRepository customerRepository;

	public CheckoutServiceImpl(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}
	
	// saving the order details
	@Override
	public void saveOrder(Purchase purchase) {
		// getting the order from dto
		Order order = purchase.getOrder();

		// saving the address details inside order for one to one mapping 
		Address address = purchase.getAddress();
		order.setAddressDetails(address);
		
		// getting the customer details from dto 
		Customer customer = purchase.getCustomer();
		
		// saving the order inside customer for one to many mapping 
		customer.add(order);
		
		// saving the details using respective repository
		customerRepository.save(customer);

	}

}
