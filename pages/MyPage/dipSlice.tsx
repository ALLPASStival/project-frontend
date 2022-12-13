import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { preURL } from "../../preURL/preURL";

interface InfoAtt {
//    cat:string, title:string , like: number, comment: number, place: string, time: string, size:string
}

// Action
export const dipFes = createAsyncThunk <InfoAtt, any>("users/dipFes", async (userId, thunkAPI) => {
    try{
        const res = await axios.get(preURL.preURL+ "/api/users/myfestivals"+userId)
        console.log("❕유저가 찜한 축제 조회❕ ", res.data);
        return res.data;
    } catch (e) {
        console.error("⚠️ 유저가 찜한 축제 조회 ⚠️ ", e);
        return thunkAPI.rejectWithValue(e);

    }
})

  export const dipSlice = createSlice({
    name: "dipping",
    initialState: {
        data: [],
        loading: false,
        error: false,
      },
    reducers: {    },
    extraReducers: (builder) => {
      builder
        // 통신 중
        .addCase(dipFes.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        // 통신 성공
        .addCase(dipFes.fulfilled, (state, { payload }) => {
          state.error = false;
          state.loading = false;
        //   state.data = payload;
        })
        // 통신 에러
        .addCase(dipFes.rejected, (state, { payload }) => {
        //   state.error = payload;
          state.loading = false;
        });
    },
  });

  export const {} = dipSlice.actions;

export default dipSlice.reducer;