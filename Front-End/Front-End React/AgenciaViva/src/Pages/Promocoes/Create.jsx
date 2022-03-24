import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PromocaoService from "../../controllers/PromocaoService";

export default function Create() {
  const [descricao, setDescricao] = useState("");
  const [desconto, setDesconto] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const promocao = {descricao, desconto};

    if (id) {
        PromocaoService.updatePromocao(id, promocao)
        .then((response) => {
            navigate("/Promocoes")
        })

    } else {
        PromocaoService.createPromocao(promocao)
        .then((response) => {
            navigate("/Promocoes")
        })
    }
  }

  useEffect(() => {
      function getPromocaoById() {
        if (id) {
          PromocaoService.getPromocaoById(id)
            .then((response) => {
                setDescricao(response.data.descricao);
                setDesconto(response.data.desconto);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getPromocaoById()
  }, [id]);

  return (
    <div className="container py-5">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center display-2">{id ? "Editar" : "Criar"}</h2>
          </legend>
         

          <div className="mb-3">
            <label htmlFor="Descricao" className="form-label">
              Descrição
            </label>
            <input
              type="text"
              id="Descricao"
              className="form-control"
              placeholder="Descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Desconto" className="form-label">
              Desconto
            </label>
            <input
              type="text"
              id="Desconto"
              className="form-control"
              placeholder="Desconto"
              value={desconto}
              onChange={(e) => setDesconto(e.target.value)}
            />
          </div>


          <button type="submit" className="btn btn-primary btn-lg" onClick={(e) => criarOuEditarDestino(e)}>
            Enviar
          </button>
          <Link
            to="/Promocoes"
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
