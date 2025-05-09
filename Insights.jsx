import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Pagination, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function Insights() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://wps.piquota.com/wp-json/wp/v2/posts?per_page=9&page=${page}`
      );
      setPosts(response.data);

      const totalItems = parseInt(response.headers["x-wp-total"]);
      setTotalPages(Math.ceil(totalItems / 9));

      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  };

  const cardBodyStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <>
      <div
        className="container-fluid px-0"
        style={{
          backgroundImage: `url('assets/Images/pexels-slendyalex-3745234.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "95vh",
        }}
      >
        <div className="row align-items-center h-100 text-white mx-0">
          <div className="col-12 col-md-10">
            <h1
              className="fs-1 fs-md-1"
              style={{
                fontWeight: 600,
                letterSpacing: "2px",
                textAlign: "left",
                color: "white",
                fontSize: "2rem",
              }}
            >
              Stay Informed,
              <br />
              Stay Ahead
              <span className="rectangle1"></span>
            </h1>
            <p
              className="fs-5 fs-md-5 mt-4"
              style={{
                fontWeight: 400,
                textAlign: "left",
                color: "white",
                fontSize: "22px",
                marginBottom: "22px",
              }}
            >
              Explore in-depth analyses, cutting-edge trends, and actionable
              <br /> knowledge curated by industry experts. Our insights empower{" "}
              <br />
              you to make informed decisions and drive success in an <br />
              ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2
          className="text-center mb-2"
          style={{ fontSize: "25px", fontWeight: "600" }}
        >
          Get our updates
          <span class="rectangle1"></span>
        </h2>
        <p
          className="text-center mb-5"
          style={{ fontSize: "40px", fontWeight: "600", color: "black" }}
        >
          Latest News, Blogs & Articles
        </p>

        {loading ? (
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row className="mx-0">
            {posts.map((post) => {
              const featuredImage =
                post?.["yoast_head_json"]?.og_image[0]?.url ||
                "/placeholder-image.jpg";
              return (
                <Col key={post.id} md={4} className="mb-4">
                  <Card style={cardStyle}>
                    <Link to={`/post/${post.id}`}>
                      <Card.Img
                        variant="top"
                        src={featuredImage}
                        alt={post.title.rendered}
                        loading="lazy" // Lazy loading added
                      />
                    </Link>
                    <Card.Body style={cardBodyStyle}>
                      <Link
                        to={`/post/${post.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Card.Title style={{ textAlign: "center" }}>
                          {post.title.rendered}
                        </Card.Title>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}

        <div className="d-flex justify-content-center my-4">
          <Pagination>
            <Pagination.Prev
              onClick={() =>
                setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
              }
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                setCurrentPage(
                  currentPage < totalPages ? currentPage + 1 : currentPage
                )
              }
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default Insights;
