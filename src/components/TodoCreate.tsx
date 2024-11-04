import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Todos } from '../type/Types';
import { createTodo } from '../redux/TodoSlice';

function TodoCreate() {

  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

 const handleSubmit = () => {
  if(newTodo.trim().length === 0) {
    alert('Inputu boş saxlamayın')
    return;
  }

  const payload:Todos = {
    id: Math.floor(Math.random() * 99999999),
    content: newTodo
  }

  dispatch(createTodo(payload))
  setNewTodo('')
 }

  return (
    <div>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            width: 500,
            gap: 2,
            borderRadius: 1}}>

          <TextField id="outlined-basic" 
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
          fullWidth
          label="Todo" variant="outlined" />
          <Button onClick={handleSubmit} variant="contained">Create</Button>
        </Box>
    </div>
  )
}

export default TodoCreate