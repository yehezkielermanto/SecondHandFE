import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import './public/css/tailwind.css'
import './public/css/style.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import store from './redux/store'
import Protected from './components/Protected'
// For Profile Page
import DaftarJual from './pages/DaftarJual'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import Product from './pages/ProductSeller'
import ProductBuyer from './pages/ProductBuyer'
import UserProfile from './pages/UserProfile'
import Notification from './pages/Notification'
import CategoryTable from './components/CategoryTable'
import NotFound from './pages/404'
import AddProduct from './pages/addProducts'
import BuyerInfo from './components/BuyerInfo'
import BuyerInfoEnd from './components/BuyerInfoEnd'
import ProductPageEdit from './components/ProductPageEdit'
import EditProduct from './pages/EditProducts'
import PreviewEditProduct from './components/PreviewEditPage'

const { REACT_APP_ID } = process.env

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* Endpoint  for user profile */}

        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/daftarjual"
          element={
            <Protected>
              <DaftarJual />
            </Protected>
          }
        />
        {/* mobile notification */}
        <Route path="/notif" element={<Notification />} />
        <Route path="/productPageEdit" element={<ProductPageEdit />} />
        {/* view edit product */}
        <Route
          path="/previewPageEdit"
          element={
            <Protected>
              <PreviewEditProduct />
            </Protected>
          }
        />
        <Route
          path="/user/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/productbuyer"
          element={
            <Protected>
              <ProductBuyer />
            </Protected>
          }
        />
        <Route
          path="/buyerinfo"
          element={
            <Protected>
              <BuyerInfo />
            </Protected>
          }
        />
        <Route path="/buyerinfoend" element={<BuyerInfoEnd />} />
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

        <Route path="/kategori" element={<CategoryTable />} />
        {/* add new products */}
        <Route
          path="/addProduct"
          element={
            <Protected>
              <AddProduct />
            </Protected>
          }
        />

        <Route path="/editProduct" element={<EditProduct />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
