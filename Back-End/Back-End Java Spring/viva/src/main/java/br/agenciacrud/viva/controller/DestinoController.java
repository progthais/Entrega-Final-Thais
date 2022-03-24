package br.agenciacrud.viva.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.agenciacrud.viva.model.Destino;
import br.agenciacrud.viva.repository.DestinoRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/destinos")
public class DestinoController {
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	// METODO GET__________________________________________
	
	@GetMapping
	public ResponseEntity<List<Destino>> findAll() {
		
		List<Destino> destinos = destinoRepository.findAll();
		
		return ResponseEntity.ok().body(destinos);
	}
	
	// GET PELA ID _________________________________________
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Destino> findById(@PathVariable long id) {
		
		Destino destino = destinoRepository.findById(id).get();
		
		return ResponseEntity.ok().body(destino);
	}
	
	// CREATE _____________________________________________
    @PostMapping
    public Destino create(@RequestBody Destino destino) {
    	
        return destinoRepository.save(destino);
    }
    
    // UPDATE ______________________________________________
    
    @PutMapping("{id}")
    public ResponseEntity<Destino> update(@PathVariable long id,@RequestBody Destino destinoDetails) {
    	Destino updateDestino = destinoRepository.findById(id).get();
        
    	updateDestino.setNome(destinoDetails.getNome());
    	updateDestino.setEstado(destinoDetails.getEstado());
    	updateDestino.setCidade(destinoDetails.getCidade()); 
    	updateDestino.setPais(destinoDetails.getPais());
        destinoRepository.save(updateDestino);

        return ResponseEntity.ok(updateDestino);
    }

    // DELETE _______________________________________________
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

    	Destino destino = destinoRepository.findById(id).get();

    	destinoRepository.delete(destino);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    
}
