import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  filter: 'all'
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.tasks[index] = action.payload
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload)
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const { setTasks, addTask, updateTask, deleteTask, setLoading, setError, setFilter } = taskSlice.actions
export default taskSlice.reducer
