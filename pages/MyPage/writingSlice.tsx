import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { preURL } from "../../preURL/preURL";

interface InfoAtt {
   cat:string, title:string , like: number, comment: number, place: string, time: string, size:string
}

// Action
export const writingFes = createAsyncThunk <InfoAtt, any>("users/writingFes", async (userId, thunkAPI) => {
    try{
        const res = await axios.get(preURL.preURL+ "/api/users/myposts"+userId)
        console.log("❕유저가 작성한 글 조회❕ ", res.data);
        return res.data;
    } catch (e) {
        console.error("⚠️ 유저가 작성한 글 조회 ⚠️ ", e);
        return thunkAPI.rejectWithValue(e);

    }
})

  export const writingSlice = createSlice({
    name: "writing",
    initialState: {
        data: [],
        loading: false,
        error: false,
      },
    reducers: {    },
    extraReducers: (builder) => {
      builder
        // 통신 중
        .addCase(writingFes.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        // 통신 성공
        .addCase(writingFes.fulfilled, (state, { payload }) => {
          state.error = false;
          state.loading = false;
        //   state.data = payload;
        })
        // 통신 에러
        .addCase(writingFes.rejected, (state, { payload }) => {
        //   state.error = payload;
          state.loading = false;
        });
    },
  });

  export const {} = writingSlice.actions;

export default writingSlice.reducer;