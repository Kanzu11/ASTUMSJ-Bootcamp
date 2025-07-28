import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EditBlog from './pages/EditBlog'
import Bookmarks from './pages/Bookmarks'
import BlogDetails from './pages/BlogDetails'
import CreateBlog from './pages/CreateBlog'
import BlogForm from './components/BlogForm'
import BlogCards from './components/BlogCards'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} >
          <Route index element={<BlogCards />} />
          </Route>
          <Route path="/edit" element={<EditBlog />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/details/:id" element={<BlogDetails />} />
          <Route path="/create" element={<CreateBlog />}>
            <Route path="form" element={<BlogForm />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App