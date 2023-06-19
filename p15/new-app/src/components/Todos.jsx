import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import axios from "axios"
import TodoItem from './TodoItem'

const getData=()=>{
  return  axios.get(`http://localhost:8080/posts`)
}

const Todos = () => {
    const [todo,setTodo]=useState([])

useEffect(()=>{
 getData().then((res)=>{
    console.log(todo)
    setTodo(res.data)
 })
},[])

    const handleAdd=(text)=>{
       

        axios.post(`http://localhost:8080/posts`,{
          
                title:text,
                status:"Not Done"
            
        })
    }

    const handletoggle=(id)=>{
       
        axios.patch(`http://localhost:8080/posts/${id}`,{
            status:"Done"
        })
    }
  return (
    <div>
        <AddTodo  handleAdd={handleAdd}  />

        <div>
            {todo.map((el)=>(
                <TodoItem  id={el.id} title={el.title} status={el.status} handleToggle={handletoggle} />
            ))}
        </div>
    </div>
  )
}

export default Todos