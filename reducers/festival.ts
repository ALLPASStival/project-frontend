import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import {
  getEachFestival,
  getFestival,
  getFestivalReview,
} from "../actions/FestivalAPI";
//
export interface FestivalState {
  festival: any;
  result: any;
  content: any;
  eachFestival: any;
  festivalReview: any;

  error: any;
}

const initialState: FestivalState = {
  festival: [],
  result: {},
  content: [],
  eachFestival: [],
  festivalReview: [],
  error: "",
};

export const festivalSLice = createSlice({
  name: "festival",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getFestival.fulfilled, (state, action) => {
        state.festival = action.payload?.result.content;
      })
      .addCase(getEachFestival.fulfilled, (state, action) => {
        state.eachFestival = action.payload?.result.content;
      })
      .addCase(getFestivalReview.fulfilled, (state, action) => {
        state.festivalReview = action.payload?.result.content;
      }),
});

export default festivalSLice;
