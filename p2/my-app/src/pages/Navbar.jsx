import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",margin:"auto"}}>
        <Link to="/">User Form</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/quiz">Quiz</Link>
    </div>
  )
}

export default Navbar