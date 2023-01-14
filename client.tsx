import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { persistStore } from "redux-persist"; // 추가
import { PersistGate } from "redux-persist/integration/react";

import App from "./layouts/App";

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://AllPasstival"
    : "http://localhost:3090";

export let persistor = persistStore(store); // 추가

render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={<div>로딩중...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.querySelector("#app")
);
