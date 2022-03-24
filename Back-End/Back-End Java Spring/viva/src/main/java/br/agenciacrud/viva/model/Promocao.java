package br.agenciacrud.viva.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

@Table(name="promocoes")

public class Promocao  implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long Id_promocao;
	private double desconto;
	private String descricao;
	
	
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public double getDesconto() {
		return desconto;
	}

	public void setDesconto(double desconto) {
		this.desconto = desconto;
	}

	public long getId_promocao() {
		return Id_promocao;
	}

	public void setId_promocao(long id_promocao) {
		Id_promocao = id_promocao;
	}




	public Promocao() {
		super();
		
	}

	public Promocao(long id_promocao, String descricao, double desconto) {
		super();
		Id_promocao = id_promocao;
		this.descricao = descricao;
		this.desconto = desconto;
	
	}


	

	@Override
	public int hashCode() {
		return Objects.hash(Id_promocao);
	}

	

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Promocao other = (Promocao) obj;
		return Objects.equals(Id_promocao, other.Id_promocao);
	}
	
}
	
	
	
	
	

