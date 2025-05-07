// src/components/FormProcesso.js
import React, { useState } from 'react';
import './FormProcesso.css';

function FormProcesso({ onAdd }) {
  const [nome, setNome] = useState('');
  const [minutos, setMinutos] = useState('');
  const [segundos, setSegundos] = useState('');
  const [maquina, setMaquina] = useState('');
  const [produto, setProduto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempoTotalSegundos = parseInt(minutos || 0) * 60 + parseInt(segundos || 0);
    const processo = {
      nome,
      tempo: tempoTotalSegundos,
      maquina,
      produto
    };
    onAdd(processo);
    setNome('');
    setMinutos('');
    setSegundos('');
    setMaquina('');
    setProduto('');
  };

  return (
    <form className="form-processo" onSubmit={handleSubmit}>
      <h2>Cadastrar Processo</h2>
      <input type="text" placeholder="Nome do processo" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <div className="tempo-container">
        <input type="number" placeholder="Minutos" value={minutos} onChange={(e) => setMinutos(e.target.value)} />
        <input type="number" placeholder="Segundos" value={segundos} onChange={(e) => setSegundos(e.target.value)} />
      </div>
      <input type="text" placeholder="Máquina utilizada" value={maquina} onChange={(e) => setMaquina(e.target.value)} />
      <input type="text" placeholder="Produto relacionado" value={produto} onChange={(e) => setProduto(e.target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormProcesso;
