import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { getMap } from "../actions/Map";

export interface MapState {
  map: string;
  error: any;
}

const initialState: MapState = {
  map: "",
  error: "",
};

export const MapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //지도 정보 불러오기
      .addCase(getMap.fulfilled, (state, action) => {
        state.map = action.payload.map;
      }),
});

export default MapSlice;
