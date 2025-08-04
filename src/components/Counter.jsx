import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(count)

    }, [count]) // depencies array

    const increment = ()=>{
        setCount(prev => prev + 1)
    }
  return (
    <div style={{marginTop: "2rem"}}>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter