import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css"; // Adjust path if necessary
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Importing slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Importing slick theme styles
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';  // Import the arrow icons


const Home = () => {
  const carouselContainerStyleClients = {
    width: "80%",
    margin: "0 auto",
    border: "1px solid #ddd", // Add thin border
    borderRadius: "8px", // Optional: add rounded corners
    padding: "10px", // Optional: add padding inside the border
  };

  const carouselItemStyleClients = {
    padding: "10px",
  };

  const clientLogoStyleClients = {
    width: "100%", // Scale the logo to fit within the container's width
    maxWidth: "180px", // Limit the maximum width of the logo (you can adjust this based on the size you want)
    height: "auto",
    display: "block",
    margin: "0 auto",
    objectFit: "contain", // Ensures the logos maintain their aspect ratio without being distorted
  };

  const clients = [
    { name: "Client 1", logo: "assets/Images/13-300x300.webp" },
    { name: "Client 2", logo: "assets/Images/12-300x300.webp" },
    { name: "Client 3", logo: "assets/Images/11-300x300.webp" },
    { name: "Client 4", logo: "assets/Images/10-300x300.webp" },
    { name: "Client 5", logo: "assets/Images/8-300x300.webp" },
    { name: "Client 6", logo: "assets/Images/6-300x300.webp" },
    { name: "Client 7", logo: "assets/Images/5-300x300.webp" },
    { name: "Client 8", logo: "assets/Images/5-1-300x300.webp" },
    { name: "Client 9", logo: "assets/Images/4-300x300.webp" },
    { name: "Client 10", logo: "assets/Images/4-1-300x300.webp" },
    { name: "Client 11", logo: "assets/Images/3-300x300.webp" },
    { name: "Client 12", logo: "assets/Images/2-1-300x300.webp" },
    { name: "Client 13", logo: "assets/Images/1-300x300.webp" },
    { name: "Client 14", logo: "assets/Images/1-1-300x300.webp" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 logos in a single scroll
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 1500, // Change slides every 3 seconds
    pauseOnHover: true, // Pause the auto-play when the user hovers over the carousel
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 logos on medium-sized screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 logo on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Scroll to Top Functions

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);





  const [activeTab, setActiveTab] = useState("consultancy");

  const tabContent = {
    consultancy: "We spark change by bringing the right configuration of industry insights, leading technologies, top-notch talent, digital transformation practices and most advanced software to unlock new value that fits your specific requirements.",
    design: "We spark change by bringing the right configuration of industry insights, leading technologies, top-notch talent, digital transformation practices and most advanced software to unlock new value that fits your specific requirements.",
    development: "We spark change by bringing the right configuration of industry insights, leading technologies, top-notch talent, digital transformation practices and most advanced software to unlock new value that fits your specific requirements.",
    growth: "We spark change by bringing the right configuration of industry insights, leading technologies, top-notch talent, digital transformation practices and most advanced software to unlock new value that fits your specific requirements.",
  };


  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "“Our company's growth has been exceptional, and we attribute much of that success to our commitment to innovation and collaboration.”",
      name: "Alec Beglarian",
      title: "CEO, Redcappi",
    },
    {
      text: "“The journey we’ve been on has been filled with challenges, but overcoming them has made us stronger and more resilient.”",
      name: "John Doe",
      title: "Founder, Tech Inc.",
    },
    {
      text: "“Building a company is not just about products; it’s about people, culture, and vision.”",
      name: "Jane Smith",
      title: "Co-founder, InnovateX",
    },
    {
      text: "“Success comes from understanding our customers' needs and responding with agility and precision.”",
      name: "Michael Brown",
      title: "President, NextGen Solutions",
    },
  ];

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setQuoteIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
    } else {
      setQuoteIndex((prevIndex) => (prevIndex === quotes.length - 1 ? 0 : prevIndex + 1));
    }
  };


  return (
    <>
      {/* Bottom Left Button */}
      <div>
        {/* Button when scrolling */}
        {isVisible && (
          <button
            className="btn btn-primary position-fixed"
            style={{
              bottom: "20px", // Distance from the bottom
              left: "20px", // Distance from the left
              zIndex: 1050, // Ensures it is above other content
              padding: "4px 10px",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Became a Partner
          </button>
        )}
      </div>

      {/* Scroll to Top */}
      <div>
        {isVisible && (
          <Button
            onClick={scrollToTop}
            className="scroll-to-top btn btn-primary rounded-circle shadow"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              width: "50px",
              height: "50px",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ↑
          </Button>
        )}
      </div>

      {/* Banner Section */}
      <div
        className="container-fluid px-0"
        style={{
          backgroundImage: `url('https://www.fatbit.com/media/webp/s1-Img-1.webp')`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "95vh", // Full viewport height
        }}
      >
        <div className="row align-items-center h-100 text-white mx-0">
          <div className="col-12 col-md-10">
            <h1
              className="fs-1 fs-md-1"
              style={{
                fontWeight: 500, // Increased font weight
                textAlign: "left",
                color: "white",
                fontSize: "2rem", // Adjusted font size for large screens
              }}
            >
              Amplifying operational <br></br>excellence through Agile<br></br>{" "}
              Software Development
              <span className="rectangle1"></span>
            </h1>
            <p
              className="fs-md-5 mt-3"
              style={{
                fontWeight: 300,
                textAlign: "left",
                color: "white",
                fontSize: "20px", // Set paragraph font size to 22px
                marginBottom: "22px", // Added bottom margin to the paragraph
              }}
            >
              We engineer purpose-driven, customer centric outcomes for a global
              <br></br> clientele of startups and enterprises, empowering them
              to grow into<br></br> true-technology enabled leaders.
            </p>

            {/* Button */}
            <a
              href="#"
              className="btn btn-purple btn-lg mt-4"
              style={{
                textAlign: "left",
                borderRadius: "0px",
                fontSize:'16px',
                padding:'10px 35px'
              }}
            >
              Connect with US
            </a>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="container py-5">
        <div className="row mx-0 text-center">
          <div className="col-12">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "40px",
                marginLeft: "10%",
                marginRight: "10%",
              }}
            >
              Led by Our Guiding Principles, We Architect Software Solutions for
              Audacious Possibilities
              <span class="rectanglefullstop"></span>
            </h2>
            <p
              className="lead mt-3"
              style={{
                marginLeft: "15%",
                marginRight: "15%",
                fontWeight:'400'
              }}
            >
              Each one inspires us to stay true to ourselves while delivering
              best results for our clients to achieve different stages of
              digital maturity.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container  py-1">
        <div className="row  mx-0 g-4 d-flex">
          {/* Box 1 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{fontWeight:'600'}}>Build Trust and Be Transparent</h3>
              {/* Purple line below heading */}
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We believe in demonstrating a strong commitment to sustainable,
                responsible business practices. Building trust and working with
                the highest level of transparency is fundamental to who we are.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{fontWeight:'600'}}>Deliver Perfection</h3>
              {/* Purple line below heading */}
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We blend forward-thinking with a practical approach that focuses
                on getting the job done, turning decisions into action and
                delivering outcomes with utmost perfection.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{fontWeight:'600'}}>Drive Innovation</h3>
              {/* Purple line below heading */}
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We collaborate with our clients to drive true innovation - the
                kind that transforms an idea into an industry - enabling them to
                achieve a competitive advantage.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{fontWeight:'600'}}>Exercise Agility</h3>
              {/* Purple line below heading */}
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We exercise agility - a capacity to stay flexible and respond
                rapidly to meet our clients' varying needs. Our cross-trained
                workforce embraces the change to deliver in a changing world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="container py-4">
        <div className="row mx-0 text-center">
          <div className="col-12">
            <h2
              className="fs-2"
              style={{
                fontWeight: 600,
                marginTop: "40px",
              }}
            >
              Driving Digital Transformation Through<br/> Custom Software Development
              <span class="rectanglefullstop"></span>
            </h2>
            <p
              className="lead mt-3"
              style={{
                fontWeight:'500'
              }}
            >
              We implement a prioritization framework, simulate real-life
              scenarios<br/> and put into action the collective intelligence of our
              interdisciplinary<br/> teams to deliver superlative digital
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="container py-4" style={{ marginTop: "-30px" }}>
        <div className="row mx-0 text-center">
          <div className="col-12">
            <img
              src="assets/Images/mobile-process-refined (1).svg" // Replace with the actual image path
              alt="Description of Image"
              className="img-fluid" // This makes the image responsive
              style={{
                maxWidth: "100%", // Ensures the image fits the container
                height: "auto", // Maintains aspect ratio
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column - Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src="assets/Images/modern-equipped-computer-lab.jpg" // Path to the image
              alt="Modern Equipped Computer Lab"
              className="img-fluid" // This makes the image responsive
              style={{
                maxWidth: "100%", // Ensures the image fits the container
                height: "400px", // Maintains aspect ratio
                minHeight: "300px", // This increases the minimum height of the image slightly (modify based on your preference)
                objectFit: "cover", // Ensures the image covers the container area, maintaining aspect ratio
              }}
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="col-12 col-md-6" style={{ paddingLeft: "50px" }}>
            {/* First Heading */}
            <h3>Why Choose Us</h3>
            {/* Purple Line Below First Heading */}
            <div className="purple-underline mb-3"></div>

            {/* Second Heading */}
            <h2
              className="display-4 fs-1"
              style={{ fontWeight: 600, marginTop: "20px" }}
            >
              We Help You Build Your Business and Grow
            </h2>

            {/* Content */}
            <p className="mt-3 fs-5" style={{ textAlign: "left" }}>
              At our company, we focus on providing tailored solutions to meet
              your unique needs. With years of expertise and a commitment to
              excellence, we ensure that every project delivers exceptional
              results, helping you achieve sustainable growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column - Text Content */}
          <div
            className="col-12 col-md-6"
            style={{ paddingLeft: "0px", paddingRight: "50px" }}
          >
            {/* First Heading */}
            <h3 >What We Offer</h3>
            {/* Purple Line Below First Heading */}
            <div className="purple-underline mb-3"></div>

            {/* Second Heading */}
            <h2
              className="display-4 fs-1"
              style={{ fontWeight: 600, marginTop: "20px" }}
            >
              We Have Delivered Diverse Enterprise-Class Solutions
            </h2>

            {/* Content */}
            <p className="mt-3 fs-5" style={{ textAlign: "left" }}>
              Unlocking potential is our forte. We provide transformative
              solutions that elevate businesses. From strategic guidance to
              innovative methodologies, our offerings revolve around amplifying
              your success story.
            </p>
          </div>

          {/* Right Column - Image */}
          <div
            className="col-12 col-md-6 mb-4 mb-md-0"
            style={{ height: "500px", overflow: "hidden" }}
          >
            <img
              src="assets/Images/woman-wearing-virtual-reality-simulator.webp" // Replace with your image path
              alt="Woman Wearing Virtual Reality Simulator"
              className="img-fluid" // This makes the image responsive
              style={{
                width: "100%", // Ensures the image fills the container
                height: "100%", // Makes the image fill the height of the container
                objectFit: "cover", // Ensures the image covers the container area, maintaining aspect ratio
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#1a1a1a", padding: "0" }}
      >
        {/* Heading */}
        <div className="row mx-0 text-center">
          <div className="col-12">
            <h2
              className="display-4 fs-4 text-white"
              style={{ fontWeight: 400 }}
            >
              Our Services
            </h2>
            <p
              className="lead mt-3 fs-1 text-white"
              style={{ fontWeight: 500 }}
            >
              We provide Impactful IT Solutions
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row mx-0 mt-5 justify-content-center">
          {/* 1st Card */}
          <div className="col-12 col-md-3 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ borderRadius: "15px", overflow: "hidden" }} // Added borderRadius
            >
              <img
                src="assets/Images/close-up-hands-business-concept.jpg"
                alt="Digital Consulting & Strategy Development"
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "200px",
                }}
              />
              <div
                className="card-body d-flex align-items-center justify-content-center"
                style={{
                  minHeight: "120px",
                }}
              >
                <h4 className="text-center mb-0">
                  <a
                    href="#"
                    className="text-dark fs-5"
                    style={{ textDecoration: "none" }}
                  >
                    Digital Consulting & Strategy Development
                  </a>
                </h4>
              </div>
            </div>
          </div>

          {/* 2nd Card */}
          <div className="col-12 col-md-3 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ borderRadius: "15px", overflow: "hidden" }} // Added borderRadius
            >
              <img
                src="assets/Images/representation-user-experience-interface-design-1.jpg"
                alt="Data and Visualization Engineering"
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "200px",
                }}
              />
              <div
                className="card-body d-flex align-items-center justify-content-center"
                style={{
                  minHeight: "120px",
                }}
              >
                <h4 className="text-center mb-0">
                  <a
                    href="#"
                    className="text-dark fs-5"
                    style={{ textDecoration: "none" }}
                  >
                    Data and Visualization Engineering
                  </a>
                </h4>
              </div>
            </div>
          </div>

          {/* 3rd Card */}
          <div className="col-12 col-md-3 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ borderRadius: "15px", overflow: "hidden" }} // Added borderRadius
            >
              <img
                src="assets/Images/cloud-computing-banner-background-smart-city-1024x683.jpg"
                alt="Managed Cloud Services on AWS and Azure"
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "200px",
                }}
              />
              <div
                className="card-body d-flex align-items-center justify-content-center"
                style={{
                  minHeight: "120px",
                }}
              >
                <h4 className="text-center mb-0">
                  <a
                    href="#"
                    className="text-dark fs-5"
                    style={{ textDecoration: "none" }}
                  >
                    Managed Cloud Services on AWS and Azure
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="row justify-content-center mt-1">
          <div className="col-12 text-center">
            <a
              href="#"
              className="btn btn-purple"
              style={{
                backgroundColor: "#9b4dca",
                color: "white",
                padding: "10px 45px",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Explore More
            </a>
          </div>
        </div>
      </div>



      <div className="container my-5">
  {/* Heading Section */}
  <div className="text-start mb-4">
    <h4 className="fs-2" style={{ fontWeight: '600' }}>
      Work
      <span class="rectangle1"></span>
    </h4>
  </div>

  {/* Row Section */}
  <Row className="g-4 mx-0">
    {/* First Column */}
    <Col md={4} className="text-start">
      <img
        src="assets/Images/portfolio-uni-diamonds.webp"
        alt="Image 1"
        className="img-fluid mb-3"
        style={{ width: '100%', height: 'auto' }}
      />
      <h4 style={{ fontWeight: '600' }}>Redefining Automation</h4>
      <p style={{ fontWeight: '400', fontSize: '18px' }}>
        This is a paragraph under the first heading. Add descriptive content here.
      </p>
      <a href="#" className="text-decoration-underline">
        Learn more
      </a>
    </Col>

    {/* Second Column */}
    <Col md={4} className="text-start">
      <img
        src="assets/Images/hom_page_portfolio-wtutors.webp"
        alt="Image 2"
        className="img-fluid mb-3"
        style={{ width: '100%', height: 'auto' }}
      />
      <h4 style={{ fontWeight: '600' }}>Precision in Deployment</h4>
      <p style={{ fontWeight: '400', fontSize: '18px' }}>
        This is a paragraph under the second heading. Add descriptive content here.
      </p>
      <a href="#" className="text-decoration-underline">
        Learn more
      </a>
    </Col>

    {/* Third Column */}
    <Col md={4} className="text-start">
      <img
        src="assets/Images/voyij-casestudy-new.webp"
        alt="Image 3"
        className="img-fluid mb-3"
        style={{ width: '100%', height: 'auto' }}
      />
      <h4 style={{ fontWeight: '600' }}>Empowering Connectivity</h4>
      <p style={{ fontWeight: '400', fontSize: '18px' }}>
        This is a paragraph under the third heading. Add descriptive content here.
      </p>
      <a href="#" className="text-decoration-underline">
        Learn more
      </a>
    </Col>
  </Row>
</div>





{/* New Section 5 */}
<div className="container-fluid px-0 py-5">
  <div className="row no-gutters align-items-center">
    {/* Left Column - Image */}
    <div className="col-12 col-md-6 p-0">
      <img
        src="assets/Images/engendering.webp"
        alt="Custom eCommerce Development"
        className="img-fluid"
        style={{ width: '100%', height: 'auto' }} // Ensures the image is responsive and full width
      />
    </div>

    {/* Right Column - Heading and Button */}
    <div className="col-12 col-md-6 text-left p-0">
      <h2
        style={{
          fontWeight: '600',
          fontSize: '1.8rem', // Adjust font size as needed
          color: '#333',
          marginLeft: '100px',
        }}
      >
        Custom eCommerce<br /> Development Services for Your<br /> Breakthrough Business Idea
      </h2>
      <a
        href="#"
        className="btn btn-primary mt-4"
        style={{
          padding: '10px 30px',
          borderRadius: '0px',
          fontSize: '1rem',
          textTransform: 'uppercase',
          backgroundColor: 'purple', // You can change this to your preferred color
          border: 'none',
          marginLeft: '100px',
        }}
      >
        Discuss Your Project
      </a>
    </div>
  </div>
</div>


{/* Section 11 */}
<div className="container my-5">
  <Row className="align-items-start mx-0">
    {/* Left Column */}
    <Col md={4} className="text-start pe-5">
      <h2 style={{fontWeight:'600'}}>Services
        <span class="rectangle1"></span>
      </h2>
      <p style={{ fontSize: "20px", fontWeight: "400", marginRight: "90px" }}>
        We spark change by bringing the right configuration of industry insights, 
        leading technologies, top-notch talent, digital transformation practices, 
        and the most advanced software to unlock new value that fits your specific requirements.
      </p>
    </Col>

    {/* Right Column */}
    <Col
  md={8}
  className="text-start"
  style={{ backgroundColor: "#f2f2f2", padding: "30px" }}
>
  {/* Tabs */}
  <Tab.Container
    id="custom-tabs"
    activeKey={activeTab}
    onSelect={(key) => setActiveTab(key)}
  >
    {/* Align the Tabs */}
    <Nav className="mb-4 tabs-alignment">
      {["consultancy", "design", "development", "growth"].map((tab) => (
        <Nav.Item key={tab} className="me-4 nav-item-spacing">
          <Nav.Link
            eventKey={tab}
            className={`tab-link ${
              activeTab === tab ? "active-tab" : ""
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>

    {/* Tab Content */}
    <Tab.Content>
      <Tab.Pane eventKey={activeTab}>
        <p style={{ fontSize: "18px", fontWeight: "400", marginTop: "20px"}}>
          {tabContent[activeTab]}
        </p>
      </Tab.Pane>
    </Tab.Content>
  </Tab.Container>

  {/* Anchor Links */}
  <div className="mt-5">
    <Row>
      {["Agile software development", "Custom e-commerce development", "Mobile application development", "Node.js development", "CMS development", "MVP development"].map(
        (text, index) => (
          <Col key={index} xs={6} className="mb-3">
            <a href="#" className="custom-link">
              {text} <span className="arrow">→</span>
            </a>
          </Col>
        )
      )}
    </Row>
  </div>
</Col>

  </Row>

  {/* Styles */}
  <style jsx>{`
    .tab-link {
      font-size: 1.1rem; /* Adjust font size for tab heading */
      font-weight: 400;
      margin-right: 20px;
      color: black;
      text-decoration: none;
      position: relative;
      padding-bottom: 8px;
      line-height: 1.8rem; /* Improved spacing for tab heading */
    }

    .tab-link.active-tab {
      color: black;
    }

    .tab-link.active-tab::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%; /* Adjust underline to match heading width */
      height: 4px;
      background-color: #722c90;
      transition: width 0.3s ease;
    }

    .nav-item-spacing {
      margin-right: 2rem; /* Add space between tab headings */
    }

    .custom-link {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      color:rgb(13, 13, 14);
      font-weight: 500;
      transition: color 0.3s ease;
    }

.custom-link:hover {
  color: rgb(19, 166, 235);; /* Change color to blue on hover */
}
    .custom-link:hover .arrow {
      transform: translateX(5px);
      transition: transform 0.3s ease;
    }

    .arrow {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }


  `}</style>
</div>







      {/* Section 8 */}
      <div class="container py-5">
        <h2 style={{ marginTop: "40px", fontWeight:"600", marginLeft:'10px' }}>
          Industries We Serve
          <span class="rectanglefullstop"></span>
        </h2>
        <div class="row mx-0" style={{ marginTop: "40px" }}>
          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-retail-ecommerce.webp"
                alt="Retail & eCommerce"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">Retail & eCommerce</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>Retail & eCommerce</h4>
                  Retail & eCommerce include managing online shops, inventory
                  systems, and seamless customer experiences tailored for
                  digital shopping platforms.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-elearning.webp"
                alt="eLearning & Education"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">eLearning & Education</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>eLearning & Education</h4>
                  eLearning & Education focuses on online platforms, virtual
                  classrooms, and providing resources for remote learning.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-rental.webp"
                alt="Rental & Sharing"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">Rental & Sharing</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>Rental & Sharing</h4>
                  Rental & Sharing businesses provide services for renting
                  products and sharing resources, creating flexible solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mx-0">
          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-hospitality.webp"
                alt="Travel & Hospitality"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">Travel & Hospitality</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>Travel & Hospitality</h4>
                  Travel & Hospitality offer services for tourism, hotels, and
                  customer experiences in the travel industry.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-grocery.webp"
                alt="Food & Grocery"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">Food & Grocery</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>Food & Grocery</h4>
                  Food & Grocery businesses focus on managing inventory and
                  providing food delivery services, making grocery shopping
                  easier.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-ondemand.webp"
                alt="Professional & On-Demand Services"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">Professional & On-Demand Services</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>Professional & On-Demand Services</h4>
                  Professional & On-Demand services provide a wide range of
                  specialized services based on customer needs at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mx-0">
          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-b2b.webp"
                alt="B2B & Enterprises"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">B2B & Enterprises</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>B2B & Enterprises</h4>
                  B2B & Enterprises involve businesses that provide services and
                  products to other businesses, helping improve operational
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-real-estate.webp"
                alt="Real Estate"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">Real Estate</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>Real Estate</h4>
                  Real Estate businesses specialize in buying, selling, and
                  renting properties, providing critical services for property
                  management.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="image-container">
              <img
                src="assets/Images/industry-logistics.webp"
                alt="Manufacturing & Logistics"
                class="img-fluid reduced-height"
              />
              <h4 class="image-heading">Manufacturing & Logistics</h4>
              <div class="image-overlay">
                <p class="image-details">
                  <h4 style={{fontWeight:'600', fontSize:'20px'}}>Manufacturing & Logistics</h4>
                  Manufacturing & Logistics cover the production of goods and
                  their transportation, focusing on efficient supply chain
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>







{/* New Section 5 */}
<div className="container-fluid px-0 py-5">
  <div className="row no-gutters align-items-center">
    {/* Left Column - Image */}
    <div className="col-12 col-md-6 p-0">
      <img
        src="assets/Images/digital-transformation-cta.webp"
        alt="Custom eCommerce Development"
        className="img-fluid"
        style={{ width: '100%', height: 'auto' }} // Ensures the image is responsive and full width
      />
    </div>

    {/* Right Column - Heading and Button */}
    <div className="col-12 col-md-6 text-left p-0">
      <h2
        style={{
          fontWeight: '600',
          fontSize: '1.8rem', // Adjust font size as needed
          color: '#333',
          marginLeft: '100px',
        }}
      >
        Custom eCommerce<br /> Development Services for Your<br /> Breakthrough Business Idea
      </h2>
      <a
        href="#"
        className="btn btn-primary mt-4"
        style={{
          padding: '10px 30px',
          borderRadius: '0px',
          fontSize: '1rem',
          textTransform: 'uppercase',
          backgroundColor: 'purple', // You can change this to your preferred color
          border: 'none',
          marginLeft: '100px',
        }}
      >
        Discuss Your Project
      </a>
    </div>
  </div>
</div>





<div className="container my-1">
      <Row className="align-items-center mx-0">
        {/* Left Column */}
        <Col md={6} className="text-start">
          <h2 style={{ fontWeight: '600' }}>Impact</h2>
          <p style={{ fontSize: '18px', fontWeight: '400' }}>
            We strive to create a lasting impact through innovative solutions that transform industries and improve lives.
          </p>
          <div className="d-flex justify-content-start">
            <Button
              variant="link"
              onClick={() => handleArrowClick('left')}
              style={{ fontSize: '50px', textDecoration: 'none', color: 'black', fontWeight: '400' }}
            >
              ← {/* Thin left arrow */}
            </Button>
            <Button
              variant="link"
              onClick={() => handleArrowClick('right')}
              style={{ fontSize: '50px', textDecoration: 'none', color: 'black', fontWeight: '400' }}
            >
              → {/* Thin right arrow */}
            </Button>
          </div>
        </Col>

        {/* Right Column */}
        <Col md={6} className="text-start" style={{ height: '400px', overflow: 'hidden' }}>
          <div className="quote-section" style={{ height: '100%', overflowY: 'auto' }}>
            <blockquote style={{ fontSize: '22px', fontWeight: '600', marginTop: '100px' }}>
              {quotes[quoteIndex].text}
            </blockquote>
            <p style={{ fontSize: '18px', fontWeight: '400' }}>
              {quotes[quoteIndex].name} <br />
              <span style={{ fontWeight: '600' }}>{quotes[quoteIndex].title}</span>
            </p>
            <div className="text-end">
  <a href="#">View all testimonials</a>
</div>

          </div>
        </Col>
      </Row>
    </div>



      {/* Section 11 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column - Text Content */}
          <div
            className="col-12 col-md-6"
            style={{  paddingRight: "50px" }}
          >
            {/* First Heading */}
            <h3>Why we are different</h3>
            {/* Purple Line Below First Heading */}
            <div className="purple-underline mb-3"></div>

            {/* Second Heading */}
            <h2
              className="display-4 fs-1"
              style={{ fontWeight: 600, marginTop: "20px" }}
            >
              We are Ultra-Professional and have Deep Expertise
            </h2>

            {/* Content */}
            <p
              className="mt-3 fs-5"
              style={{ textAlign: "left", fontWeight: "400" }}
            >
              We strive really really hard to ensure that our consultants and
              associates are up-to-speed on the latest front end and back end
              technological advances so we can offer the best value to our
              customers to in turn help them serve their end customers better.
            </p>
          </div>

          {/* Right Column - Image */}
          <div
            className="col-12 col-md-6 mb-4 mb-md-0"
            style={{ height: "500px", overflow: "hidden" }}
          >
            <img
              src="assets/Images/business-meeting.jpg"
              alt="Woman Wearing Virtual Reality Simulator"
              className="img-fluid" // This makes the image responsive
              style={{
                width: "100%", // Ensures the image fills the container
                height: "100%", // Makes the image fill the height of the container
                objectFit: "cover", // Ensures the image covers the container area, maintaining aspect ratio
              }}
            />
          </div>
        </div>
      </div>


      {/* Section 9 */}
      <div className="container">
        <div className="row mx-0 text-center">
          <div className="col-12">
            <h2 className="display-8 mt-5" style={{fontWeight:'600'}}>
              Our Clients
              <span className="rectanglefullstop"></span>
            </h2>
            <h1 className="mt-3 fs-1" style={{ fontWeight: "600" }}>
              We have an Impressive Roster of Clients
            </h1>
            <p className="lead mt-4 mx-auto" style={{ maxWidth: "70%", fontWeight:'400' }}>
              Our clients are the heartbeat of our success. We partner with
              diverse industries, fostering growth and innovation through
              collaborative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Section 10 */}
      <div className="mb-5"style={carouselContainerStyleClients}>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} style={carouselItemStyleClients}>
              <img
                src={client.logo}
                alt={client.name}
                style={clientLogoStyleClients}
              />
            </div>
          ))}
        </Slider>
      </div>













    </>
  );
};

export default Home;
