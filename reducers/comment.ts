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
import { getComment, getCommentCount, postComment } from "../actions/Comment";

export interface CommentState {
  result: any;
}

const initialState: CommentState = {
  result: {},
};

export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //댓글 개수 불러오기
      .addCase(getCommentCount.fulfilled, (state, action) => {
        state.result = action.payload.result;
      })
      //댓글 불러오기
      .addCase(getComment.fulfilled, (state, action) => {
        state.result = action.payload.result;
      })
      //댓글 달기
      .addCase(postComment.fulfilled, (state, action) => {
        state.result = action.payload.result;
      }),
});

export default CommentSlice;
