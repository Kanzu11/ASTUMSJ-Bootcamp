import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogCards = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const [bookmarked, setBookmarked] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogDetails(storedBlogs);
  }, []);

  const handleBookmark = (blog) => {
    const alreadyBookmarked = bookmarked.some(b => b.id === blog.id);
    const updated = alreadyBookmarked
      ? bookmarked.filter(b => b.id !== blog.id)
      : [...bookmarked, blog];

    setBookmarked(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  return (
    <div className='blog-details'>
      <h2 className='blog-details-title'>Recent Blog Posts</h2>
      <div className='blog-details-container'>
        {blogDetails.length === 0 ? (
          <p>No blog posts found. Add some using the form.</p>
        ) : (
          blogDetails.map((blog, index) => {
            const isBookmarked = bookmarked.some(b => b.id === blog.id);
            return (
              <Link 
                to={`/details/${blog.id}`}
                className="blog-link"
                key={blog.id}
              >
                <div className='blog-post'>
                  <button
                    className='bookmark-btn'
                    onClick={(e) => {
                      e.preventDefault(); // prevent link navigation
                      handleBookmark(blog);
                    }}
                  >
                    {isBookmarked ? '🔖' : '➕'}
                  </button>
                  <h2>{index + 1}. {blog.title}</h2>
                  <p>Description: {blog.description}</p>
                  <p>Author: {blog.author}</p>
                  <p>Date: {blog.createdAt}</p>
                  <hr />
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BlogCards;
