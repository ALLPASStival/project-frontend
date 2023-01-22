import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getEach,
  getFree,
  getRecruit,
  getReview,
  postFree,
  postRecruit,
  postReview,
} from "../actions/Community";

export interface CommunityState {
  result: any;
  content: any;
  recruit: string;
  free: string;

  error: any;
}

const initialState: CommunityState = {
  result: {},
  content: [],
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
        state.content = action.payload.result.content;
      })
      //자유게시판 불러오기
      .addCase(getFree.fulfilled, (state, action) => {
        state.content = action.payload.result.content;
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
        state.content = action.payload.result.content;
      })
      .addCase(getEach.fulfilled, (state, action) => {
        state.content = action.payload;
      }),
});

export default CommunityState;
