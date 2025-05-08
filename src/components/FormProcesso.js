// src/components/FormProcesso.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

export default function FormProcesso({ onAdd }) {
  const [nome, setNome] = useState('');
  const [min, setMin] = useState('');
  const [seg, setSeg] = useState('');
  const [maquina, setMaquina] = useState('');
  const [produto, setProduto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !min || !seg || !maquina || !produto) return;
    const tempo = parseInt(min) * 60 + parseInt(seg);
    onAdd({ nome, tempo, maquina, produto });
    setNome('');
    setMin('');
    setSeg('');
    setMaquina('');
    setProduto('');
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Cadastrar Processo
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome do processo"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="Minutos"
              type="number"
              fullWidth
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="Segundos"
              type="number"
              fullWidth
              value={seg}
              onChange={(e) => setSeg(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Máquina utilizada"
              fullWidth
              value={maquina}
              onChange={(e) => setMaquina(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Produto relacionado"
              fullWidth
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
