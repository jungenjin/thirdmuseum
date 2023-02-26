package com.springboot.react.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.react.model.Reserve;
import com.springboot.react.repository.ReserveRepository;

@Service("reserveService")
public class ReserveServiceImpl implements ReserveService {
	@Autowired
	private ReserveRepository dao;
	
	public void insert(Reserve reserve) {
		dao.save(reserve);
	}
	
	public void update(Reserve article) {
		Reserve curReserve = dao.findTopByOrderByResNoDesc();
		curReserve.setResRegId(article.getResRegId());
		curReserve.setResDate(article.getResDate());
		curReserve.setResTime(article.getResTime());
		curReserve.setResPersoner(article.getResPersoner());
		dao.save(curReserve);
	}
	
	public void delete(Reserve reserve) {
		dao.delete(reserve);
	}
	
	public Reserve select() {
		return dao.findTopByOrderByResNoDesc();
	}
}
