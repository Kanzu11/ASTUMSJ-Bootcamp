import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const found = storedBlogs.find(b => String(b.id) === String(id));
    if (found) {
      setBlog(found);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = storedBlogs.filter(b => String(b.id) !== String(id));
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const updatedBookmarks = storedBookmarks.filter(b => String(b.id) !== String(id));
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));

    navigate('/');
  };

  if (!blog) return null;

  const isEditing = location.pathname.endsWith('/edit');

  return (
    <>
      <div className="blog-details-page">
        <h1>{blog.title}</h1>
        <p><strong>Description:</strong> {blog.description}</p>
        <p><strong>Author:</strong> {blog.author}</p>
        <p><i>Content: {blog.content}</i></p>
        <p><strong>Created At:</strong> {blog.createdAt}</p>
        
        {blog.editedAt && (
          <p><strong>Edited At:</strong> {new Date(blog.editedAt).toLocaleString()}</p>
        )}

        <div className="details-actions">
          <button className="edit-btn" onClick={() => navigate('edit')}>🖊</button>
          <Link to="/" className="back-btn">← Back</Link>
          <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
        </div>

        {isEditing && (
          <div className="modal">
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
