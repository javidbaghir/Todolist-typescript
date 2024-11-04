import React from 'react'
import Todo from './Todo'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { Todos } from '../type/Types'
import { RootState } from '../redux/Store'

function TodoList() {

  const {todos} = useSelector((state: RootState) => state.todo)

  return (
    <Box sx={{marginTop: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
      {todos && todos.map((todo:Todos) => (
          <Todo key={todo.id} todo={todo}/>
      ))}
      
    </Box>
  )
}

export default TodoList