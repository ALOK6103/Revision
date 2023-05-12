import React, { useEffect, useState } from 'react'
import axios from "axios"

const AddNotes = ({addTask}) => {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")

  

  const handleClick=(e)=>{
    let tit=e.target.value
    let des=e.target.value

    setTitle(tit)
    setDescription(des)
     
  }

  const handleChange=()=>{
       addTask({title,description})
  }
  return (
    <div>
      <input type="text" placeholder='title'  onChange={handleClick}  />
      <input type="text" placeholder='description'   onChange={handleClick} />
      <button onClick={handleChange} >Submit</button>
    </div>
  )
}

export default AddNotes