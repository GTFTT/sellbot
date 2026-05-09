import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../reduxStore";

export const HEADER_SLICE_NAME = "headerSlice";

const headerSlice = createSlice({
  name: HEADER_SLICE_NAME,
  initialState: {
    isMenuOpened: false
  },
  reducers: {
    openMenuAction: state => {
      state.isMenuOpened = true;
    },
    closeMenuAction: state => {
      state.isMenuOpened = false;
    }
  }
})

// Selectors
export const selectIsMenuOpened = (state: RootState) => state[HEADER_SLICE_NAME].isMenuOpened;

// Actions
export const { openMenuAction, closeMenuAction } = headerSlice.actions

export const headerSliceReducer = headerSlice.reducer;