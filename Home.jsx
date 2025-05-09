import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Home = () => {
  const carouselContainerStyleClients = {
    width: "80%",
    margin: "0 auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
  };

  const carouselItemStyleClients = {
    padding: "10px",
  };

  const clientLogoStyleClients = {
    width: "100%",
    maxWidth: "180px",
    height: "auto",
    display: "block",
    margin: "0 auto",
    objectFit: "contain",
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
    { name: "Client 15", logo: "assets/Images/Snapology.png" },
    { name: "Client 16", logo: "assets/Images/Tiger_Analytics.png" },
    { name: "Client 17", logo: "assets/Images/Banyan_logo.png" },
    { name: "Client 18", logo: "assets/Images/Witness_Chain _logo.jpg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    consultancy:
      "We guide businesses through their digital transformation journey by offering expert consultancy. Whether you're looking to innovate or optimize, our team provides actionable insights and strategies to ensure that every decision is aligned with your business goals.",
    design:
      "Our design philosophy is centered on crafting meaningful experiences. We believe that great design goes beyond aesthetics—it’s about creating intuitive, user-centered interfaces that build trust and drive engagement across all platforms.",
    development:
      "Our development team specializes in building flexible and scalable solutions that power business growth. With a focus on modern technologies, we deliver high-performance applications designed to meet your evolving business needs.",
    growth:
      "Success doesn’t stop after deployment. We focus on continuous growth, helping businesses scale efficiently, optimize performance, and stay ahead of competitors with data-driven insights and ongoing innovation.",
  };

  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "“Piquota team are smart, responsive and easy to work with. They are on top of current technologies, and regularly offer up recommendations and explanations that help us make our product better. The team are detail oriented, well organized and excellent with developing, and maintaining websites. We have always been more than satisfied with their results. We are currently using their services today and will continue to do so for years to come. Overall, It is with pleasure to highly recommend Team Piquota for any project large or small.”",
      name: "Andrew Belfast",
      title: "GoldenRB",
    },
    {
      text: "“My experience with Piquota was exceptional. When we were establishing Axis M&A, their expertise played a pivotal role in shaping our digital presence and technological capabilities. From the outset, I was impressed by their commitment to excellence. The team consistently delivered high-quality work, meeting every deadline. Their timeliness and efficiency ensured that my vision for both the company website and our specialized M&A application were brought to life. What truly stood out for me was their willingness to accommodate changes and updates throughout the development process. They not only listened to my ideas but also worked to implement them seamlessly. Their flexibility made the collaboration not only productive but also enjoyable.”",
      name: "Raj Prabhu",
      title: "Axis MA",
    },
    {
      text: "“Working with Team Piquota for our website redesign effort was a great experience. They delivered impressive results and also made the entire process enjoyable and insightful. I can't recommend them enough!”",
      name: "Giri Gubbala",
      title: "Xlsoftek",
    },
    {
      text: "“Working with Piquota has been an absolute game-changer for us.They have shown us that they are dedicated, knowledgeable, and committed to helping us overcome obstacles in our projects. What I appreciate most about working with them is that they are flexible enough to adjust to changing needs and prioritize finding a model that benefits everyone. Thank you, Ganesh and Team, for your support”",
      name: "Imran Mushtaq Ahmed",
      title: "Innover",
    },
  ];

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setQuoteIndex((prevIndex) =>
        prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
      );
    } else {
      setQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Ratings
  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? true : false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 for larger screens

  // Cards array
  const cards = [
    {
      title: "Node.js Development",
      imgSrc: "assets/Images/pexels-hiteshchoudhary-1261427.jpg",
      link: "/nodejs",
    },
    {
      title: "React.js Development",
      imgSrc: "assets/Images/pexels-cottonbro-5483071.jpg",
      link: "/reactjs",
    },
    {
      title: "Mobile App Development",
      imgSrc: "assets/Images/pexels-asphotograpy-887751 (1).jpg",
      link: "/mobileapplication",
    },
    {
      title: "Web Development",
      imgSrc: "assets/Images/pexels-designecologist-1779487.jpg",
      link: "/webdevelopment",
    },
    {
      title: "E-Commerce Solutions",
      imgSrc: "assets/Images/pexels-asphotograpy-230544.jpg",
      link: "/ecommerce",
    },
    {
      title: "Java Development",
      imgSrc: "assets/Images/pexels-mikhail-nilov-7988113.jpg",
      link: "/java",
    },
    {
      title: "Enterprise App Development",
      imgSrc: "assets/Images/pexels-firmbee-com-22729701-6638409.jpg",
      link: "/enterpriseappdevelopment",
    },
    {
      title: "AI/ML Services",
      imgSrc: "assets/Images/pexels-michelangelo-buonarroti-8728556.jpg",
      link: "/alservices",
    },
    {
      title: "Digital Marketing",
      imgSrc: "assets/Images/pexels-pixabay-265087.jpg",
      link: "/digitalmarketing",
    },
    {
      title: "IT Consulting",
      imgSrc: "assets/Images/pexels-tirachard-kumtanom-112571-601170.jpg",
      link: "/itconsulting",
    },
    {
      title: "Cloud Services Management",
      imgSrc: "assets/Images/pexels-cookiecutter-17489152.jpg",
      link: "/cloudservicesmanagement",
    },
    {
      title: "Solutions Design",
      imgSrc: "assets/Images/pexels-ivan-samkov-8117523.jpg",
      link: "/solutiosdesign",
    },
  ];

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleCards = () => {
    const startIndex = currentIndex * itemsPerPage;
    return cards.slice(startIndex, startIndex + itemsPerPage);
  };

  {
    /* Dynamically adjust the itemsPerPage based on screen size */
  }
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <>
      {/* Meta Data */}
      <Helmet>
        <title>
          Piquota: Driving Operational Excellence with Agile Software
          Development
        </title>
        <meta
          name="description"
          content="Piquota delivers digital transformation, custom software, AI/ML, and IT consulting to drive business growth with innovative, tailored tech solutions."
        />
        <meta
          name="keywords"
          content="Digital transformation,IT consulting,Custom software development,AI and machine learning , DevOps services, Cloud migration, Data analytics,Product engineering , User experience design,Managed IT services"
        />
        <meta name="author" content="Piquota" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Piquota: Agile Software Development & Digital Transformation"
        />
        <meta
          property="og:description"
          content="Empowering startups and enterprises with cutting-edge IT solutions and innovative software development practices."
        />
        <meta property="og:url" content="https://piquota.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://piquota.ai/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Piquota: Agile Software Development & Digital Transformation"
        />
        <meta
          name="twitter:description"
          content="Transform your business with Piquota's tailored IT solutions, helping you innovate and grow in a technology-driven world."
        />
        <meta name="twitter:image" content="https://piquota.ai/logo.png" />
      </Helmet>

      {/* Scroll to Top */}
      <div>
        {isVisible && (
          <Button
            onClick={scrollToTop}
            className="scroll-to-top btn btn-primary rounded-circle shadow"
            style={{
              position: "fixed",
              bottom: "100px",
              right: "30px",
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
          backgroundPosition: "0% 5%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url('assets/Images/pexels-cottonbro-5473312.jpg')`,
          backgroundSize: "cover",
          height: "95vh",
        }}
      >
        <div className="row align-items-center h-100 text-white mx-0">
          <div className="col-12 col-md-10">
            <h1
              className="fs-1 fs-md-1"
              style={{
                fontWeight: 500,
                textAlign: "left",
                color: "white",
                fontSize: "2rem",
              }}
            >
              Driving Operational
              <br /> Excellence with Agile
              <br /> Software Development
              <span className="rectangle1"></span>
            </h1>
            <p
              className="fs-md-5 mt-3"
              style={{
                fontWeight: 300,
                textAlign: "left",
                color: "white",
                fontSize: "20px",
                marginBottom: "22px",
              }}
            >
              We craft innovative, customer-focused solutions for startups and
              enterprises
              <br /> worldwide, enabling them to transform into
              technology-driven
              <br /> industry leaders.
            </p>

            {/* Button */}
            <Link
              to="/contact"
              className="btn btn-lg mt-4"
              style={{
                textAlign: "left",
                borderRadius: "0px",
                fontSize: "16px",
                padding: "10px 35px",
                backgroundColor: "#772c93",
                color: "white",
              }}
            >
              Connect with Us
            </Link>
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
              Guided by Principles, We Shape Software <br />
              Solutions for Limitless Opportunities
              <span className="rectanglefullstop"></span>
            </h2>
            <p
              className="lead mt-3"
              style={{
                marginLeft: "15%",
                marginRight: "15%",
                fontWeight: "400",
              }}
            >
              Our principles inspire us to remain authentic while delivering
              exceptional results, helping our clients achieve diverse
              milestones in their digital transformation journey.
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
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Foster Trust and Transparency
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We are deeply committed to ethical and sustainable business
                practices. Building trust and maintaining transparency are at
                the core of everything we do.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Achieve Excellence
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We combine innovative thinking with a pragmatic approach to
                execute flawlessly, turning strategies into results and
                delivering outcomes with precision.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Ignite Innovation
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                Partnering with our clients, we spark innovation that redefines
                industries, helping them secure a competitive edge in their
                market.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Embrace Agility
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                Our adaptive workforce thrives on flexibility, meeting diverse
                client needs with speed and efficiency in an ever-evolving
                digital landscape.
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
              Driving Digital Evolution Through
              <br /> Tailored Software Development
              <span className="rectanglefullstop"></span>
            </h2>
            <p
              className="lead mt-3"
              style={{
                fontWeight: "500",
              }}
            >
              leverage strategic prioritization, emulate real-world scenarios,
              and harness
              <br /> the collective expertise of our cross-functional teams to
              craft exceptional digital solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="container py-4" style={{ marginTop: "-30px" }}>
        <div className="row mx-0 text-center">
          <div className="col-12">
            <img
              src="assets/Images/Plan.png"
              alt="Description of Image"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src="assets/Images/modern-equipped-computer-lab.jpg"
              alt="Modern Equipped Computer Lab"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "400px",
                minHeight: "300px",
                objectFit: "cover",
                borderRadius: "3px",
              }}
            />
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6" style={{ paddingLeft: "50px" }}>
            {/* Heading 1 */}
            <h3>Why Choose Us?</h3>
            <div className="purple-underline mb-3"></div>

            {/* Heading 2 */}
            <h2
              className="display-4 fs-1"
              style={{ fontWeight: 600, marginTop: "20px" }}
            >
              We Help You Build Your Business Growth
            </h2>

            {/* Content */}
            <p className="mt-3 fs-5" style={{ textAlign: "left" }}>
              At our company, we specialize in delivering customized solutions
              designed to address your specific challenges. With years of
              industry experience and a dedication to excellence, we guarantee
              that every project we undertake produces outstanding results,
              empowering you to achieve long-term growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column  */}
          <div
            className="col-12 col-md-6"
            style={{ paddingLeft: "0px", paddingRight: "50px" }}
          >
            <h3>Our Offerings</h3>
            <div className="purple-underline mb-3"></div>
            <h2
              className="display-4 fs-1"
              style={{ fontWeight: 600, marginTop: "20px" }}
            >
              Transforming your Businesses with Scalable Solutions
            </h2>

            {/* Content */}
            <p className="mt-3 fs-5" style={{ textAlign: "left" }}>
              We excel in unlocking growth opportunities through tailored
              solutions that drive meaningful change. From strategic consulting
              to cutting-edge technologies, our services are designed to enhance
              your business, enabling you to achieve measurable success and
              long-term impact.
            </p>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 mb-4 mb-md-0"
            style={{ height: "500px", overflow: "hidden" }}
          >
            <img
              src="assets/Images/woman-wearing-virtual-reality-simulator.webp"
              alt="Woman Wearing Virtual Reality Simulator"
              className="img-fluid"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "3px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div
        className="container-fluid py-5 home-page-services"
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
          <div
            className="d-flex align-items-center justify-content-center w-100"
            style={{ gap: "20px" }}
          >
            {/* Left Arrow */}
            <button
              className="btn btn-light"
              onClick={handlePrev}
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {/* Cards */}
            <div className="scroll-container">
              {getVisibleCards().map((card, index) => (
                <div
                  className="card shadow-sm"
                  key={index}
                  style={{
                    borderRadius: "15px",
                    width: "300px",
                    minWidth: "300px",
                    overflow: "hidden",
                    scrollSnapAlign: "center",
                  }}
                >
                  <img
                    src={card.imgSrc}
                    alt={card.title}
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
                        href={card.link}
                        className="text-dark fs-5"
                        style={{ textDecoration: "none" }}
                      >
                        {card.title}
                      </a>
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              className="btn btn-light"
              onClick={handleNext}
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div className="container my-5">
        {/* Heading Section */}
        <div className="text-start mb-4">
          <h4 className="fs-2" style={{ fontWeight: "600" }}>
            Work
            <span className="rectangle1"></span>
          </h4>
        </div>

        {/* Row Section */}
        <Row className="g-4 mx-0">
          {/* First Column */}
          <Col md={4} className="text-start">
            <img
              src="assets/Images/pexels-tima-miroshnichenko-6170179.jpg"
              alt="Image 1"
              className="img-fluid mb-3"
              style={{ width: "100%", height: "auto" }}
            />
            <div>
              <h4 style={{ fontWeight: "600" }}>Redefining Automation</h4>
            </div>
            <p style={{ fontWeight: "400", fontSize: "18px" }}>
              We ensure smooth and accurate deployments, making sure your
              systems work perfectly from the start and continue to deliver
              reliable results.
            </p>
            {/* <a href="#" className="text-decoration-underline">
              Learn more
            </a> */}
          </Col>

          {/* Second Column */}
          <Col md={4} className="text-start">
            <img
              src="assets/Images/pexels-pavel-danilyuk-6612714.jpg"
              alt="Image 2"
              className="img-fluid mb-3"
              style={{ width: "100%", height: "auto" }}
            />
            <div>
              <h4 style={{ fontWeight: "600" }}>Precision in Deployment</h4>
            </div>
            <p style={{ fontWeight: "400", fontSize: "18px" }}>
              We ensure smooth and accurate deployments, making sure your
              systems work perfectly from the start and continue to deliver
              reliable results.
            </p>
            {/* <a href="#" className="text-decoration-underline">
              Learn more
            </a> */}
          </Col>

          {/* Third Column */}
          <Col md={4} className="text-start">
            <img
              src="assets/Images/pexels-divinetechygirl-1181370.jpg"
              alt="Image 3"
              className="img-fluid mb-3"
              style={{ width: "100%", height: "auto" }}
            />
            <div>
              <h4 style={{ fontWeight: "600" }}>Empowering Connectivity</h4>
            </div>
            <p style={{ fontWeight: "400", fontSize: "18px" }}>
              We provide solutions that enhance connectivity, enabling
              businesses to collaborate better and stay connected, no matter
              where they are.
            </p>
            {/* <a href="#" className="text-decoration-underline">
              Learn more
            </a> */}
          </Col>
        </Row>
      </div>

      {/* Section 9 */}
      <div className="container-fluid py-0 py-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div
            className="col-12 col-md-6 p-0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="assets/Images/3.png"
              alt="Custom eCommerce Development"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 p-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <h2
              style={{
                fontWeight: "600",
                fontSize: "1.8rem",
                color: "#333",
                marginBottom: "20px",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              Custom Software Development
              <br /> for Transformative Growth
            </h2>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                padding: "10px 30px",
                borderRadius: "0px",
                fontSize: "1rem",
                textTransform: "uppercase",
                backgroundColor: "#772c93",
                border: "none",
                color: "white",
                textDecoration: "none",
                textAlign: "center",
                alignSelf: "flex-start",
                marginLeft: "20px",
              }}
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Section 10 */}
      <div className="container my-5">
        <Row className="align-items-start mx-0">
          {/* Left Column */}
          <Col md={4} className="text-start pe-5">
            <h2 style={{ fontWeight: "600" }}>
              Our Approach
              <span className="rectangle1"></span>
            </h2>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "400",
                marginRight: "50px",
                marginTop: "20px",
              }}
            >
              We don’t just offer services; we partner with you to drive lasting
              transformation. By combining deep industry knowledge, cutting-edge
              technologies, and a passion for innovation, we create tailored
              solutions that meet the unique challenges of your business.
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
              <Nav className="mb-4 tabs-alignment">
                {["consultancy", "design", "development", "growth"].map(
                  (tab) => (
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
                  )
                )}
              </Nav>

              {/* Tab Content */}
              <Tab.Content>
                <Tab.Pane eventKey={activeTab}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      marginTop: "20px",
                    }}
                  >
                    {tabContent[activeTab]}
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            {/* Anchor Links */}
            <div className="mt-5">
              <Row>
                {[
                  { text: "NodeJs", href: "/nodejs" },
                  { text: "ReactJS Development", href: "/reactjs" },
                  { text: "Mobile Application", href: "/mobileapplication" },
                  { text: "Web Development", href: "/webdevelopment" },
                  { text: "E-Commerce Solutions", href: "/ecommerce" },
                  { text: "Java Development", href: "/java" },
                ].map(({ text, href }, index) => (
                  <Col key={index} xs={6} className="mb-3">
                    <a href={href} className="custom-link">
                      {text} <span className="arrow">→</span>
                    </a>
                  </Col>
                ))}
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
            color: rgb(13, 13, 14);
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .custom-link:hover {
            color: rgb(19, 166, 235); /* Change color to blue on hover */
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

      {/* Section 11 */}
      <div className="container py-5">
        <h2
          style={{ marginTop: "40px", fontWeight: "600", marginLeft: "10px" }}
        >
          Industries We Serve
          <span className="rectanglefullstop"></span>
        </h2>
        <div className="row mx-0" style={{ marginTop: "40px" }}>
          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-pixabay-264502.jpg"
                alt="Retail & eCommerce"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">Retail & eCommerce</h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    Retail & eCommerce
                  </h4>
                  Retail & eCommerce include managing online shops, inventory
                  systems, and seamless customer experiences tailored for
                  digital shopping platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-julia-m-cameron-4145153.jpg"
                alt="eLearning & Education"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">eLearning & Education</h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    eLearning & Education
                  </h4>
                  eLearning & Education focuses on online platforms, virtual
                  classrooms, and providing resources for remote learning.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-karolina-grabowska-4506266.jpg"
                alt="Rental & Sharing"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">Rental & Sharing</h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    Rental & Sharing
                  </h4>
                  Rental & Sharing businesses provide services for renting
                  products and sharing resources, creating flexible solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-cottonbro-6474588.jpg"
                alt="Travel & Hospitality"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">Travel & Hospitality</h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    Travel & Hospitality
                  </h4>
                  Travel & Hospitality offer services for tourism, hotels, and
                  customer experiences in the travel industry.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-pixabay-264636.jpg"
                alt="Food & Grocery"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">Food & Grocery</h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    Food & Grocery
                  </h4>
                  Food & Grocery businesses focus on managing inventory and
                  providing food delivery services, making grocery shopping
                  easier.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-artempodrez-5025630.jpg"
                alt="Professional & On-Demand Services"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">
                Professional & On-Demand Services
              </h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    Professional & On-Demand Services
                  </h4>
                  Professional & On-Demand services provide a wide range of
                  specialized services based on customer needs at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-shkrabaanthony-5467592.jpg"
                alt="B2B & Enterprises"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">B2B & Enterprises</h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    B2B & Enterprises
                  </h4>
                  B2B & Enterprises involve businesses that provide services and
                  products to other businesses, helping improve operational
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-marketingtuig-87223.jpg"
                alt="Real Estate"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">Real Estate</h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    Real Estate
                  </h4>
                  Real Estate businesses specialize in buying, selling, and
                  renting properties, providing critical services for property
                  management.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="image-container">
              <img
                src="assets/Images/pexels-elevate-1267338.jpg"
                alt="Manufacturing & Logistics"
                className="img-fluid reduced-height"
              />
              <h4 className="image-heading">Manufacturing & Logistics</h4>
              <div className="image-overlay">
                <p className="image-details">
                  <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                    Manufacturing & Logistics
                  </h4>
                  Manufacturing & Logistics cover the production of goods and
                  their transportation, focusing on efficient supply chain
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 12 */}
      <div className="container-fluid py-0 py-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div
            className="col-12 col-md-6 p-0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="assets/Images/4.png"
              alt="Custom eCommerce Development"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 p-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <h2
              style={{
                fontWeight: "600",
                fontSize: "1.8rem",
                color: "#333",
                marginBottom: "20px",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              Tailored Solutions for Your
              <br /> Business Growth and Digital
              <br /> Transformation
            </h2>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                padding: "10px 30px",
                borderRadius: "0px",
                fontSize: "1rem",
                textTransform: "uppercase",
                backgroundColor: "#772c93",
                border: "none",
                color: "white",
                textDecoration: "none",
                textAlign: "center",
                alignSelf: "flex-start",
                marginLeft: "20px",
              }}
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Section 13 */}
      <div className="container my-1">
        <Row className="align-items-center mx-0 mt-2">
          {/* Left Column */}
          <Col md={6} className="text-start">
            <h2 style={{ fontWeight: "600" }}>Impact</h2>
            <p style={{ fontSize: "18px", fontWeight: "400" }}>
              Creating Lasting Impact with Innovative Solutions That Transform
              Industries and Enrich Lives
            </p>
            <div className="d-flex justify-content-start">
              <Button
                variant="link"
                onClick={() => handleArrowClick("left")}
                style={{
                  fontSize: "50px",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                ←
              </Button>
              <Button
                variant="link"
                onClick={() => handleArrowClick("right")}
                style={{
                  fontSize: "50px",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                →
              </Button>
            </div>
          </Col>

          {/* Right Column */}
          <Col
            md={6}
            className="text-start"
            style={{
              height: "450px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              className="quote-section"
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "100%",
                textAlign: "left",
              }}
            >
              <blockquote
                style={{
                  fontSize: "17px",
                  fontWeight: "500",
                  marginTop: "0px",
                }}
              >
                {quotes[quoteIndex].text}
              </blockquote>
              <p style={{ fontSize: "18px", fontWeight: "400" }}>
                {quotes[quoteIndex].name} <br />
                <span style={{ fontWeight: "600" }}>
                  {quotes[quoteIndex].title}
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* Section 14 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column  */}
          <div className="col-12 col-md-6" style={{ paddingRight: "50px" }}>
            <h3>Why We Stand Out</h3>
            <div className="purple-underline mb-3"></div>
            <h2
              className="display-4 fs-1"
              style={{ fontWeight: 600, marginTop: "20px" }}
            >
              We Combine Expertise with Innovation
            </h2>

            <p
              className="mt-3 fs-5"
              style={{ textAlign: "left", fontWeight: "400" }}
            >
              We are committed to keeping our team at the forefront of both
              frontend and backend technologies, ensuring they are equipped with
              the latest knowledge to provide exceptional value. This allows us
              to deliver cutting-edge solutions that empower our clients to
              better serve their customers.
            </p>
          </div>

          {/* Right Column  */}
          <div
            className="col-12 col-md-6 mb-4 mb-md-0"
            style={{ height: "500px", overflow: "hidden" }}
          >
            <img
              src="assets/Images/business-meeting.jpg"
              alt="Woman Wearing Virtual Reality Simulator"
              className="img-fluid"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "3px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 15 */}
      <div className="container">
        <div className="row mx-0 text-center">
          <div className="col-12">
            <h2 className="display-8 mt-5" style={{ fontWeight: "600" }}>
              Our Clients
              <span className="rectanglefullstop"></span>
            </h2>
            <h1 className="mt-3 fs-1" style={{ fontWeight: "600" }}>
              A Diverse and Valued Clientele
            </h1>
            <p
              className="lead mt-4 mx-auto"
              style={{ maxWidth: "70%", fontWeight: "400" }}
            >
              Our clients are at the core of our success. We work alongside a
              variety of industries, driving growth and innovation through
              collaborative, tailored solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Section 16 */}
      <div className="mb-5" style={carouselContainerStyleClients}>
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

      {/* Section 17 */}
      <div>
        {/* Section Heading */}
        <div
          className="section-header text-center"
          style={{ marginTop: "100px" }}
        >
          <h2 style={{ fontWeight: "600" }}>
            Global Authority in Digital Transformation
          </h2>
          <p style={{ fontSize: "18px", fontWeight: "400", marginTop: "10px" }}>
            Our dedication to helping businesses of all sizes enhance
            flexibility, reduce costs,
            <br /> and innovate during their transition from offline to online
            has garnered us
            <br /> worldwide recognition.
          </p>
        </div>

        <div className="container my-5 text-center">
          <div className="row justify-content-center mx-0">
            {/* Left Column */}
            <div
              className="col-12 col-md-6"
              style={{ height: "auto", paddingTop: "50px" }}
            >
              <div className="row">
                <div className="col-12 col-md-6 mb-4">
                  <div className="box" style={{ padding: "20px" }}>
                    <h4>100+</h4>
                    <p>Custom enterprise-grade solutions delivered</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="box" style={{ padding: "20px" }}>
                    <h4>20+</h4>
                    <p>Industries served with personalized strategies</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="box" style={{ padding: "20px" }}>
                    <h4>30+</h4>
                    <p>Global partnerships and alliances</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="box" style={{ padding: "20px" }}>
                    <h4>100%</h4>
                    <p>Client satisfaction and retention rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="col-12 col-md-6"
              style={{
                backgroundColor: "#f2f2f2",
                paddingTop: "50px",
                height: "auto",
              }}
            >
              <div className="row mx-0">
                <div className="col-12 col-md-6 mb-4">
                  <div className="box" style={{ padding: "20px" }}>
                    <img
                      src="assets/Images/4-removebg-preview.png"
                      alt="Image 1"
                      className="img-fluid mb-2"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="box" style={{ padding: "20px" }}>
                    <img
                      src="assets/Images/1-removebg-preview (1).png"
                      alt="Image 2"
                      className="img-fluid mb-2"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                  <div className="box" style={{ padding: "20px" }}>
                    <img
                      src="assets/Images/2-removebg-preview (1).png"
                      alt="Image 3"
                      className="img-fluid mb-2"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="box" style={{ padding: "20px" }}>
                    <img
                      src="assets/Images/3-removebg-preview (1).png"
                      alt="Image 4"
                      className="img-fluid mb-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
