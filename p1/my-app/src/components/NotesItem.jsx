import React, { useState } from 'react'

const NotesItem = ({el,editNote,deleteNote}) => {
  const [edit,setEdit]=useState(false)
  const [title,setTitle]=useState(el.title)
  const [description,setDescription]=useState(el.description)

  const handleEdit=()=>{
    let payload={title,description}
    editNote(el.id,payload)
  }
  return (
    <>
    <div>
      <h4>{el.title}</h4>
      <p>{el.description}</p>
     
    </div>


    <div style={{display:edit?"block":"none"}}>
      <input type="text" placeholder='title' value={title}  onChange={(e)=>setTitle(e.target.value)}  />
      <input type="text" placeholder='description' value={description}  onChange={(e)=>setDescription(e.target.value)} />
      <button onClick={handleEdit} >Submit</button>
    </div>

    <div>
<button onClick={()=>setEdit(!edit)} >Edit</button>
<button onClick={()=>deleteNote(el.id)}>Delete</button>
    </div>


</>
  )
}

export default NotesItem