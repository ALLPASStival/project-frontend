import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import {
  getEachFestival,
  getFestival,
  getFestivalGood,
  getFestivalReview,
} from "../actions/FestivalAPI";
//
export interface FestivalState {
  festival: any;
  result: any;
  content: any;
  eachFestival: any;
  festivalReview: any;
  festivalGood: any;

  error: any;
}

const initialState: FestivalState = {
  festival: [],
  result: {},
  content: [],
  eachFestival: [],
  festivalReview: [],
  festivalGood: [],
  error: "",
};
export const festivalSLice = createSlice({
  name: "festival",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getFestival.fulfilled, (state, action) => {
        state.festival = action.payload?.result?.content;
      })
      .addCase(getEachFestival.fulfilled, (state, action) => {
        state.eachFestival = action.payload?.result.content;
      })
      .addCase(getFestivalReview.fulfilled, (state, action) => {
        state.festivalReview = action.payload?.result.content;
      })
      .addCase(getFestivalGood.fulfilled, (state, action) => {
        state.festivalGood = action.payload?.result.content;
      }),
});

export default festivalSLice;
