import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import './blog.css';

function Blog() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    if (postId) {
      fetch(`https://djsonserved.glitch.me/blog/${postId}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [postId]);

  if (!post || Object.keys(post).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='blog-container'>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <h1>{post.title}</h1>
      <img src={post.image} alt={`Post ${postId}`} />
      <p>{post.articleText}</p>
    </div>
  );
}

export default Blog;

