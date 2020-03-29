import React from "react";

function Experiencia(props) {
  const { cargo, periodo, empresa, local, conteudo, atual } = props.exp

  return (
    <>
      {
        atual === false &&
        <div className="experience-item">
          <div>
            <h4>{cargo}</h4>
            <date>{periodo}</date>

            <strong>{empresa}</strong>
            <span>{local}</span>
          </div>
          <p>
            {conteudo}
          </p>
        </div>
      }
    </>
  );
}

export default Experiencia;
