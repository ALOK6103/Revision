import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)


    const handleCount=()=>{
        let intervalId=setInterval(()=>{
          setCount((prev)=>prev+1)
        },1000)
    }
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={handleCount}>start</button>
    </div>
  )
}

export default Counter