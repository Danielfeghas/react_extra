import React from 'react'
import Homepage from './pages/Homepage'

const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <p>Page not found</p>
        <a href="/"><Homepage/></a>
    </div>
  )
}

export default NotFound