import React, { useState } from 'react';
import FormProcesso from './components/FormProcesso';
import FormFuncionario from './components/FormFuncionario';
import FormProduto from './components/FormProduto';
import ListaProcessos from './components/ListaProcessos';
import ListaFuncionarios from './components/ListaFuncionarios';

function App() {
  const [processos, setProcessos] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);

  const adicionarProcesso = (novo) => {
    const tempo = novo.tempo;
    const min = Math.floor(tempo / 60);
    const seg = tempo % 60;
    setProcessos([...processos, { ...novo, min, seg }]);
  };

  const adicionarFuncionario = (f) => {
    setFuncionarios([...funcionarios, f]);
  };

  return (
    <div className="App">
      <FormProcesso onAdd={adicionarProcesso} />
      <ListaProcessos processos={processos} />
      <FormFuncionario onAdd={adicionarFuncionario} />
      <ListaFuncionarios funcionarios={funcionarios} />
      <FormProduto />
    </div>
  );
}

export default App;
