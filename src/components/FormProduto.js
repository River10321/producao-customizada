import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';

const FormProduto = ({ onAdd }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [processos, setProcessos] = useState([]);
  const [nomeProcesso, setNomeProcesso] = useState('');
  const [min, setMin] = useState('');
  const [seg, setSeg] = useState('');
  const [maquina, setMaquina] = useState('');

  const adicionarProcesso = () => {
    if (!nomeProcesso || !min || !seg || !maquina) return;
    setProcessos([
      ...processos,
      {
        nome: nomeProcesso,
        min: parseInt(min),
        seg: parseInt(seg),
        maquina
      }
    ]);
    setNomeProcesso('');
    setMin('');
    setSeg('');
    setMaquina('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nomeProduto || processos.length === 0) return;
    onAdd({ nome: nomeProduto, processos });
    setNomeProduto('');
    setProcessos([]);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Cadastrar Produto
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome do Produto"
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nome do Processo"
              value={nomeProcesso}
              onChange={(e) => setNomeProcesso(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={2}>
            <TextField
              fullWidth
              label="Min"
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={2}>
            <TextField
              fullWidth
              label="Seg"
              type="number"
              value={seg}
              onChange={(e) => setSeg(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Máquina"
              value={maquina}
              onChange={(e) => setMaquina(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={adicionarProcesso}>
              Adicionar Processo
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ul>
              {processos.map((p, i) => (
                <li key={i}>
                  {p.nome} - {p.min}min {p.seg}s - Máquina: {p.maquina}
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Salvar Produto
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default FormProduto;
