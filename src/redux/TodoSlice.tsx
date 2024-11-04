import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, Todos } from '../type/Types'
import Todo from '../components/Todo'

const initialState :TodoInitialState = {
    todos: []
}

export const TodoSlice = createSlice ({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state:TodoInitialState, action:PayloadAction<Todos>) => {
            state.todos = [action.payload, ...state.todos ]
        },
        removeTodoById: (state: TodoInitialState, action:PayloadAction<Number>) => {
            state.todos = [...state.todos.filter((todo: Todos) => todo.id !== action.payload)]
        },
        editTodoById: (state: TodoInitialState, action:PayloadAction<Todos>) => {
            state.todos = [...state.todos.map((todo:Todos) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    }
})

export const { createTodo, removeTodoById, editTodoById } = TodoSlice.actions

export default TodoSlice.reducer