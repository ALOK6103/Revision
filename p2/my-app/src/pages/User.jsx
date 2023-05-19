import React, { useState } from 'react'
import axios from "axios"
const User = () => {
   const [name,setName]=useState("")
   const [category,setCategory]=useState("")
   const [difficulty,setDifficulty]=useState("")
   const [number,setNumber]=useState(0)
   
    const handlesubmit=async()=>{
       let obj={
        name,
        category,
        difficulty,
        number
       }

       console.log(obj)

       await fetch("https://practice-data.onrender.com/users",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
          "Content-Type":"application/json"
        }
       })

       

       window.location.href="/quiz"
       
    }
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"50px"}}>
        <input style={{height:"40px"}} type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <select style={{height:"40px"}} value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Sports">Sports</option>
            <option value="Geography">Geography</option>
        </select>
        <select style={{height:"40px"}} value={difficulty} onChange={(e)=>setDifficulty(e.target.value)} >
            <option value="">Select Difficulty</option>
            <option value="medium">medium</option>
            <option value="easy">easy</option>
            <option value="hard">hard</option>
        </select>
        <input style={{height:"40px"}} type='number' placeholder='Number of question' value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button style={{height:"40px"}} onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default User