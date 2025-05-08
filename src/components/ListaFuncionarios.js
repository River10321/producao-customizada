import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const ListaFuncionarios = ({ funcionarios }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Funcionários Cadastrados
      </Typography>
      <List>
        {funcionarios.map((func, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={func.nome}
              secondary={`Salário: R$ ${func.salario.toFixed(2)} | Jornada: ${func.jornada}h/mês | Custo/min: R$ ${(func.salario / (func.jornada * 60)).toFixed(4)}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ListaFuncionarios;
