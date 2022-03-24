package br.agenciacrud.viva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.agenciacrud.viva.model.Promocao;


	@Repository
	public interface PromocaoRepository extends JpaRepository<Promocao, Long> {

	}