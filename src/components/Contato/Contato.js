import React from "react";

function Contato(props) {
    const contato = props.contato
    return (
        <>
            <li>
                <div className="item-contato">
                    <h4>{contato.tipo}</h4>
                    <p>{contato.contato}</p>
                </div>
            </li>
        </>
    );
}

export default Contato;
