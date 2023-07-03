import {createSlice, PayloadAction, Slice, Reducer} from '@reduxjs/toolkit';

export interface PopupState {
  type: string;
  message: string;
  btnText: string;
  active: any | boolean;
}

const popupSlice: Slice<PopupState> = createSlice({
  name: 'popup',
  initialState: {
    type: 'Verified',
    message: 'Your account has been verified successfully!',
    btnText: 'Proceed',
    active: false,
  },
  reducers: {
    openPopup: (state, action: PayloadAction<PopupState>) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.btnText = action.payload.btnText;
      state.active = !state.active;
    },
    closePopup: state => {
      state.active = !state.active;
    },
  },
});

export const {openPopup, closePopup} = popupSlice.actions;
const popupReducer: Reducer<PopupState> = popupSlice.reducer;
export default popupReducer;
