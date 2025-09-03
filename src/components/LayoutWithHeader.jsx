import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export const LayoutWithHeader = () => {
    // Check if user is sign in
    // navigate ("/signin")
  return (
    <Outlet/>
  )

  return(
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}


export default LayoutWithHeader