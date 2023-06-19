import axios from 'axios'
import React, { useState } from 'react'

const TodoItem = ({id,title,status,handletoggle}) => {
    
  

  



  return (
    <div>
        <h4>{id}</h4>
        <h4>{title}</h4>
        {/* <h4 onClick={handleToggle}>{status}</h4> */}
        <h4 >{status}</h4>
        <button onClick={handletoggle(id)}>Toggle</button>
    </div>
  )
}

export default TodoItem