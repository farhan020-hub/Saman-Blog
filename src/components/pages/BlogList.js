import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bloglist.css';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://djsonserved.glitch.me/blog') // Adjust URL as per your setup
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    
    <div className="containers bg-wheat">
    <hr />
      <h2>Blog List</h2>
      <hr /><br />
        <div className="card-containers bg-wheat">
          {posts.map(post => (
            <div key={post.id} className="col-md-4 mb-3">
              <div className="card bg-black">
                <img src={post.image} alt={post.title} className="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-primary">{post.title}</h5>
                  <p className="card-text">{post.briefDescription}</p>
                  <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
}

export default BlogList;