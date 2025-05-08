// src/components/ListaProcessos.js
import React from 'react';
import './ListaProcessos.css';

function ListaProcessos({ processos }) {
  return (
    <div className="lista-processos">
      <h3>Lista de Processos Cadastrados</h3>
      {processos.length === 0 ? (
        <p>Nenhum processo cadastrado.</p>
      ) : (
        <ul>
          {processos.map((proc, index) => (
            <li key={index}>
              <strong>{proc.nome}</strong> - {proc.min} min, {proc.seg} seg - Máquina: {proc.maquina} - Produto: {proc.produto}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaProcessos;
