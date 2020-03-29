import React from "react";

function Cabecalho(props) {
  return (
    <>
      <div className="perfil">
        <img src="https://avatars1.githubusercontent.com/u/53924159?s=460&u=b46138a1c24224463328188eeb82d705765068b0&v=4" alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          {props.nome}
        </h1>
        <div className="ocupacao">{props.ocupacao}</div>
        <p>{props.resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p> 
        {props.perfilProfissional}
        </p>
      </div>
    </>
  );
}

export default Cabecalho;
