import React, { useState } from "react";
import "../Styles/WebDevelopment.css";
import { Accordion } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Helmet } from "react-helmet";

// LazyImage component for lazy loading images
const LazyImage = ({ src, alt, className, style }) => (
  <img src={src} alt={alt} className={className} style={style} loading="lazy" />
);

const WebDevelopment = () => {
  const [selectedService, setSelectedService] = useState(1);

  const handleClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const getServiceContent = (serviceId) => {
    switch (serviceId) {
      case 1:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Custom Website Development</h3>
            <p>
              At Piquota, we specialize in crafting bespoke websites tailored to
              meet your unique business needs. Our team of expert developers
              takes a user-first approach, ensuring that every element of your
              website aligns with your brand and goals. From small businesses to
              large enterprises, we design websites that are scalable, secure,
              and optimized for performance. Whether you need a corporate
              website, a portfolio, or a complex web application, we combine
              creativity and technology to deliver outstanding results.
            </p>
          </div>
        );
      case 2:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Responsive Design Solutions</h3>
            <p>
              A seamless user experience across all devices is essential in
              today’s mobile-first world. Our responsive design solutions ensure
              your website looks and performs flawlessly on desktops, tablets,
              and smartphones. By implementing cutting-edge technologies like
              CSS Grid, Flexbox, and media queries, we guarantee that your
              website adapts perfectly to various screen sizes and resolutions,
              enhancing user engagement and satisfaction.
            </p>
          </div>
        );
      case 3:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>E-commerce Development</h3>
            <p>
              Drive online sales and grow your business with our comprehensive
              e-commerce development services. At Piquota, we build robust
              online stores with intuitive navigation, secure payment gateways,
              and powerful backend systems. From designing product catalogs to
              implementing custom checkout processes, we focus on delivering
              e-commerce solutions that convert visitors into loyal customers.
            </p>
          </div>
        );
      case 4:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>CMS Integration</h3>
            <p>
              Simplify content management and streamline website updates with
              our CMS integration services. We work with leading platforms like
              WordPress, Drupal, and Joomla to create user-friendly interfaces
              that allow you to manage your website without technical expertise.
              Whether you need to add new pages, update content, or analyze
              performance, our CMS solutions empower you to stay in control of
              your digital presence.
            </p>
          </div>
        );
      case 5:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Support & Maintenance Services</h3>
            <p>
              Your website needs regular updates and maintenance to ensure
              optimal performance and security. At Piquota, we offer
              comprehensive support and maintenance services to keep your
              website running smoothly. From fixing bugs to updating plugins and
              monitoring uptime, our team works proactively to address issues
              before they impact your users. Let us handle the technical
              complexities so you can focus on your business.
            </p>
          </div>
        );
      default:
        return <p>Select a service to see the explanation.</p>;
    }
  };

  return (
    <>
      {/* Meta Data */}
      <Helmet>
        <title>Custom Web Development Services | Piquota</title>
        <meta
          name="description"
          content="Piquota delivers custom web development solutions, crafting responsive, scalable websites to enhance your digital presence and engagement."
        />
        <meta
          name="keywords"
          content="Web development services , Custom website development , Responsive web design , Full-stack development , Web application development , UI/UX design ,Website optimization "
        />
        <meta
          property="og:title"
          content="Custom Web Development Services | Piquota"
        />
        <meta
          property="og:description"
          content="Crafting impactful web solutions that enhance user engagement and drive business growth. Piquota delivers custom websites, e-commerce, and CMS integration services tailored to your business needs."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/web-development"
        />
        <meta
          name="twitter:title"
          content="Custom Web Development Services | Piquota"
        />
        <meta
          name="twitter:description"
          content="Crafting impactful web solutions that enhance user engagement and drive business growth. Piquota delivers custom websites, e-commerce, and CMS integration services tailored to your business needs."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid px-0"
        style={{
          backgroundImage: `url('assets/Images/glasses-lie-laptop-reflecting-light-from-screen-dark.jpg')`, // Replace with your image URL
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
              Purpose Driven Web Development
              <br />
              Packages
              <span className="rectangle1"></span>
            </h1>
            <p
              className="fs-5 fs-md-5 mt-3"
              style={{
                fontWeight: 300,
                textAlign: "left",
                color: "white",
                fontSize: "22px",
                marginBottom: "22px",
              }}
            >
              Deliver impactful digital experiences that strengthen your brand
              identity,
              <br /> enhance user engagement, and drive measurable business
              growth. At Piquota,
              <br /> we craft bespoke web solutions tailored to resonate with
              your audience
              <br /> while supporting your business objectives.
            </p>

            {/* Custom List */}
            <div className="custom-list mt-4">
              <div
                className="line-item"
                style={{
                  fontSize: "1rem",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Increase Brand Value
              </div>
              <div
                className="line-item"
                style={{
                  fontSize: "1rem",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Enhance User Experience
              </div>
              <div
                className="line-item"
                style={{
                  fontSize: "1rem",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Deliver Excellence
              </div>
            </div>

            {/* Button */}
            <a
              href="/contact"
              className="btn btn-lg mt-4"
              style={{
                textAlign: "left",
                borderRadius: "0px",
                backgroundColor: "#772c93",
                color: "white",
              }}
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="container my-5">
        <div className="row mx-0 align-items-center justify-content-center g-5">
          {" "}
          {/* Left Column: Heading and Paragraph */}
          <div className="col-12 col-md-5 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                marginBottom: "20px",
                textAlign: "left",
                fontSize: "35px",
              }}
            >
              Designs That Enhance
              <br /> User Journeys
              <span className="rectangle1"></span>
            </h2>
            <p
              className="me-md-5"
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                textAlign: "left",
                fontWeight: "400",
              }}
            >
              Your website serves as the first point of contact for many of your
              potential clients. At Piquota, we understand the critical role it
              plays in shaping perceptions about your business. Our web
              development solutions focus on creating feature-rich, visually
              engaging websites with seamless functionality and exceptional user
              experiences. Each project is backed by extensive research and
              built to represent your brand identity while delivering value
              through innovative design and technology.
            </p>
          </div>
          {/* Right Column: Carousel */}
          <div
            className="col-12 col-md-7"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              height: "600px",
              overflow: "hidden",
            }}
          >
            <div>
              <Carousel slide={false}>
                <Carousel.Item>
                  <LazyImage
                    className="d-block w-100"
                    src="assets/Images/www.veltris.com_ (1).png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <LazyImage
                    className="d-block w-100"
                    src="assets/Images/prophet.com_ (1).png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <LazyImage
                    className="d-block w-100"
                    src="assets/Images/www.innoverdigital.com_ (1).png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <LazyImage
                    className="d-block w-100"
                    src="assets/Images/www.mrcooper.com_.png"
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container-fluid">
        <div className="row mx-0 text-center">
          <div className="col-12">
            <h2
              style={{
                fontWeight: 600,
                marginBottom: "30px",
                fontSize: "35px",
              }}
            >
              Our Clients Say
              <span className="rectangle1"></span>
            </h2>
          </div>
        </div>

        {/* Client's Image */}
        <div className="row mx-0 justify-content-center">
          <div className="col-12 text-center">
            <LazyImage
              src="assets/Images/avatar-photo-default-user-icon-person-image-picture-face-social-vector-human-head-284266057.webp"
              alt="Client"
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />
          </div>
        </div>

        {/* Paragraph */}
        <div className="row mx-0 text-center">
          <div className="col-12">
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                fontWeight: "400",
              }}
            >
              Piquota team are smart, responsive and easy to work with. They are
              on top of <br />
              current technologies, and regularly offer up recommendations and
              explanations that help us make
              <br /> our product better. The team are detail oriented, well
              organized and excellent with developing,
              <br /> and maintaining websites. We have always been more than
              satisfied with their results. We are currently
              <br /> using their services today and will continue to do so for
              years to come. Overall, It is with pleasure
              <br /> to highly recommend Team Piquota for any project large or
              small.
            </p>
          </div>
        </div>

        {/* Client Name and Position */}
        <div className="row mx-0 text-center">
          <div className="col-12">
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              Andrew Belfast
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              GoldenRB
            </p>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-12" style={{ marginBottom: "30px" }}></div>
        </div>

        {/* Left and Right column*/}
        <div
          className="container"
          style={{ maxWidth: "85%", margin: "0 auto" }}
        >
          <div className="row mx-0 no-gutters">
            {/* Left Column */}
            <div
              className="col-12 col-md-6 d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "#0a121f",
                color: "#fff",
                minHeight: "50vh",
                padding: "80px",
              }}
            >
              <div>
                <h2
                  className="mb-3"
                  style={{ fontWeight: 500, fontSize: "30px" }}
                >
                  Website Design Packages That Offer Value for Money
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "19px",
                    lineHeight: "1.6",
                    color: "#fff",
                    fontWeight: "300",
                  }}
                >
                  Our web development packages are crafted based on meticulous
                  market research, client needs, and cutting-edge design trends.
                  We prioritize exceptional user experiences through innovative
                  and meaningful website designs that reflect your business
                  goals. By viewing your brand through your customers'
                  perspective, we create web solutions that connect with your
                  target audience and drive meaningful results.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6 p-0">
              <LazyImage
                src="assets/Images/team-working-together-project.jpg"
                alt="About Us"
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  minHeight: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="container my-5">
        <div className="row mx-0">
          <div className="col-12 text-center">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "60px",
              }}
            >
              Affordable Web Development Packages for Maximum ROI
              <span className="rectangle1"></span>
            </h2>
          </div>
        </div>

        <div className="row mx-0 mt-5">
          {/* Left Column  */}
          <div
            className="col-12 col-md-5"
            style={{
              backgroundColor: "#333333",
              padding: "40px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid #333333",
            }}
          >
            <div className="list-group w-100">
              {/* Custom Website Development */}
              <button
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  selectedService === 1 ? "active" : ""
                }`}
                onClick={() => handleClick(1)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  color: selectedService === 1 ? "white" : "#B0B0B0",
                  borderBottom: "1px solid #ccc",
                  position: "relative",
                  fontSize: "18px",
                }}
              >
                <i
                  className="fas fa-laptop-code"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 1 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Custom Webdevelopment
                <span
                  className={`arrow ${selectedService === 1 ? "rotate" : ""}`}
                  style={{
                    position: "absolute",
                    right: "20px",
                    transition: "transform 0.3s ease, margin-left 0.3s ease",
                  }}
                >
                  &rarr;
                </span>
              </button>

              {/* Responsive Design Solutions */}
              <button
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  selectedService === 2 ? "active" : ""
                }`}
                onClick={() => handleClick(2)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  color: selectedService === 2 ? "white" : "#B0B0B0",
                  borderBottom: "1px solid #ccc",
                  position: "relative",
                  fontSize: "18px",
                }}
              >
                <i
                  className="fas fa-desktop"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 2 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Responsive Design Solutions
                <span
                  className={`arrow ${selectedService === 2 ? "rotate" : ""}`}
                  style={{
                    position: "absolute",
                    right: "20px",
                    transition: "transform 0.3s ease, margin-left 0.3s ease",
                  }}
                >
                  &rarr;
                </span>
              </button>

              {/* E-commerce Development */}
              <button
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  selectedService === 3 ? "active" : ""
                }`}
                onClick={() => handleClick(3)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  color: selectedService === 3 ? "white" : "#B0B0B0",
                  borderBottom: "1px solid #ccc",
                  position: "relative",
                  fontSize: "18px",
                }}
              >
                <i
                  className="fas fa-shopping-cart"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 3 ? "white" : "#B0B0B0",
                  }}
                ></i>
                E-commerce Development
                <span
                  className={`arrow ${selectedService === 3 ? "rotate" : ""}`}
                  style={{
                    position: "absolute",
                    right: "20px",
                    transition: "transform 0.3s ease, margin-left 0.3s ease",
                  }}
                >
                  &rarr;
                </span>
              </button>

              {/* CMS Integration */}
              <button
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  selectedService === 4 ? "active" : ""
                }`}
                onClick={() => handleClick(4)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  color: selectedService === 4 ? "white" : "#B0B0B0",
                  borderBottom: "1px solid #ccc",
                  position: "relative",
                  fontSize: "18px",
                }}
              >
                <i
                  className="fas fa-sitemap"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 4 ? "white" : "#B0B0B0",
                  }}
                ></i>
                CMS Integration
                <span
                  className={`arrow ${selectedService === 4 ? "rotate" : ""}`}
                  style={{
                    position: "absolute",
                    right: "20px",
                    transition: "transform 0.3s ease, margin-left 0.3s ease",
                  }}
                >
                  &rarr;
                </span>
              </button>

              {/* Support & Maintenance Services */}
              <button
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  selectedService === 5 ? "active" : ""
                }`}
                onClick={() => handleClick(5)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  color: selectedService === 5 ? "white" : "#B0B0B0",
                  position: "relative",
                  fontSize: "18px",
                }}
              >
                <i
                  className="fas fa-wrench"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 5 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Support & Maintenance Services
                <span
                  className={`arrow ${selectedService === 5 ? "rotate" : ""}`}
                  style={{
                    position: "absolute",
                    right: "20px",
                    transition: "transform 0.3s ease, margin-left 0.3s ease",
                  }}
                >
                  &rarr;
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Dynamic Explanation */}
          <div
            className="col-12 col-md-7"
            style={{
              backgroundColor: "#ffffff",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              borderTop: "1px solid #E7E7E7",
              borderBottom: "1px solid #E7E7E7",
              borderRight: "1px solid #E7E7E7",
            }}
          >
            {selectedService ? (
              getServiceContent(selectedService)
            ) : (
              <p>Select a service to see details</p>
            )}
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="container-fluid px-0 my-5">
        <div className="row mx-0 section3">
          {/* Left Column */}
          <div className="col-12 col-md-7 d-flex align-items-center justify-content-center mt-3">
            <h3 className="heading-text">
              {" "}
              Collaborate with our experts to craft your web development
              strategy.
            </h3>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-md-start justify-content-center">
            <div>
              <a href="/contact" style={{ textDecoration: "none" }}>
                <i
                  className="fas fa-arrow-right"
                  style={{ fontSize: "38px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="container-fluid my-5 mt-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column  */}
          <div
            className="col-12 col-md-6"
            style={{ paddingLeft: "100px", paddingRight: "100px" }}
          >
            <h3
              style={{
                fontWeight: "600",
                fontSize: "30px",
                marginBottom: "30px",
              }}
            >
              Web Development Process
              <span className="rectangle1"></span>
            </h3>

            <p
              style={{
                fontWeight: "400",
                fontSize: "20px",
                color: "#333",
                lineHeight: "1.6",
                marginBottom: "40px",
              }}
            >
              Connect your digital strategy to meaningful goals with an agile,
              iterative approach. In today’s interconnected world, a successful
              business idea depends on its ability to adapt and evolve. At
              Piquota, we follow an agile web development methodology that
              ensures continuous improvement and delivers high-quality solutions
              at every stage.
            </p>
          </div>

          {/* Right Column  */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ paddingRight: "100px" }}
          >
            <LazyImage
              src="assets/Images/API Development (2).png"
              alt="Mobile Development Process"
              className="img-fluid"
              style={{
                borderRadius: "8px",
                maxWidth: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="container my-5">
        <h2
          className="section-heading text-center"
          style={{ fontWeight: "600" }}
        >
          Industries We Serve
          <span className="rectangle1"></span>
        </h2>

        {/* First Row */}
        <div className="row mx-0 mt-5">
          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-left">
              <LazyImage
                src="assets/Images/pexels-anastasiya-gepp-654466-1462630.jpg"
                alt="Education"
                className="img-fluid mb-3"
              />
              <h4
                className="service-heading"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Education
              </h4>
              <p className="service-description">
                Leveraging advanced technologies to empower the education
                industry with the robust, breakthrough, & state-of-the-art
                applications that users love.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-left">
              <LazyImage
                src="assets/Images/pexels-shvetsa-3962285.jpg"
                alt="Grocery"
                className="img-fluid mb-3"
              />
              <h4
                className="service-heading"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Grocery
              </h4>
              <p className="service-description">
                Enabling magnates with a scalable application, designed with
                customer-centric approach in order to sell & deliver groceries
                online.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-left">
              <LazyImage
                src="assets/Images/pexels-asphotograpy-230544 (1).jpg"
                alt="eCommerce"
                className="img-fluid mb-3"
              />
              <h4
                className="service-heading"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                eCommerce
              </h4>
              <p className="service-description">
                We enable those businesses that want to launch a new online
                marketplace or add capability to an existing business.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-left">
              <LazyImage
                src="assets/Images/pexels-james-collington-2147687246-29979994.jpg"
                alt="Food & Beverages"
                className="img-fluid mb-3"
              />
              <h4
                className="service-heading"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Food & Beverages
              </h4>
              <p className="service-description">
                To enable entrepreneurs to sell online, we offer online food or
                beverages ordering solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row mx-0 mt-3">
          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-left">
              <LazyImage
                src="assets/Images/pexels-tirachard-kumtanom-112571-347134.jpg"
                alt="Healthcare & Fitness"
                className="img-fluid mb-3"
              />
              <h4
                className="service-heading"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Healthcare & Fitness
              </h4>
              <p className="service-description">
                Empowering healthcare organizations with innovative, viable, &
                future-proof technical applications that boost success.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-left">
              <LazyImage
                src="assets/Images/pexels-august-de-richelieu-4427813.jpg"
                alt="Communication"
                className="img-fluid mb-3"
              />
              <h4
                className="service-heading"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Communication
              </h4>
              <p className="service-description">
                Delivering customized, growth-oriented, & problem-solving
                applications that are relevant to the requirements of the
                Communication industry.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-left">
              <LazyImage
                src="assets/Images/pexels-elevate-1267324.jpg"
                alt="Logistics & Transportation"
                className="img-fluid mb-3"
              />
              <h4
                className="service-heading"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Logistics & Transportation
              </h4>
              <p className="service-description">
                As pioneers in ecommerce, our subject matter experts can enable
                businesses that want custom software solutions for this
                industry.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-left">
              <LazyImage
                src="assets/Images/pexels-marta-wave-6437607.jpg"
                alt="Online Video & Entertainment"
                className="img-fluid mb-3"
              />
              <h4
                className="service-heading"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Online Video & Entertainment
              </h4>
              <p className="service-description">
                Keeping a keen eye on trends, we understand online entertainment
                has maximum penetration and offer custom solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div
        className="container-fluid my-0"
        style={{
          backgroundColor: "#E9E8E9",
          paddingBottom: "40px",
          paddingTop: "50px",
        }}
      >
        <div className="row mx-0">
          <div className="col-12 text-center">
            <h2
              style={{
                fontWeight: "600",
                fontSize: "36px",
                marginBottom: "60px",
              }}
            >
              Our Work
              <span className="rectangle1"></span>
            </h2>
          </div>
        </div>

        <div className="row mx-0 align-items-center">
          {/* Left Column  */}
          <div
            className="col-12 col-md-6"
            style={{
              paddingLeft: "100px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <div style={{ marginRight: "30px" }}>
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: "22px",
                  marginBottom: "15px",
                }}
              >
                Featured Services
              </h4>

              <p
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                We developed multiple important feature in this in-house project
                by everaging JavaScript-based technologies. Here are few
                additional points regarding this web app.
              </p>

              {/* Points */}
              <div className="custom-list1">
                <div className="line-item1">API Development</div>
                <div className="line-item1">Real-Time Applications</div>
                <div className="line-item1">
                  Launch a web app with frontend that takes less rendering time
                </div>
                <div className="line-item1">Microservices Architecture</div>
                <div className="line-item1">E-Commerce Solutions</div>
                <div className="line-item1">Database integeration</div>
                <div className="line-item1">
                  Application Maintanance & Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column  */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <LazyImage
              src="assets/Images/pexels-thisisengineering-3861958 (1).jpg"
              alt="Live Chat Web App"
              className="img-fluid"
              style={{
                borderRadius: "8px",
                maxWidth: "80%",
                height: "auto",
                objectFit: "contain",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div
          className="row mx-0 align-items-center"
          style={{ width: "100%", justifyContent: "center" }}
        >
          {/* Left Column  */}
          <div
            className="col-12 col-md-8 "
            style={{
              paddingRight: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontWeight: "600",
                fontSize: "30px",
                marginBottom: "30px",
                color: "#2e2e2e",
              }}
            >
              Why Choose Piquota
              <br /> for Web Development?
              <span className="rectangle1"></span>
            </h3>
            <p
              style={{
                fontWeight: "400",
                fontSize: "20px",
                color: "#333",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              As a full-service web development company, we deliver results
              through a process-oriented approach. From in-depth research to
              cutting-edge design and development, our team brings expertise and
              creativity to every project.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "left",
              }}
            >
              <div style={{ margin: "0 10px", width: "10%" }}>
                <LazyImage
                  src="assets/Images/Team Colloboratioj.png"
                  alt="Image 1"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{ fontSize: "14px", marginTop: "10px", color: "#333" }}
                >
                  Team Collaboration
                </p>
              </div>
              <div style={{ margin: "0 10px", width: "10%" }}>
                <LazyImage
                  src="assets/Images/images (1).png"
                  alt="Image 2"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{ fontSize: "14px", marginTop: "10px", color: "#333" }}
                >
                  Innovative Ideas
                </p>
              </div>
              <div style={{ margin: "0 10px", width: "10%" }}>
                <LazyImage
                  src="assets/Images/3094843.png"
                  alt="Image 3"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{ fontSize: "14px", marginTop: "10px", color: "#333" }}
                >
                  Smart Solutions
                </p>
              </div>
              <div style={{ margin: "0 10px", width: "10%" }}>
                <LazyImage
                  src="assets/Images/analytics.png"
                  alt="Image 4"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{ fontSize: "14px", marginTop: "10px", color: "#333" }}
                >
                  Data Analytics
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-3"
            style={{
              height: "280px",
            }}
          >
            <div
              style={{
                backgroundColor: "#742e92",
                padding: "10px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ marginBottom: "10px", textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "8px",
                    color: "white",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>- </span>5+ Years
                  Experience
                </div>
              </div>
              <div style={{ marginBottom: "10px", textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "8px",
                    color: "white",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>- </span>50+ Team Members
                </div>
              </div>

              <div style={{ marginBottom: "10px", textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "8px",
                    color: "white",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>- </span>Agile
                  Development
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    marginBottom: "8px",
                    color: "white",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>- </span>Transparent
                  Process
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section mb-5">
        <h2 className="faq-heading" style={{ fontWeight: "600" }}>
          FAQ
          <span className="rectangle1"></span>
        </h2>
        <div className="accordion-container">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Will you sign a non-disclosure agreement (NDA) with us?
              </Accordion.Header>
              <Accordion.Body>
                At Piquota, we understand that confidentiality is crucial when
                sharing sensitive business information. We are happy to sign a
                non-disclosure agreement (NDA) to ensure that your project
                details and proprietary information are kept private and secure.
                This can be arranged before starting any web development project
                to protect your interests.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What methodology do you use to build custom websites?
              </Accordion.Header>
              <Accordion.Body>
                We utilize both Agile and Waterfall methodologies to develop
                custom websites, depending on the project's scope and
                requirements. Agile allows for flexibility and iterative
                development, making it ideal for projects that may evolve over
                time, while Waterfall provides a more structured approach for
                projects with clear, predefined requirements.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Do you provide ongoing support for web development projects?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we offer comprehensive support for all of our web
                development projects. This includes regular maintenance,
                security updates, bug fixes, and feature enhancements. We
                understand that the web is constantly evolving, so we provide
                clients with flexible support packages to ensure their website
                remains up-to-date and functional.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How do I track the progress of my web development project?
              </Accordion.Header>
              <Accordion.Body>
                We prioritize transparency and client communication. We provide
                access to our project management tool where you can track
                progress, milestones, and key updates. Additionally, we hold
                regular meetings or check-ins to ensure you're kept up-to-date
                with the development process and address any concerns or
                changes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Will my website be optimized for search engines (SEO)?
              </Accordion.Header>
              <Accordion.Body>
                Yes, SEO optimization is an essential part of every web
                development project we undertake. We ensure that your website is
                built with search engines in mind, using best practices for
                on-page SEO such as keyword optimization, meta tags, alt text,
                and a mobile-responsive design. We also offer ongoing SEO
                services to help improve your website's visibility and ranking.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;