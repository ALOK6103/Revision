import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const Callbackhook = () => {
    const [count,setCount]=useState(0)
    const [todos,setTodos]=useState([])

    // const addTodo=()=>{
    //     setTodos((prev)=>[...prev,`new Entry`])
    // }

    const addTodo=useCallback(()=>{
        setTodos((prev)=>[...prev,`new Entry`])
    },[todos])

    const handleCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
    <Todos   todos={todos}    addTodo={addTodo} />

    <div>
        {count}
        <button onClick={handleCount}>increment </button>
    </div>
    </div>
  )
}

export default Callbackhook