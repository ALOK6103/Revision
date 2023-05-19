import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Quiz from '../pages/Quiz'
import User from '../pages/User'
import Dashboard from '../pages/Dashboard'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/quiz' element={<Quiz />} />
            <Route path="/" element={<User />} />
            <Route path='/dashboard' element={<Dashboard  />}  />
        </Routes>
    </div>
  )
}

export default AllRoutes