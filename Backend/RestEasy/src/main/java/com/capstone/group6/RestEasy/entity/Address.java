package com.capstone.group6.RestEasy.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import javax.persistence.OneToOne;
//import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "address_details")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
	@GenericGenerator(name = "native", strategy = "native")
	@Column(name = "address_id")
	private int addressId;

	@Column(name = "city")
	private String city;

	@Column(name = "state")
	private String state;

	@Column(name = "country")
	private String country;

	@Column(name = "street")
	private String street;

	@Column(name = "zipcode")
	private String zipCode;

//	@OneToOne
//	@PrimaryKeyJoinColumn
//	private Order order;

	public Address() {
	}

	public Address(int addressId, String city, String state, String country, String street, String zipCode) {
		this.addressId = addressId;
		this.city = city;
		this.state = state;
		this.country = country;
		this.street = street;
		this.zipCode = zipCode;
	}

	public Address(String city, String state, String country, String street, String zipCode) {
		this.city = city;
		this.state = state;
		this.country = country;
		this.street = street;
		this.zipCode = zipCode;
	}

	public int getAddressId() {
		return addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", city=" + city + ", state=" + state + ", country=" + country
				+ ", street=" + street + ", zipCode=" + zipCode + "]";
	}

}
