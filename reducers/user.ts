import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import {
  addUserAsync,
  getMypost,
  getUserInfo,
  logoutUserAsync,
  setUserAsync,
} from "../actions/UserAPI";

export interface Register {
  isLoggingIn: boolean;
  email: string;
  password: string;
  nickname: string;
  jwt: string;
  error: any;
  result: any;
}

const initialState: Register = {
  isLoggingIn: false,
  email: "",
  password: "",
  nickname: "",
  jwt: "",
  error: "",
  result: {},
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //회원가입
      .addCase(addUserAsync.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.email = action.payload?.result?.email;
        state.password = action.payload.password;
        state.nickname = action.payload.nickname;
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        console.log("error");
        state.error = action.payload;
      })
      //로그인
      .addCase(setUserAsync.pending, (state, action) => {
        console.log("로그인 중");
        state.isLoggingIn = false;
      })
      .addCase(setUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoggingIn = true;
        state.jwt = action.payload?.result?.jwt;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.nickname = action.payload.nickname;
      })
      .addCase(setUserAsync.rejected, (state, action) => {
        console.log("error");
        state.error = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state, action) => {
        console.log("로그아웃 중");
        state.isLoggingIn = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoggingIn = false;
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        console.log("error");
        state.error = action.payload;
      }),
});

export interface InfoAtt {
  resultCode: "";
  result: {
    email: string;
    nickname: string;
    profilePicUrl: any;
    gender: any;
    age: any;
  };
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    resultCode: "",
    result: {
      email: "",
      nickname: "",
      profilePicUrl: "",
      gender: "",
      age: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 통신 성공(유저 정보 조회)
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.resultCode = action.payload.resultCode;
        state.result = action.payload.result;
      })
      // 통신 에러(유저 정보 조회)
      .addCase(getUserInfo.rejected, (state, action) => {
        state.resultCode = "error";
      });
  },
});

export interface PostAtt {
  resultCode: "";
  result: {
    content: [
      {
        postId: number;
        title: string;
        articleContent: string;
        imageUrl: string;
        category: string;
        state: string;
        createdAt: string;
        lastModifiedAt: string;
      }
    ];
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      };
      pageSize: number;
      pageNumber: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalElements: number;
    totalPages: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    first: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
  };
}

export const userPostInitialState = {
  content: [
    {
      postId: 14,
      title: "딸기 축제",
      articleContent: "test",
      imageUrl: "",
      category: "[지역] ",
      state: "onGoing",
      createdAt: "2023-01-21- 07:16:05",
      lastModifiedAt: "2023-01-21- 07:16:05",
    },
  ],
  pageable: {
    sort: {
      sorted: true,
      unsorted: false,
      empty: false,
    },
    pageSize: 20,
    pageNumber: 0,
    offset: 0,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalElements: 1,
  totalPages: 1,
  sort: {
    sorted: true,
    unsorted: false,
    empty: false,
  },
  first: true,
  numberOfElements: 1,
  size: 20,
  number: 0,
  empty: false,
};

const userPostSlice = createSlice({
  name: "post",
  initialState: {
    resultCode: "",
    result: userPostInitialState,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 통신 성공(내가 쓴 글 조회)
      .addCase(getMypost.fulfilled, (state, action) => {
        state.resultCode = action.payload.resultCode;
        state.result = action.payload.result;
      })
      // 통신 에러(내가 쓴 글 조회)
      .addCase(getMypost.rejected, (state, action) => {
        state.resultCode = "error";
      });
  },
});

export { userSlice, registerSlice, userPostSlice };
