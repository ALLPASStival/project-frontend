import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { FestivalState } from "../reducers/festival";

//개별 축제정보 불러오기
export const getEachFestival = createAsyncThunk<FestivalState, any>(
  "GET_EachFestival",
  async (festival: FestivalState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/festivals"
      );
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

//축제 리스트 조회
export const getFestival = createAsyncThunk<FestivalState, any>(
  "GET_Festival",
  async (festival: FestivalState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/festivals?page=0 "
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

      console.log(response.data);

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

//축제 리뷰 랭킹
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
