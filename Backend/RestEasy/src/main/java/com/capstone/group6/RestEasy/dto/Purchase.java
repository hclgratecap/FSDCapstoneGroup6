package com.capstone.group6.RestEasy.dto;

import com.capstone.group6.RestEasy.entity.Address;
import com.capstone.group6.RestEasy.entity.Customer;
import com.capstone.group6.RestEasy.entity.Order;

// Data Transfer Object Class containing the object references of 
// customer, address and order entity class.
public class Purchase {
	private Customer customer;
	private Address address;
	private Order order;

	public Purchase() {
	}

	public Purchase(Customer customer, Address address, Order order) {
		this.customer = customer;
		this.address = address;
		this.order = order;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return "Purchase [customer=" + customer + ", address=" + address + ", order=" + order + "]";
	}

}
