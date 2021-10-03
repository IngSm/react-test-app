import { createSlice } from '@reduxjs/toolkit';

export const addTaskSlice = createSlice({
  name: 'addTask',
  initialState: {
    tasks: []
  },
  reducers: {
    add: (state, action) => {
      state.tasks.push(action.payload)
    },
    del: (state, id) => {
      let index = state.tasks.findIndex((item) => item.id === id.payload)
      state.tasks.splice(index, 1)
    },
    toggle: (state, id) => {
      state.tasks.map((task) => task.id === id.payload ? (task.reminder = !task.reminder) : task.reminder)
    }
  },
});

export const { add, del, toggle }  = addTaskSlice.actions;

export default addTaskSlice.reducer;

