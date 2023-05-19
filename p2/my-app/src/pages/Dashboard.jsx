import axios from 'axios'
import React, { useEffect, useState } from 'react'
const getData=async()=>{
    return fetch("https://practice-data.onrender.com/users")
    .then((res)=>res.json())
}
const Dashboard = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
handleData()
    },[])

    const handleData=async()=>{
       
            getData()
            .then((res)=>{
                setData(res)
            })
            .catch((err)=>{
                console.log(err)
            })
       
    }

    console.log(data)
  return (
    <div>
       {data.map((el)=>(
        <div style={{border:"1px solid",gap:"10px"}}>
            <h4>{el.name}</h4>
            <p>{el.category}</p>
            <p>{el.difficulty}</p>
        </div>
       ))}
    </div>
  )
}

export default Dashboard