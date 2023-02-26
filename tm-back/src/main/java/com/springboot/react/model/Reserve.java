package com.springboot.react.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "tb_reserve")
public class Reserve{
	@Id
	@GeneratedValue
	@Column(name = "res_no")
	private int resNo;
	
	@Column(name = "res_reg_id")
	private String resRegId;
	
	@Column(name = "res_date")
	private String resDate;
	
	@Column(name = "res_time")
	private String resTime;
	
	@Column(name = "res_personer")
	private String resPersoner;
	
}

