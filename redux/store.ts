import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testSlice from "../reducers/TestSlice";

export const store = configureStore({
  reducer: {
    counter: testSlice,
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