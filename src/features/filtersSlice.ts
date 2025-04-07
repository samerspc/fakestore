import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  categoryId: number | null;
}

const initialState: FilterState = {
  categoryId: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryFilter(state, action: PayloadAction<number | null>) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryFilter } = filterSlice.actions;
export default filterSlice.reducer;
