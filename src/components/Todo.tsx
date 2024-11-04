import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Todos } from '../type/Types'
import { useDispatch } from 'react-redux'
import { editTodoById, removeTodoById } from '../redux/TodoSlice'


interface TodoType {
  todo: Todos
}

function Todo({todo} :TodoType) {

  const [isEdit, setIsEdit] = useState<Boolean>(true);
  const [editTodo, setEditTodo] = useState(todo.content);

  const dispatch = useDispatch();

  const handleDelete = () => {
   dispatch(removeTodoById(todo.id))
  }

  const handleEdit = () => {
      setIsEdit(!isEdit)

      const payload:Todos = {
        id: todo.id,
        content: editTodo
      }

      dispatch(editTodoById(payload))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };


  return (
    <Box>
    <Box sx={{
        border: '1px',
        borderStyle: 'solid',
        borderColor: '#000',
        padding: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 1
    }}>
         <Box>
        {isEdit ?  <h3>{todo.content}</h3> : 
          <TextField id="outlined-basic" 
          value={editTodo}
          onChange={handleChange}
          fullWidth
          label="Todo" variant="outlined" />}
        </Box>

        <Box>
            <Button onClick={handleEdit}>{isEdit ? "Edit" : "Done"}</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </Box>

    </Box>
    </Box>
  )
}

export default Todo