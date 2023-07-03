import {createSlice, PayloadAction, Slice, Reducer} from '@reduxjs/toolkit';

export interface ThemeState {
  mode: string;
}

const themeSlice: Slice<ThemeState> = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light',
  },
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
const themeReducer: Reducer<ThemeState> = themeSlice.reducer;
export default themeReducer;
