import React, { useState } from 'react';
import './SimuladorCusto.css';

function SimuladorCusto({ produtos, funcionarios }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const produto = produtos.find(p => p.nome === produtoSelecionado);
    const funcionario = funcionarios.find(f => f.nome === funcionarioSelecionado);

    if (!produto || !funcionario) {
      setResultado(null);
      return;
    }

    const tempoTotalMin = produto.processos.reduce((total, proc) => {
      return total + (proc.min * 60 + proc.seg);
    }, 0) / 60; // convertendo para minutos

    const custoMinuto = funcionario.salario / (funcionario.jornada * 60);
    const custoTotal = tempoTotalMin * custoMinuto;

    setResultado({ tempoTotalMin, custoTotal });
  };

  return (
    <div className="simulador-container">
      <h2>Simular Custo de Produção</h2>

      <select value={produtoSelecionado} onChange={e => setProdutoSelecionado(e.target.value)}>
        <option value="">Selecione um produto</option>
        {produtos.map((p, index) => (
          <option key={index} value={p.nome}>{p.nome}</option>
        ))}
      </select>

      <select value={funcionarioSelecionado} onChange={e => setFuncionarioSelecionado(e.target.value)}>
        <option value="">Selecione um funcionário</option>
        {funcionarios.map((f, index) => (
          <option key={index} value={f.nome}>{f.nome}</option>
        ))}
      </select>

      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <div className="resultado">
          <p><strong>Tempo total:</strong> {resultado.tempoTotalMin.toFixed(2)} min</p>
          <p><strong>Custo total:</strong> R$ {resultado.custoTotal.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default SimuladorCusto;
