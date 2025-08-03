import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { bookmarkedAtom } from '../atoms/BookmarkJotai.jsx'
import { Link } from 'react-router-dom';

const Bookmarks = () => {
  const [bookmarked, setBookmarked] = useAtom(bookmarkedAtom);

  useEffect(() => {
    const saved = localStorage.getItem('bookmarks');
    setBookmarked(saved ? JSON.parse(saved) : []);
  }, [setBookmarked]);

  return (
    <div className='bookmarks'>
      <h1 className='blog-bookmark-title'>Bookmarked Blogs</h1>
      <div className='book-flex'>
        {bookmarked.length === 0 ? (
          <p>No bookmarks found.</p>
        ) : (
          bookmarked.map((blog, index) => (
            <Link 
                to={`/details/${blog.id}`}
                className="blog-link"
                key={blog.id}
              >
            <div className='bookmark-post' key={blog.id}>
              <h2>{index + 1}. {blog.title}</h2>
              <p>Description: {blog.description}</p>
              <p>Author: {blog.author}</p>
              <p>Date: {blog.createdAt}</p>
              <hr />
            </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmarks;

