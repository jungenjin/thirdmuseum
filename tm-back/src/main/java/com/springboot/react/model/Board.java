package com.springboot.react.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Data
@DynamicInsert //Insert시 Null인 필드를 제외하기위해 사용
@DynamicUpdate //update시 Null인 필드를 제외하기위해 사용
@Entity
@Table(name = "TB_NOTICE")
public class Board {
	@Id
	@GeneratedValue
	@Column(name = "NTC_NO")
	private Integer ntcNo;
	
	@Column(name = "NTC_TITLE")
	private String ntcTitle;
	
	@Column(name = "NTC_CONTENT", length=4000)
	private String ntcContent;
	
//	@Column(name = "NTC_REG_ID")
//	private String ntcRegId;
//	
//	@Column(name = "NTC_REG_DATE")
//	private String ntcRegDate;
}
