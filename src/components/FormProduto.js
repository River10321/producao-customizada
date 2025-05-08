import React, { useState } from 'react';
import './FormProduto.css';

function FormProduto() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [processos, setProcessos] = useState([]);
  const [nomeProcesso, setNomeProcesso] = useState('');
  const [tempoMin, setTempoMin] = useState('');
  const [tempoSeg, setTempoSeg] = useState('');
  const [maquina, setMaquina] = useState('');

  const adicionarProcesso = () => {
    const tempoTotal = parseInt(tempoMin || 0) * 60 + parseInt(tempoSeg || 0);
    const processo = { nome: nomeProcesso, tempo: tempoTotal, maquina };
    setProcessos([...processos, processo]);
    setNomeProcesso('');
    setTempoMin('');
    setTempoSeg('');
    setMaquina('');
  };

  const calcularTempoTotal = () => {
    return processos.reduce((acc, p) => acc + p.tempo, 0);
  };

  return (
    <div className="produto-container">
      <h2>Cadastrar Produto</h2>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nomeProduto}
        onChange={(e) => setNomeProduto(e.target.value)}
      />
      <div className="processo-form">
        <input
          type="text"
          placeholder="Nome do processo"
          value={nomeProcesso}
          onChange={(e) => setNomeProcesso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min"
          value={tempoMin}
          onChange={(e) => setTempoMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Seg"
          value={tempoSeg}
          onChange={(e) => setTempoSeg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Máquina"
          value={maquina}
          onChange={(e) => setMaquina(e.target.value)}
        />
        <button type="button" onClick={adicionarProcesso}>Adicionar processo</button>
      </div>

      <h4>Processos adicionados:</h4>
      <ul>
        {processos.map((p, i) => (
          <li key={i}>
            {p.nome} - {Math.floor(p.tempo / 60)}min {p.tempo % 60}s - Máquina: {p.maquina}
          </li>
        ))}
      </ul>

      <h3>Tempo total de produção: {Math.floor(calcularTempoTotal() / 60)}min {calcularTempoTotal() % 60}s</h3>
    </div>
  );
}

export default FormProduto;
