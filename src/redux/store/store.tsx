import {configureStore, combineReducers, Reducer} from '@reduxjs/toolkit';
import themeReducer, {ThemeState} from '../reducers/theme';
import popupReducer, {PopupState} from '../reducers/popup';

export interface RootState {
  theme: ThemeState;
  popup: PopupState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  theme: themeReducer,
  popup: popupReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
