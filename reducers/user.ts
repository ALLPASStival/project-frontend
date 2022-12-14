import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { addUserAsync } from "../actions/UserAPI";
import axios from "axios";

export interface User {
  isLoggingIn: boolean;
  data: any;
  id: string;
  password: string;
  error: any;
}

const initialState: User = {
  isLoggingIn: false,
  data: [],
  id: "",
  password: "",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
    setLoginForm(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addUserAsync.pending, (state, action) => {
        state.data = null;
        state.isLoggingIn = true;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoggingIn = false;
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

// const delay = (time: number, value: object) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, time);
//   });
//
// export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
//   // throw new Error('비밀번호가 틀렸습니다.');
//   return await delay(500, {
//     userId: 1,
//     nickname: "seongjun",
//   });
// });

export default userSlice;
