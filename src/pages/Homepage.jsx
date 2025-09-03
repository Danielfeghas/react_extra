import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthContexts'
import FeaturedProducts from './FeaturedProducts';


const Homepage = () => {
  const {user, signup} = useContext(authContext)
  console.log(user);
  
  return (
    <>
      <div style={{border: "1px solid",
        height: "30vh"
    }}>Homepage</div>

      <FeaturedProducts/>
    </>
    
  )
}

export default Homepage