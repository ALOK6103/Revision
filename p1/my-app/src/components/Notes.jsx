import React, { useEffect, useState } from 'react'
import AddNotes from './AddNotes'
import axios from 'axios'
import NotesItem from './NotesItem'
import Pagination from './Pagination'

const getData=async(page=1)=>{
 return await fetch(`https://practice-data.onrender.com/tasks?_page=${page}&_limit=3`)
 .then((res)=>res.json())
 
}

const addTodos=(todo)=>{
  return fetch("https://practice-data.onrender.com/tasks",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(todo)
  })
}
const Notes = () => {
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)

  useEffect(()=>{
   handleTask()
  
  },[page])

 

  const handleTask=async()=>{
 
 return  getData(page).then((res)=>{
      console.log(res)
      setData(res)
    }).catch((err)=>{
      console.log(err)
    })
    
  }

  const addTask=({title,description})=>{
      const item={
        title:title,
        description:description
      }

      addTodos(item).then((res)=>{
        console.log(res)
        handleTask()
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  
  return (
    <div>
      <AddNotes addTask={addTask} />

      {
       data && data.map((el,i)=>(
          <NotesItem key={el.id} title={el.title} description={el.description} />
        ))
      }

      <Pagination total={10} current={page} onChange={(value)=>setPage(value)} />
     
    </div>
  )
}

export default Notes