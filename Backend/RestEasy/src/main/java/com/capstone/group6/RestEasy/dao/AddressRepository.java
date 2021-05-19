package com.capstone.group6.RestEasy.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.group6.RestEasy.entity.Address;
@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{

}
