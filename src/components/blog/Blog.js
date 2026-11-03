import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import "./blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5e9278be3100005b00462cbd")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log("Error fetching blog posts:", err));
  }, []);

  // محاسبه پست‌های صفحه فعلی
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h2>Our Blog</h2>
      {currentPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h4>{post.title || `Blog Post ${index + 1}`}</h4>
          <p>{post.body || post.description}</p>
        </div>
      ))}
      <div className="pagination">
        {posts.length > postsPerPage &&
          Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
            (_, idx) => (
              <Button key={idx} handleClick={() => setCurrentPage(idx + 1)}>
                {idx + 1}
              </Button>
            ),
          )}
      </div>
    </div>
  );
};

export default Blog;
