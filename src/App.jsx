import ProfileCard from "./components/ProfileCard"
// react hooks: React Hooks are functions that let you "hook into" React state and lifecycle features from function components. 

// HOOKS: useState, useEffect, useRef, useContext, useReducer
// useState is used to hold a mutable data



import { useState } from "react"
// conditional rendering
function App() {
  const [count, setCount] = useState(1)
  const [isLoggedIn, setLoggedIn] = useState(false)


  const [message, setMessage] = useState("")


  const changeCount = () => {
    setCount((prev) => (prev + 1))
  }

  const handleLogin = () => {
    setLoggedIn((prev) => (!prev))
  }

  // 3 = red, 6 = green, 9 = yellow
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }


  return (
    <>

      <input type="text" onChange={handleMessage} />
      <p style={{
        color: message.length >= 3 && message.length <= 5 ?
               "red" :
                message.length > 5 && message.length < 9 ?
               "blue" :
               message.length >= 9 ?
               "yellow" : 
               ""
      }}>{message}</p>


      <button onClick={changeCount}>Click {count}</button>
      <p >{count < 5 ? "Average" : count > 7 ? "Excellent" : "Poor"}</p>
      <p >{isLoggedIn ? "Welcome" : "PLease login"}</p>

      <button
        onClick={handleLogin}
        style={{
          background: isLoggedIn ? "green" : "red"
        }}>Login</button>
    </>
  )
}

export default App