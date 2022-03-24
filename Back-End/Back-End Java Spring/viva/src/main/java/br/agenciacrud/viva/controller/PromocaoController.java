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

import br.agenciacrud.viva.model.Promocao;
import br.agenciacrud.viva.repository.PromocaoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/promocoes")


public class PromocaoController {
	
	@Autowired
	private PromocaoRepository promocaoRepository;
	
	// METODO GET__________________________________________
	
	@GetMapping
	public ResponseEntity<List<Promocao>> findAll() {
		
		List<Promocao> promocoes = promocaoRepository.findAll();
		
		return ResponseEntity.ok().body(promocoes);
	}
	
	// GET PELA ID _________________________________________
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Promocao> findById(@PathVariable long id) {
		
		Promocao promocao = promocaoRepository.findById(id).get();
		
		return ResponseEntity.ok().body(promocao);
	}
	
	// CREATE _____________________________________________
    @PostMapping
    public Promocao create(@RequestBody Promocao promocao) {
    	
        return promocaoRepository.save(promocao);
    }
    
    // UPDATE ______________________________________________
    
    @PutMapping("{id}")
    public ResponseEntity<Promocao> update(@PathVariable long id,@RequestBody Promocao PromocaoDetails) {
    	Promocao updatePromocao = promocaoRepository.findById(id).get();
    	
    	updatePromocao.setDescricao(PromocaoDetails.getDescricao());
    	updatePromocao.setDesconto(PromocaoDetails.getDesconto());
    	
        promocaoRepository.save(updatePromocao);

        return ResponseEntity.ok(updatePromocao);
    }

    // DELETE _______________________________________________
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

    	Promocao promocao = promocaoRepository.findById(id).get();

    	promocaoRepository.delete(promocao);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
	
	
	
	
	
	
	
	
	
	

}
