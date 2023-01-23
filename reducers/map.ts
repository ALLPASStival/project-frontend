import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { getMap } from "../actions/Map";

export interface MapState {
  map: any;
  content: any;
  error: any;
  result: any;
}

const initialState: MapState = {
  content: [],
  map: "",
  error: "",
  result: {},
};

export const MapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //지도 정보 불러오기
      .addCase(getMap.fulfilled, (state, action) => {
        state.content = action.payload?.result?.content;
      }),
});

export default MapSlice;
