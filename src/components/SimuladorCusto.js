import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  MenuItem,
  Select,
  Button,
  FormControl,
  InputLabel
} from '@mui/material';

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
    }, 0) / 60;

    const custoMinuto = funcionario.salario / (funcionario.jornada * 60);
    const custoTotal = tempoTotalMin * custoMinuto;

    setResultado({ tempoTotalMin, custoTotal });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Simular Custo de Produção
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Produto</InputLabel>
              <Select
                value={produtoSelecionado}
                label="Produto"
                onChange={(e) => setProdutoSelecionado(e.target.value)}
              >
                {produtos.map((p, index) => (
                  <MenuItem key={index} value={p.nome}>{p.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Funcionário</InputLabel>
              <Select
                value={funcionarioSelecionado}
                label="Funcionário"
                onChange={(e) => setFuncionarioSelecionado(e.target.value)}
              >
                {funcionarios.map((f, index) => (
                  <MenuItem key={index} value={f.nome}>{f.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={calcular}>
              Calcular
            </Button>
          </Grid>
        </Grid>

        {resultado && (
          <Box mt={3}>
            <Typography><strong>Tempo total:</strong> {resultado.tempoTotalMin.toFixed(2)} min</Typography>
            <Typography><strong>Custo total:</strong> R$ {resultado.custoTotal.toFixed(2)}</Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
}

export default SimuladorCusto;
