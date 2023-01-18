import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { getEachFestival, getFestival } from "../actions/FestivalAPI";
//
export interface FestivalState {
  festival: object;
  festivalId: string;
  author: string;
  etc: string;
  festivalName: string;
  startDate: string;
  finishDate: string;
  holdingVenue: string;
  homepAddr: string;
  hostInst: string;
  hostOrg: string;
  streetAddr: string;
  telNum: string;

  error: any;
}

const initialState: FestivalState = {
  festival: {},
  festivalId: "",
  author: "",
  etc: "",
  festivalName: "",
  startDate: "",
  finishDate: "",
  holdingVenue: "",
  homepAddr: "",
  hostInst: "",
  hostOrg: "",
  streetAddr: "",
  telNum: "",

  error: "",
};

export const festivalSLice = createSlice({
  name: "festival",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getFestival.fulfilled, (state, action) => {
        state.festival = action.payload.festival;
      })
      .addCase(getEachFestival.fulfilled, (state, action) => {
        state.author = action.payload.author;
        state.festivalName = action.payload.festivalName;
        state.festivalId = action.payload.festivalId;
        state.startDate = action.payload.startDate;
        state.finishDate = action.payload.finishDate;
        state.streetAddr = action.payload.streetAddr;
        state.telNum = action.payload.telNum;
      }),
});

export default festivalSLice;
