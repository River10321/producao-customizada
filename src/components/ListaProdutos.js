import React from 'react';
import './ListaProdutos.css';

function ListaProdutos({ produtos }) {
  return (
    <div className="lista-produtos">
      <h2>Produtos Cadastrados</h2>
      {produtos.map((produto, i) => {
        const tempoTotal =
          produto.processos.reduce((acc, p) => acc + p.min * 60 + p.seg, 0);
        const min = Math.floor(tempoTotal / 60);
        const seg = tempoTotal % 60;
        return (
          <div key={i} className="produto">
            <h3>{produto.nome}</h3>
            <ul>
              {produto.processos.map((p, j) => (
                <li key={j}>
                  {p.nome} - {p.min}min {p.seg}s (Máquina: {p.maquina})
                </li>
              ))}
            </ul>
            <p className="tempo-total">
              Tempo total: {min}min {seg}s
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListaProdutos;
