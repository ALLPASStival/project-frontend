import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { preURL } from "../../preURL/preURL";

interface InfoAtt {
    photo: object,
    nickname: string,
    id: string
}

// Action
export const getFesInfo = createAsyncThunk <InfoAtt, any>("schedule/getFesInfo", async (fesId, thunkAPI) => {
    try{
        const res = await axios.get(preURL.preURL+ "/api/festivals/"+fesId)
        console.log("❕축제 정보 조회❕ ", res.data);
        return res.data;
    } catch (e) {
        console.error("⚠️ 축제 정보 조회 ⚠️ ", e);
        return thunkAPI.rejectWithValue(e);

    }
})

  export const infoSlice = createSlice({
    name: "info",
    initialState: {
        data: [],
        loading: false,
        error: false,
      },
    reducers: {    },
    extraReducers: (builder) => {
      builder
        // 통신 중
        .addCase(getFesInfo.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        // 통신 성공
        .addCase(getFesInfo.fulfilled, (state, { payload }) => {
          state.error = false;
          state.loading = false;
        //   state.data = payload;
        })
        // 통신 에러
        .addCase(getFesInfo.rejected, (state, { payload }) => {
        //   state.error = payload;
          state.loading = false;
        });
    },
  });

  export const {} = infoSlice.actions;

export default infoSlice.reducer;