import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Blog() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://wps.piquota.com/wp-json/wp/v2/posts/${id}?_embed`
      );
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching post:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center my-5">Post not found.</div>;
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/placeholder-image.jpg";

  return (
    <div className="container my-5 blog-page">
      <h2 className="text-center mb-5 blog-title">{post.title.rendered}</h2>
      <div className="blog-image-wrapper text-center mb-4">
        <img
          src={featuredImage}
          alt={post.title.rendered}
          className="img-fluid blog-image"
          loading="lazy" // Lazy loading added
        />
      </div>
      <div className="blog-content">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </div>
  );
}

export default Blog;
