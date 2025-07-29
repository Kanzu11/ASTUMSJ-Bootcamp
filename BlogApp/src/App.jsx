// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogCards from './components/BlogCards';
import BlogForm from './components/BlogForm';
import EditBlog from './pages/EditBlog';
import Bookmarks from './pages/Bookmarks';
import BlogDetails from './pages/BlogDetails';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<BlogCards />} />
            <Route path="create/form" element={<BlogForm />} />
          </Route>
          <Route path="/edit" element={<EditBlog />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/details/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
