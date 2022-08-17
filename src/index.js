import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Spinner from "react-spinkit";
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import createPersistPlugin, { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/es/integration/react";
import storage from "redux-persist/lib/storage";
import models from "./models";
// import { count } from "./models/counter";

const persistPlugin = createPersistPlugin({
  key: "root",
  storage,
  version: 2,
  whitelist: ["auth"],
});

const store = init({
  models,
  plugins: [persistPlugin],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={getPersistor()}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
