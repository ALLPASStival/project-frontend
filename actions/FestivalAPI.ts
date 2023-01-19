import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import CommunityState from "../reducers/community";

//축제정보 불러오기
export const getFree = createAsyncThunk<CommunityState, any>(
  "Get_FreeList",
  async (festival: CommunityState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/post/lists/free"
      );
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

export const getRecruit = createAsyncThunk<CommunityState, any>(
  "Get_Recruit",
  async (community: CommunityState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/post/lists/recruit"
      );
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

export const getReview = createAsyncThunk<CommunityState, any>(
  "Get_Review",
  async (festival: CommunityState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/post/lists/review"
      );
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);
