import React from 'react';
import './ListaFuncionarios.css';

function ListaFuncionarios({ funcionarios }) {
  return (
    <div className="lista-container">
      <h2>Funcionários Cadastrados</h2>
      <ul>
        {funcionarios.map((func, index) => (
          <li key={index}>
            <strong>{func.nome}</strong> - R$ {func.salario.toFixed(2)} / mês | Jornada: {func.jornada}h
            <br />
            💰 Custo por hora: R$ {func.custoHora.toFixed(2)} | minuto: R$ {func.custoMinuto.toFixed(2)} | segundo: R$ {func.custoSegundo.toFixed(4)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFuncionarios;
