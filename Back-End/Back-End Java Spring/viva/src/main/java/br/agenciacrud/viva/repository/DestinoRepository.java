package br.agenciacrud.viva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.agenciacrud.viva.model.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {

}