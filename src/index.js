import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import './public/css/tailwind.css'
import './public/css/style.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { GoogleOAuthProvider } from '@react-oauth/google'
import store from './redux/store'

import Protected from './components/Protected'
// For Profile Page
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import Product from './pages/ProductSeller'
import UserProfile from './pages/UserProfile'

// import NotFound from "./pages/404";

const options = {
  positions: positions.BOTTOM_CENTER,
  timeout: 4000,
  offset: '30px',
  transitions: transitions.SCALE,
}
const { REACT_APP_ID } = process.env

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          {/* Endpoint  for user profile */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/user"
            element={
              <Protected>
                <UserProfile />
              </Protected>
            }
          />
          <Route
            path="/login"
            element={
              <GoogleOAuthProvider clientId={REACT_APP_ID}>
                <Login />
              </GoogleOAuthProvider>
            }
          />
          <Route
            path="/register"
            element={
              <GoogleOAuthProvider clientId={REACT_APP_ID}>
                <Register />
              </GoogleOAuthProvider>
            }
          />

          {/* 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  </Provider>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
