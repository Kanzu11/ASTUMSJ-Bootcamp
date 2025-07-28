import React from 'react'
import { Outlet } from 'react-router-dom'

const CreateBlog = () => {
  return (
    <div>
      <h1>Create blog</h1>
      <Outlet/>
    </div>
  )
}

export default CreateBlog