import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { FestivalState } from "../reducers/festival";

//축제정보 불러오기
export const getFestival = createAsyncThunk<FestivalState, any>(
  "GET_FESTIVAL",
  async (festival: FestivalState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/festivals/1"
      );
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);

export const getEachFestival = createAsyncThunk<FestivalState, any>(
  "GET_EachFESTIVAL",
  async (festival: FestivalState) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/festivals/전체"
      );
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      return e.rejectWithValue(e.response.data);
    }
  }
);
