import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

import {
  getCallCenter,
  getEach,
  getFree,
  getRecruit,
  getReview,
  postCall,
  postFree,
  postGood,
  postRecruit,
  postReview,
} from "../actions/Community";

export interface CommunityState {
  result: any;
  content: any;
  recruit: any;
  review: any;
  free: any;
  good: number;
  call: any;

  error: any;
}

const initialState: CommunityState = {
  result: {},
  content: [],
  recruit: [],
  review: [],
  free: [],
  good: 0,
  call: "",
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
        state.review = action.payload.result.content;
      })
      //자유게시판 불러오기
      .addCase(getFree.fulfilled, (state, action) => {
        state.free = action.payload.result.content;
      })
      //구인게시판 불러오기
      .addCase(getRecruit.fulfilled, (state, action) => {
        state.recruit = action.payload.result.content;
      })
      .addCase(getCallCenter.fulfilled, (state, action) => {
        state.content = action.payload.result.content;
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
      })
      .addCase(postGood.fulfilled, (state, action) => {
        state.good = action.payload.result;
      })
      .addCase(postCall.fulfilled, (state, action) => {
        state.call = action.payload.result.content;
      }),
});

export default CommunityState;
