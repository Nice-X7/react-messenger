import { createSlice } from '@reduxjs/toolkit';

type CollapseState = {
  isCollapsed: boolean;
}

const initialState: CollapseState = {
  isCollapsed: false,
};

const collapseSlice = createSlice({
  name: 'collapse',
  initialState,
  reducers: {
    toggleCollapse(state) {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggleCollapse } = collapseSlice.actions;

export default collapseSlice.reducer;