import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import testSlice from "../reducers/TestSlice";
import { registerSlice } from "../reducers/user";
import festivalSLice from "../reducers/festival";

export const store = configureStore({
  reducer: {
    counter: testSlice,
    register: registerSlice.reducer,
    festival: festivalSLice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
