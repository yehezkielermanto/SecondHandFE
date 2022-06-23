import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store";

import App from "./App";
// For Profile Page
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CariBarang from "./pages/CariBarang";
// import NotFound from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        {/* Endpoint  for user profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/caribarang" element={<CariBarang />} />
        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId="68980823363-57tmdid7nhefj7abt7l5u1jcbfdddg2p.apps.googleusercontent.com">
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path="/register"
          element={
            <GoogleOAuthProvider clientId="68980823363-57tmdid7nhefj7abt7l5u1jcbfdddg2p.apps.googleusercontent.com">
              <Register />
            </GoogleOAuthProvider>
          }
        />

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
