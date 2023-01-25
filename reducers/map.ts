import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { getMap } from "../actions/Map";

export interface MapState {
  result: any;
  content: any;
  map: any;
  error: any;
}

const initialState: MapState = {
  result: {},
  content: [],
  map: "",
  error: "",
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getMap.fulfilled, (state, action) => {
      state.map = action.payload?.result?.content;
    }),
});

export default mapSlice;
