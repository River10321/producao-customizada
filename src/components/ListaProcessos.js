import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const ListaFuncionarios = ({ funcionarios }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Funcionários Cadastrados
      </Typography>
      {funcionarios.length === 0 ? (
        <Typography>Nenhum funcionário cadastrado.</Typography>
      ) : (
        <List>
          {funcionarios.map((f, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`${f.nome} - R$ ${f.salario.toFixed(2)} | ${f.jornada}h/mês`}
                secondary={`Custo por min: R$ ${(f.salario / (f.jornada * 60)).toFixed(4)} | por seg: R$ ${(f.salario / (f.jornada * 60 * 60)).toFixed(6)}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default ListaFuncionarios;
