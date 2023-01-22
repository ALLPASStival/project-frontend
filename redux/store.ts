import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import userReducer from "../pages/MyPage/userSlice";
import writingSlice from "../pages/MyPage/writingSlice";
import dipSlice from "../pages/MyPage/dipSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import testSlice from "../reducers/TestSlice";
import { registerSlice } from "../reducers/user";
import festivalSLice from "../reducers/festival";
import communitySlice from "../reducers/community";
import mapSlice from "../reducers/map";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["register"], // 해당 reducer만 저장
};

const rootReducer = combineReducers({
  counter: testSlice,
  register: registerSlice.reducer,
  festival: festivalSLice.reducer,
  community: communitySlice.reducer,
  map: mapSlice.reducer,
  user: userReducer,
  dipping: dipSlice,
  writing: writingSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
