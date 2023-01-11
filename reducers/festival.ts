import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { getFestival } from "../actions/FestivalAPI";

export interface FestivalState {
  festival: {
    name: string;
    place: string;
    day: string;
    time: string;
    price: string;
    id: number;
  };
  error: any;
}

const initialState: FestivalState = {
  festival: {
    name: "",
    place: "",
    day: "",
    time: "",
    price: "",
    id: 0,
  },
  error: "",
};

export const festivalSLice = createSlice({
  name: "festival",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getFestival.fulfilled, (state, action) => {
      state.festival = action.payload.festival;
    }),
});

export default festivalSLice;
