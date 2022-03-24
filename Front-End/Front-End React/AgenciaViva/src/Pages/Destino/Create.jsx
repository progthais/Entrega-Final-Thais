import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../../controllers/DestinoService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [pais, setPais] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destino = { nome, estado, cidade, pais };

    if (id) {
        DestinoService.updateDestino(id, destino)
        .then((response) => {
            navigate("/Destinos")
        })

    } else {
        DestinoService.createDestino(destino)
        .then((response) => {
            navigate("/Destinos")
        })
    }
  }

  useEffect(() => {
      function getDestinoById() {
        if (id) {
            DestinoService.getDestinoById(id)
            .then((response) => {
                setNome(response.data.nome);
                setEstado(response.data.estado);
                setCidade(response.data.cidade);
                setPais(response.data.pais);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getDestinoById()
  }, [id]);

  return (
    <div className="container py-5">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center display-2">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Estado" className="form-label">
              Estado
            </label>
            <input
              type="text"
              id="Estado"
              className="form-control"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              id="Cidade"
              className="form-control"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Pais" className="form-label">
              País
            </label>
            <input
              type="text"
              id="Pais"
              className="form-control"
              placeholder="País"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg" onClick={(e) => criarOuEditarDestino(e)}>
            Enviar
          </button>
          <Link
            to="/Destinos"
            className="btn btn-danger btn-lg"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
