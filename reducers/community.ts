import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { getFree, getRecruit, getReview } from "../actions/FestivalAPI";

export interface CommunityState {
  review: string;
  recruit: string;
  free: string;

  error: any;
}

const initialState: CommunityState = {
  review: "",
  recruit: "",
  free: "",
  error: "",
};

export const CommunityState = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getReview.fulfilled, (state, action) => {
        state.review = action.payload.review;
      })
      .addCase(getFree.fulfilled, (state, action) => {
        state.free = action.payload.free;
      })
      .addCase(getRecruit.fulfilled, (state, action) => {
        state.recruit = action.payload.recruit;
      }),
});

export default CommunityState;
