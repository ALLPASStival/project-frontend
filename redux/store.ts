import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testSlice from "../reducers/TestSlice";
import userReducer from "../pages/MyPage/userSlice"
import writingSlice from "@pages/MyPage/writingSlice";

export  const store = configureStore({
  reducer: {
    counter: testSlice,
    user: userReducer,
    wrting: writingSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
