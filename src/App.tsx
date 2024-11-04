import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@mui/material'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {


  return (
    <>
           <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',  
          marginTop: '20px',
       
        }}
      >
              <Box sx={{ width: 500 }}>
      <TodoCreate/>
      <TodoList/>
      </Box>
      </Box>
    </>
  )
}

export default App
