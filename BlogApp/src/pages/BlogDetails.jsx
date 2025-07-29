import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const found = storedBlogs.find(b => String(b.id) === String(id));
    if (found) {
      setBlog(found);
    } else {
      navigate('/'); // redirect if not found
    }
  }, [id, navigate]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    // Remove from blogs
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = storedBlogs.filter(b => String(b.id) !== String(id));
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    // Also remove from bookmarks
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const updatedBookmarks = storedBookmarks.filter(b => String(b.id) !== String(id));
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));

    // Redirect to home
    navigate('/');
  };

  if (!blog) return null;

  return (
    <div className="blog-details-page">
      <h1>{blog.title}</h1>
      <p><strong>Description:</strong> {blog.description}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><i>content:{blog.content}</i></p>
      <p><strong>Date:</strong> {blog.createdAt}</p>

      <div className="details-actions">
        <Link to="/" className="back-btn">← Back</Link>
        <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default BlogDetails;
