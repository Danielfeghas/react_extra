import React, { useState } from 'react'
import { useEffect } from 'react'

const Dashboard =  () => {
  const [userEmail, setUserEmail]= useState("")

  useEffect(()=>{
    const storedEmail =  localStorage.getItem("email")
    setUserEmail(storedEmail)
 
  },[])

  return (
    <>
    <div>Dashboard</div>
    <h1>welcome, {userEmail}</h1>
    </>
    
  )
}

export default Dashboard