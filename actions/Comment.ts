import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CommunityState from "../reducers/community";
import { CommentState } from "../reducers/comment";

export const getCommentCount = createAsyncThunk<CommentState, any>(
  "get_CommentCount",
  async ({ postId }, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://3.36.112.187:8080/api/v1/posts/${postId}/comments/counts`
      );

      return response.data;
    } catch (e: any) {
      alert("불러오기 실패");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//댓글 개수 조회
export const getComment = createAsyncThunk<CommentState, any>(
  "get_Comment",
  async ({ postId }, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://3.36.112.187:8080/api/v1/posts/${postId}/comment/counts`
      );

      return response.data;
    } catch (e: any) {
      alert("불러오기 실패");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const getCommentList = createAsyncThunk<CommentState, any>(
  "get_CommentList",
  async ({ postId }, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://3.36.112.187:8080/api/v1/posts/${postId}/comments`
      );

      return response.data;
    } catch (e: any) {
      alert("불러오기 실패");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//상세 페이지 댓글 달기
export const postComment = createAsyncThunk<CommentState, any>(
  "post_Comment",
  async ({ postId, comment }: any, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://3.36.112.187:8080/api/v1/posts/${postId}/comments`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      alert("댓글을 달았습니다.");
      return response.data;
    } catch (e: any) {
      alert("댓글 달기에 실패하였습니다.");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
