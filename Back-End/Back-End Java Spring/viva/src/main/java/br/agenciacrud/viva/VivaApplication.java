package br.agenciacrud.viva;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import br.agenciacrud.viva.model.Promocao;
import br.agenciacrud.viva.model.Destino;
import br.agenciacrud.viva.repository.DestinoRepository;
import br.agenciacrud.viva.repository.PromocaoRepository;


@SpringBootApplication
public class VivaApplication implements CommandLineRunner{
	
@Autowired

private DestinoRepository destinoRepository;

@Autowired
private PromocaoRepository promocaoRepository;


	public static void main(String[] args) {
		SpringApplication.run(VivaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		destinoRepository.save(new Destino(1,"Praia", "Rio de Janeiro", "Guaratiba", "Brasil") );
		
		//destinoRepository.save(new Destino(null,"Cristo Redentor", "Rio de Janeiro", "Leblon", "Brasil") );
		
		
		//promocaoRepository.save(new Promocao(1,"Black Friday", 50.00));
		
		//promocaoRepository.save(new Promocao(null,"Lua de Mel", 80.00));


	}

}
