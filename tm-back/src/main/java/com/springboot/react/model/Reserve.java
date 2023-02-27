package com.springboot.react.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Data
@DynamicInsert //Insert시 Null인 필드를 제외하기위해 사용
@DynamicUpdate //update시 Null인 필드를 제외하기위해 사용
@Entity
@Table(name = "tb_reserve")
public class Reserve{
	//글번호
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TB_RESERVE_SEQ")
	@SequenceGenerator(sequenceName = "RES_NO_SEQ", allocationSize = 1, name = "TB_RESERVE_SEQ")
	@Column(name = "res_no")
	private int resNo;
	
	//예약자
	@Column(name = "res_reg_id")
	private String resRegId;
	
	//예약일
	@Column(name = "res_date")
	private String resDate;
	
	//예약시간
	@Column(name = "res_time")
	private String resTime;
	
	//인원수
	@Column(name = "res_personer")
	private String resPersoner;
	
}

