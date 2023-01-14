// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
//
// import { FestivalState } from "../reducers/festival";
//
// //축제정보 불러오기
// export const getFestival = createAsyncThunk<FestivalState, any>(
//   "GET_FESTIVAL",
//   async (festival: FestivalState) => {
//     try {
//       const response = await axios.get(
//         "http://3.36.112.187:8080/api/festivals/{축제id}"
//       );
//       console.log(response.data);
//
//       return response.data;
//     } catch (e: any) {
//       return e.rejectWithValue(e.response.data);
//     }
//   }
// );
