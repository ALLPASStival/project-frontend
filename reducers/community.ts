import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import {
  getFree,
  getRecruit,
  getReview,
  postFree,
  postRecruit,
  postReview,
} from "../actions/Community";

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
      //리뷰게시판 불러오기
      .addCase(getReview.fulfilled, (state, action) => {
        state.review = action.payload.review;
      })
      //자유게시판 불러오기
      .addCase(getFree.fulfilled, (state, action) => {
        state.free = action.payload.free;
      })
      //구인게시판 불러오기
      .addCase(getRecruit.fulfilled, (state, action) => {
        state.recruit = action.payload.recruit;
      })
      .addCase(postFree.fulfilled, (state, action) => {
        state.free = action.payload.free;
      })
      .addCase(postRecruit.fulfilled, (state, action) => {
        state.recruit = action.payload.recruit;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.review = action.payload.review;
      }),
});

export default CommunityState;
