import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';

const FormFuncionario = ({ onAdd }) => {
  const [nome, setNome] = useState('');
  const [salario, setSalario] = useState('');
  const [jornada, setJornada] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !salario || !jornada) return;
    onAdd({ nome, salario: parseFloat(salario), jornada: parseFloat(jornada) });
    setNome('');
    setSalario('');
    setJornada('');
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Cadastrar Funcionário
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Nome do funcionário"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="number"
              label="Salário mensal (R$)"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="number"
              label="Jornada (horas/mês)"
              value={jornada}
              onChange={(e) => setJornada(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Calcular
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default FormFuncionario;
