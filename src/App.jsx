import Counter from "./components/Counter"
import MyProducts from "./components/MyProducts"
import ProfileCard from "./components/ProfileCard"
// react hooks: React Hooks are functions that let you "hook into" React state and lifecycle features from function components. 

// HOOKS: useState, useEffect, useRef, useContext, useReducer
// useState is used to hold a mutable data



import { useState } from "react"
import Users from "./components/Users"
// conditional rendering
function App() {


  return (
    <>

      {/* <MyProducts />
      <Counter /> */}
      <Users />
    </>
  )
}

export default App