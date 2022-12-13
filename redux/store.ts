import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testSlice from "../reducers/TestSlice";
import userReducer from "../pages/MyPage/slice"

export  const store = configureStore({
  reducer: {
    counter: testSlice,
    user: userReducer,
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
