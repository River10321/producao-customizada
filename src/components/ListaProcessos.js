import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const ListaProcessos = ({ processos }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Processos Cadastrados
      </Typography>
      {processos.length === 0 ? (
        <Typography>Nenhum processo cadastrado.</Typography>
      ) : (
        <List>
          {processos.map((proc, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`${proc.nome} - ${proc.min}min ${proc.seg}s`}
                secondary={`Máquina: ${proc.maquina} | Produto: ${proc.produto}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default ListaProcessos;
