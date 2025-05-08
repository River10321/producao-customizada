import React, { useState } from 'react';
import './FormFuncionario.css';

function FormFuncionario() {
  const [nome, setNome] = useState('');
  const [salario, setSalario] = useState('');
  const [jornada, setJornada] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcularCustos = (e) => {
    e.preventDefault();
    const salarioFloat = parseFloat(salario);
    const jornadaFloat = parseFloat(jornada);

    if (isNaN(salarioFloat) || isNaN(jornadaFloat) || jornadaFloat === 0) {
      alert('Preencha corretamente o salário e a jornada!');
      return;
    }

    const horasPorMes = jornadaFloat;
    const minutosPorMes = horasPorMes * 60;
    const segundosPorMes = minutosPorMes * 60;

    const custoHora = salarioFloat / horasPorMes;
    const custoMinuto = salarioFloat / minutosPorMes;
    const custoSegundo = salarioFloat / segundosPorMes;

    setResultados({
      custoHora,
      custoMinuto,
      custoSegundo,
    });
  };

  return (
    <div className="funcionario-container">
      <h2>Cadastrar Funcionário</h2>
      <form onSubmit={calcularCustos}>
        <input
          type="text"
          placeholder="Nome do funcionário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Salário mensal (R$)"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
        />
        <input
          type="number"
          placeholder="Jornada (horas/mês)"
          value={jornada}
          onChange={(e) => setJornada(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>

      {resultados && (
        <div className="resultado">
          <p><strong>Funcionário:</strong> {nome}</p>
          <p><strong>Custo por hora:</strong> R$ {resultados.custoHora.toFixed(2)}</p>
          <p><strong>Custo por minuto:</strong> R$ {resultados.custoMinuto.toFixed(4)}</p>
          <p><strong>Custo por segundo:</strong> R$ {resultados.custoSegundo.toFixed(6)}</p>
        </div>
      )}
    </div>
  );
}

export default FormFuncionario;
