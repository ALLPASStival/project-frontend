import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { FestivalState } from "../reducers/festival";
import { CommentState } from "../reducers/comment";

//개별 축제정보 불러오기
export const getEachFestival = createAsyncThunk<FestivalState, any>(
  "GET_EachFestival",
  async (festival: FestivalState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/festivals"
      );

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

function getRandNumber() {
  const ranNum = Math.floor(Math.random() * 50 + 1);
  return ranNum;
}

//축제 리스트 조회
export const getFestival = createAsyncThunk<FestivalState, any>(
  "GET_Festival",
  async (festival: FestivalState) => {
    try {
      const response = await axios.get(
        `http://3.36.112.187:8080/api/v1/festivals?page=${getRandNumber()}`,
        { params: { page: getRandNumber() } }
      );

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

//축제 리뷰 랭킹
export const getFestivalReview = createAsyncThunk<FestivalState, any>(
  "GET_FestivalReview",
  async (festival: FestivalState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/festivals/ranks/reviews"
      );

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

//축제 좋아요 랭킹
export const getFestivalGood = createAsyncThunk<FestivalState, any>(
  "GET_FestivalGood",
  async (festival: FestivalState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/festivals/ranks/likes"
      );
      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

export const post = createAsyncThunk<FestivalState, any>(
  "post",
  async (thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.36.112.187:8080/api/v1/festivals/6/likes",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      alert("성공.");
      return response.data;
    } catch (e: any) {
      alert("실패.");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
