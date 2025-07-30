import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const existingBlog = blogs.find((b) => String(b.id) === String(id));
    if (existingBlog) {
      setBlog(existingBlog);
    } else {
      alert('Blog not found!');
      navigate('/');
    }
  }, [id, navigate]);

  const handleClose = () => navigate(`/details/${id}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedBlog = {
      ...blog,
      title: form[0].value,
      author: form[1].value,
      description: form[2].value,
      content: form[3].value,
      createdAt: form[4].value,
      editedAt: new Date().toISOString()
    };

    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = blogs.map((b) =>
      b.id === updatedBlog.id ? updatedBlog : b
    );

    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    alert('Blog updated successfully!');
    navigate(`/details/${id}`);
  };

  if (!blog) return null;

  return (
    <div className="form-container modal">
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="title-form"><h2>Edit Blog</h2></div>
        <input type="text" defaultValue={blog.title} required />
        <input type="text" defaultValue={blog.author} required />
        <textarea defaultValue={blog.description} required></textarea>
        <textarea defaultValue={blog.content} required></textarea>
        <input type="date" defaultValue={blog.createdAt} required />
        <div className="buttons">
          <button type="button" className="close-btn" onClick={handleClose}>
            Close
          </button>
          <button type="submit" className="submit-btn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
