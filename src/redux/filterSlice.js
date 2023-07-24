import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'list',
  initialState: '',
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
