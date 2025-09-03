import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyProducts from "./components/MyProducts"
import { useState } from "react"
import Users from "./components/Users"
import Homepage from "./pages/Homepage"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import NotFound from "./NotFound"
import Header from "./components/Header"
import SingleProduct from "./components/SingleProduct"
import LayoutWithHeader from "./components/LayoutWithHeader"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Dashboard from "./pages/Dashboard"
import AuthProvider from "./contexts/AuthContexts"
import ProductProvider from "./contexts/ProductContext"
import SingleProductProvider from "./contexts/SingleProductContext"
import ThemeProvider from "./contexts/ThemeContext"
import AddProductForm from "./pages/AddProductForm"
import { Toaster } from "sonner"
import VerifyToken from "./pages/VerifyToken"
import LoginModal from "./components/LoginModal"




// import Counter from "./components/Counter"
// import ProfileCard from "./components/ProfileCard"
// import Form from "./components/Form"
// conditional rendering

// react hooks: React Hooks are functions that let you "hook into" React state and lifecycle features from function components. 

// HOOKS: useState, useEffect, useRef, useContext, useReducer
// useState is used to hold a mutable data
// protected route


// STATE MANAGEMENT
// local state
// global state

//achiving global state, this are the packages to install=> 
// Context api,
//  redux, 
//zustand



function App() {


  return (
    <>

      {/* <MyProducts /> */}
      {/* <Counter /> */}
      {/* <Users /> */}
      {/* <Form/> */}
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <ThemeProvider>

              <SingleProductProvider>
                <Header />
                <LoginModal/>
                <Toaster richColors position="bottom-left" closeButton/>
                <Routes>

                  <Route>
                    <Route element={<LayoutWithHeader />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/contact" element={<Contact />} />
                  </Route>

                  <Route path="/Myproducts" element={<MyProducts />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/Signin" element={<Signin />} />
                  <Route path="/addproductionform" element={<AddProductForm/>} />
                  <Route path="/Myproducts/:id" element={<SingleProduct />} />
                  <Route path = "/auth-notifier" element= {<AuthProvider/>}/>
                  <Route path = "/verify/:token" element ={<VerifyToken/>}/>

                  <Route>
                    <Route element={<ProtectedRoutes />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </SingleProductProvider>
            </ThemeProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>

    </>
  )
}

export default App