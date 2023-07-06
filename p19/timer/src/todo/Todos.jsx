import React from 'react'

const Todos = ({todos,addTodo}) => {
    console.log("todo rendered")
  return (
    <div>
        <h2>Todo App</h2>
     {todos.map((todo,index)=>(
        <p key={index}>{todo+index}</p>
     ))}
     
     <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default Todos