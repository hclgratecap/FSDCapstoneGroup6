package com.capstone.group6.RestEasy.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "order_details")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
	@GenericGenerator(name = "native", strategy = "native")
	@Column(name = "order_id")
	private int orderId;

	@Column(name = "total_quantity")
	private int totalQuantity;

	@Column(name = "total_price")
	private double totalPrice;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "customer_id")
	private Customer customer;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address addressDetails;

	public Order() {
	}

	public Order(int orderId, int totalQuantity, double totalPrice, Customer customer, Address addressDetails) {
		this.orderId = orderId;
		this.totalQuantity = totalQuantity;
		this.totalPrice = totalPrice;
		this.customer = customer;
		this.addressDetails = addressDetails;
	}

	public Order(int totalQuantity, double totalPrice, Customer customer, Address addressDetails) {
		super();
		this.totalQuantity = totalQuantity;
		this.totalPrice = totalPrice;
		this.customer = customer;
		this.addressDetails = addressDetails;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public int getTotalQuantity() {
		return totalQuantity;
	}

	public void setTotalQuantity(int totalQuantity) {
		this.totalQuantity = totalQuantity;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Address getAddressDetails() {
		return addressDetails;
	}

	public void setAddressDetails(Address addressDetails) {
		this.addressDetails = addressDetails;
	}

	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", totalQuantity=" + totalQuantity + ", totalPrice=" + totalPrice
				+ ", customer=" + customer + ", addressDetails=" + addressDetails + "]";
	}

}
