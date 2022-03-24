package br.agenciacrud.viva.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="destinos")
public class Destino implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long Id_destino;
	private String nome;
	private String estado;
	private String cidade;
	private String pais;
	
	public Long getId_destino() {
		return Id_destino;
	}

	public void setId_destino(Long id_destino) {
		Id_destino = id_destino;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}




	
	

	public Destino() {
		super();
		
	}

	public Destino(long id_destino, String nome, String estado, String cidade, String pais) {
		super();
		Id_destino = id_destino;
		this.nome = nome;
		this.estado = estado;
		this.cidade = cidade;
		this.pais = pais;
		

	}


	

	@Override
	public int hashCode() {
		return Objects.hash(Id_destino);
	}

	

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Objects.equals(Id_destino, other.Id_destino);
	}
	
}
