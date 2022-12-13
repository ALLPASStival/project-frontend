import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { preURL } from "../../preURL/preURL";

interface InfoAtt {
    photo: object,
    nickname: string,
    id: string
}

// Action
export const getUserInfo = createAsyncThunk <InfoAtt, any>("users/getUserInfo", async (userId, thunkAPI) => {
    try{
        const res = await axios.get(preURL.preURL+ "/api/users/"+userId)
        console.log("❕유저 정보 조회❕ ", res.data);
        return res.data;
    } catch (e) {
        console.error("⚠️ 유저 정보 조회 ⚠️ ", e);
        return thunkAPI.rejectWithValue(e);

    }
})


  export const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        data: [],
        error: false,
      },
    reducers: {    },
    extraReducers: (builder) => {
      builder
        // 통신 중
        .addCase(getUserInfo.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        // 통신 성공
        .addCase(getUserInfo.fulfilled, (state, { payload }) => {
          state.error = false;
          state.loading = false;
        //   state.data = payload;
        })
        // 통신 에러
        .addCase(getUserInfo.rejected, (state, { payload }) => {
        //   state.error = payload;
          state.loading = false;
        });
    },
  });

  export const {} = userSlice.actions;

export default userSlice.reducer;