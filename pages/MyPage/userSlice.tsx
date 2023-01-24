import { TokenHeader } from "@components/TokenHeader";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { preURL } from "../../preURL/preURL";

interface InfoAtt {
  resultCode: "";
  result: {
    email: string;
    nickname: string;
    profilePicUrl: any;
    gender: any;
    age: any;
  };
}

// Action
export const getUserInfo = createAsyncThunk<InfoAtt, any>(
  "users/getUserInfo",
  async () => {
    try {
      const res = await axios.get(preURL.preURL + "/users", TokenHeader);
      console.log("❕유저 정보 조회❕ ", res.data);
      return res.data;
    } catch (e) {
      console.error("⚠️ 유저 정보 조회 ⚠️ ", e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    resultCode: "",
    result: {
      email: "1234",
      nickname: "1234",
      profilePicUrl: "",
      gender: "",
      age: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 통신 성공
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.resultCode = action.payload.resultCode;
        state.result = action.payload.result;
      })
      // 통신 에러
      .addCase(getUserInfo.rejected, (state, action) => {
        state.resultCode = "error";
      });
  },
});

export default userSlice.reducer;
