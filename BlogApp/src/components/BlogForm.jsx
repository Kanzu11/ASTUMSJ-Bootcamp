import React from 'react';
import {  useNavigate } from 'react-router-dom';


const BlogForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Retrieve existing blogs
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Create new blog with unique ID
    const blog = {
      id: blogs.length > 0 ? blogs[blogs.length - 1].id + 1 : 1,
      title: form[0].value,
      author: form[1].value,
      description: form[2].value,
      content: form[3].value,
      createdAt: form[4].value,
    };

    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    form.reset();
    onsubmit = navigate('/');
    alert('Blog submitted successfully!');
  };

  return (
    <div className='form-container'>
      <form className="blog-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Author" required />
        <textarea placeholder="Description" required></textarea>
        <textarea placeholder="Content" required></textarea>
        <input type="date" placeholder="Created At" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
