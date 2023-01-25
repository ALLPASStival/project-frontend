import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MapState } from "../reducers/map";

export const getMap = createAsyncThunk<MapState, any>(
  "get_Map",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "http://3.36.112.187:8080/api/v1/festivals/maps"
      );

      return response.data;
    } catch (e: any) {
      alert("불러오기 실패");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
