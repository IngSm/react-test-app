import { createSlice } from '@reduxjs/toolkit';

export const logSlice = createSlice({
  name: 'login',
  initialState: {
    log: false
  },
  reducers: {
    logIn: (state, action) => {
      state.log = action.payload
    },
  },
});

export const { logIn }  = logSlice.actions;

export default logSlice.reducer;
