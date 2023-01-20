import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CommunityState from "../reducers/community";
import { Register } from "../reducers/user";

export const postFree = createAsyncThunk<CommunityState, any>(
  "post_Free",
  async ({ articleContent, title }: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.36.112.187:8080/api/v1/posts?category=free",
        { articleContent, title },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      alert("게시글 등록에 성공하셨습니다.");
      return response.data;
    } catch (e: any) {
      alert("게시글 등록에 실패하였습니다.");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const getFree = createAsyncThunk<CommunityState, any>(
  "get_Free",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/posts?category=free"
      );

      return response.data;
    } catch (e: any) {
      alert("불러오기 실패");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const getRecruit = createAsyncThunk<CommunityState, any>(
  "Get_Recruit",
  async (community: CommunityState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/posts?category=recruit"
      );
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      alert("불러오기 실패");
      return e.rejectWithValue(e.response.data);
    }
  }
);

export const postRecruit = createAsyncThunk<CommunityState, any>(
  "post_Recruit",
  async ({ email, password }: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.36.112.187:8080/api/v1/posts?category=recruit",
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      alert("게시글 등록에 성공하셨습니다.");
      return response.data;
    } catch (e: any) {
      alert("게시글 등록에 실패하였습니다.");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const getReview = createAsyncThunk<CommunityState, any>(
  "Get_Review",
  async (festival: CommunityState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/posts?category=review"
      );
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      alert("불러오기 실패");
      return e.rejectWithValue(e.response.data);
    }
  }
);

export const postReview = createAsyncThunk<CommunityState, any>(
  "post_Revirw",
  async ({ email, password }: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.36.112.187:8080/api/v1/posts?category=review",
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      alert("게시글 등록에 성공하셨습니다.");
      return response.data;
    } catch (e: any) {
      alert("게시글 등록에 실패하였습니다.");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
