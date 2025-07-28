import React from 'react'
import { NavLink, useNavigate, } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1>Blog</h1>
        <ul>
           <NavLink className='links' to="/"><li>Home</li></NavLink>
            <NavLink className='links' to="/edit"><li>Edit</li></NavLink>
            <NavLink className='links' to="/bookmarks"><li>Bookmarks</li></NavLink>
            <NavLink className='links' to="/details/detail"><li>Details</li></NavLink>
        </ul>
        <NavLink to="/create/form"><button onClick={() => navigate('/create/form')} className="btn">Post a Blog</button></NavLink>
    </div>
  )
}


export default Navbar