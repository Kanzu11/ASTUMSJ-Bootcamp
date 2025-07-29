import React, { useEffect, useState } from 'react';

const Bookmarks = () => {
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('bookmarks');
    setBookmarked(saved ? JSON.parse(saved) : []);
  }, []);

  return (
    <div className='bookmarks'>
      <h1 className='blog-bookmark-title'>Bookmarked Blogs</h1>
       <div className='book-flex'>
      {bookmarked.length === 0 ? (
        <p>No bookmarks found.</p>
      ) : (
        bookmarked.map((blog, index) => (
          <div className='bookmark-post' key={blog.id}>
            <h2>{index + 1}. {blog.title}</h2>
            <p>Description: {blog.description}</p>
            <p>Author: {blog.author}</p>
            <p>Date: {blog.createdAt}</p>
            <hr />
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Bookmarks;
