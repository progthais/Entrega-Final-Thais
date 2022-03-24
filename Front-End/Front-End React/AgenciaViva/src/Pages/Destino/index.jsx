import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinoService from "../../controllers/DestinoService";
import './destino.css'

export default function Index() {
  const [nomes, setNomes] = useState([]);

  const getAllDestinos = () => {
    DestinoService.getAllDestinos()
      .then((response) => {
        setNomes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDestinos();
  }, []);

  const deleteDestino = (nomeId) => {
    DestinoService.deleteDestino(nomeId)
      .then((response) => {
        getAllDestinos();
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
        <h1 className="container display-2">
          
     Cadastro Destino <span ><img src="../src/assets/travel.png" width="60" height="60"/></span></h1>
      </header>

      <div className="container p-5">

        <Link to="/Destinos-Create" className="btn btn-success btn-lg">
          Criar Novo Destino <span class="glyphicon glyphicon-saved"></span>
        </Link>
       

        <div className="table-responsive">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Estado</th>
                <th>Cidade</th>
                <th>Pais</th>
                <th>Editar/Deletar</th>
              </tr>
              
            </thead>
            
            <tbody>
              {nomes.map((nome) => (
                <tr className="text-white tr-hover" key={nome.id_destino}>
                  <td className="text-black">{nome.id_destino}</td>
                  <td className="text-black">{nome.nome}</td>
                  <td className="text-black">{nome.estado}</td>
                  <td className="text-black">{nome.cidade}</td>
                  <td className="text-black">{nome.pais}</td>

                  <td>
                    <Link
                      to={`/Destinos-Update/${nome.id_destino}`}
                      className="btn btn-warning btn-lg"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger btn-lg"
                      onClick={() => deleteDestino(nome.id_destino)}
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
