import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PromocaoService from "../../controllers/PromocaoService";
import './promo.css'

export default function Index() {
  const [nomes, setNomes] = useState([]);

  const getAllPromocoes = () => {
   PromocaoService.getAllPromocoes()
      .then((response) => {
        setNomes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPromocoes();
  }, []);

  const deletePromocao = (nomeId) => {
    PromocaoService.deletePromocao(nomeId)
      .then((response) => {
        getAllPromocoes();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro! Sem resposta do Banco de Dados");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container display-2">Cadastro Promoção <span ><img src="../src/assets/promo.png" width="60" height="60"/></span></h1>
      </header>
      <div className="container p-5">
        <Link to="/Promocoes-Create" className="btn btn-success btn-lg">
          Criar Nova Promoção <span class="glyphicon glyphicon-saved"></span>
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
                <th>Id</th>
                <th>Descrição</th>
                <th>Desconto</th>
          
                <th>Editar/Deletar</th>
              </tr>
            </thead>
            <tbody>
              {nomes.map((nome) => (
                <tr className="text-white tr-hover" key={nome.id_promocao}>
                  <td className="text-black">{nome.id_promocao}</td>
                  <td className="text-black">{nome.descricao}</td>
                  <td className="text-black">{nome.desconto}</td>
                  <td>
                    <Link
                      to={`/Promocoes-Update/${nome.id_promocao}`}
                      className="btn btn-warning btn-lg"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger btn-lg"
                      onClick={() => deletePromocao(nome.id_promocao)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
