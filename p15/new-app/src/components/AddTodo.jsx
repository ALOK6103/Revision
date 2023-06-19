import React, { useState } from 'react'

const AddTodo = ({handleAdd}) => {
    const [text,setText]=useState("")
    // const [status,setStatus]=useState("")

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleSubmit=()=>{
        console.log(text)
       handleAdd(text)
    }

  return (
    <div>
        <input type='text' placeholder='write something' onChange={handleChange} />
        <button onClick={handleSubmit}>Add Todo</button>
    </div>
  )
}

export default AddTodo