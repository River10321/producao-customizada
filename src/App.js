import React, { useState } from 'react';
import FormProcesso from './components/FormProcesso';
import FormFuncionario from './components/FormFuncionario';
import FormProduto from './components/FormProduto';
import ListaProcessos from './components/ListaProcessos';
import ListaFuncionarios from './components/ListaFuncionarios';
import ListaProdutos from './components/ListaProdutos';

function App() {
  const [processos, setProcessos] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const adicionarProcesso = (novo) => {
    const tempo = novo.tempo;
    const min = Math.floor(tempo / 60);
    const seg = tempo % 60;
    setProcessos([...processos, { ...novo, min, seg }]);
  };

  const adicionarFuncionario = (f) => {
    setFuncionarios([...funcionarios, f]);
  };

  const adicionarProduto = (p) => {
    setProdutos([...produtos, p]);
  };

  return (
    <div className="App">
      <FormProcesso onAdd={adicionarProcesso} />
      <ListaProcessos processos={processos} />
      <FormFuncionario onAdd={adicionarFuncionario} />
      <ListaFuncionarios funcionarios={funcionarios} />
      <FormProduto onAdd={adicionarProduto} />
      <ListaProdutos produtos={produtos} />
    </div>
  );
}

export default App;
