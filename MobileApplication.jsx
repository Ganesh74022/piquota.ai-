import React, { useState } from "react";
import "../Styles/MobileApplication.css";
import { Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { borderRadius } from "@mui/system";

// LazyImage component for lazy loading images
const LazyImage = ({ src, alt, className, style }) => (
  <img src={src} alt={alt} className={className} style={style} loading="lazy" />
);

const MobileApplication = () => {
  const [selectedService, setSelectedService] = useState(1);

  const handleClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const getServiceContent = (serviceId) => {
    switch (serviceId) {
      case 1:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Android App Development</h3>
            <p>
              At Piquota, we specialize in creating high-performance,
              feature-rich Android applications tailored to meet the unique
              needs of your business. From the initial idea to deployment, our
              team ensures that your app delivers an outstanding user
              experience. We leverage the latest tools and frameworks to build
              secure, scalable, and reliable Android apps, whether for
              smartphones, tablets, or wearable devices. Whether you’re looking
              to build a native Android app or need support for integrating
              Android-based technologies into your business, our developers are
              equipped to turn your vision into reality.
            </p>
          </div>
        );
      case 2:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>iOS App Development</h3>
            <p>
              Our expert iOS app development team is committed to creating
              intuitive, beautiful, and robust applications for iPhone and iPad
              users. By leveraging the latest iOS frameworks and adhering to
              Apple’s strict guidelines, we build apps that deliver unmatched
              performance and user satisfaction. Whether you need a native app
              for your business or are looking for a custom solution to improve
              user engagement, we specialize in creating apps that drive
              results. From design and development to testing and launch,
              Piquota ensures that your iOS app is seamless, functional, and
              capable of scaling with your business.
            </p>
          </div>
        );
      case 3:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Hybrid Mobile App Development</h3>
            <p>
              Hybrid mobile apps offer the best of both worlds—combining the
              advantages of native applications with the flexibility of web
              apps. At Piquota, our hybrid mobile app development services allow
              you to reach a wider audience while maintaining a unified user
              experience across multiple platforms. We utilize cutting-edge
              frameworks such as React Native, Flutter, and Ionic to develop
              hybrid apps that run seamlessly on both Android and iOS devices.
              With our expertise, we can help you save development time and
              costs while delivering an app that performs flawlessly across
              multiple devices.
            </p>
          </div>
        );
      case 4:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Mobile User Experience Design</h3>
            <p>
              Great mobile app development starts with a great user experience
              (UX) design. At Piquota, we understand the importance of creating
              mobile apps that are not only functional but also engaging and
              user-friendly. Our UX design team focuses on intuitive navigation,
              clean interfaces, and seamless interactions to ensure your users
              have a positive experience. Whether you need to design a new app
              or improve an existing one, we create designs that are responsive,
              visually appealing, and optimized for user satisfaction across
              different mobile devices.
            </p>
          </div>
        );
      case 5:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Mobile App Support & Maintenance</h3>
            <p>
              Once your mobile app is launched, continuous support and
              maintenance are crucial to ensure its longevity and functionality.
              At Piquota, we provide ongoing mobile app support and maintenance
              services to keep your app running smoothly and up-to-date. From
              fixing bugs and adding new features to ensuring compatibility with
              the latest OS versions, we ensure that your app is always
              performing at its best. Our team is ready to assist you with
              updates, troubleshooting, and performance optimization so you can
              focus on growing your business while we handle the technical
              aspects.
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
        <title>Mobile Application Development | Piquota</title>
        <meta
          name="description"
          content="Build innovative, high-performance mobile apps with Piquota’s custom development services for iOS and Android, driving business growth."
        />
        <meta
          name="keywords"
          content="mobile app development,iOS app development, Android app development ,Cross-platform apps , Custom mobile solutions , Mobile UX design ,App development consulting  ,"
        />
        <meta
          property="og:title"
          content="Custom Mobile App Development Services | Piquota"
        />
        <meta
          property="og:description"
          content="Accelerate your business with custom mobile app development services from Piquota. We deliver tailored Android, iOS, and hybrid apps that drive success in a mobile-first world."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/mobile-app-development"
        />
        <meta
          name="twitter:title"
          content="Custom Mobile App Development Services | Piquota"
        />
        <meta
          name="twitter:description"
          content="Accelerate your business with custom mobile app development services from Piquota. We deliver tailored Android, iOS, and hybrid apps that drive success in a mobile-first world."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url('assets/Images/pexels-adrien-olichon-1257089-2387532.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div
          className="row align-items-center h-100 text-white p-3 p-sm-5"
          style={{ maxWidth: "100%", margin: "0 auto" }}
        >
          <div className="col-12">
            <h1
              className="fs-2"
              style={{
                fontWeight: 600,
                textAlign: "left",
                color: "white",
                marginLeft: "80px",
              }}
            >
              Accelerate Mobile Efforts With Custom<br></br> Mobile Application
              Development
            </h1>
            <h2
              className="display-3"
              style={{
                fontWeight: 600,
                marginTop: "10px",
                textAlign: "left",
                color: "white",
                marginLeft: "80px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Services
              <span className="rectangle"></span>
            </h2>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="container my-5" style={{ marginRight: "80px" }}>
        <div className="row mx-0 align-items-center">
          {/* First Column */}
          <div className="col-12 col-md-5 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                marginBottom: "20px",
                marginRight: "10vh",
              }}
            >
              Outcomes That Drive Success in a Mobile-First Era
              <span className="rectangle1"></span>
            </h2>
          </div>

          {/* Second Column */}
          <div className="col-12 col-sm-6 col-md-2 text-md-left">
            <div>
              <LazyImage
                src="assets/Images/transfer_11235262.png"
                alt="Lightweight Sophistication"
                className="img-fluid"
                style={{ maxWidth: "60px", height: "auto" }}
              />
              <h4
                style={{
                  marginTop: "10px",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Lightweight Sophistication
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Move beyond outdated strategies and embrace a digital-first
                approach to stay ahead in a competitive market.
              </p>
            </div>
          </div>

          {/* Third Column */}
          <div className="col-12 col-sm-6 col-md-2 text-md-left">
            <div>
              <LazyImage
                src="assets/Images/scalability_15203457.png"
                alt="Improves Scalability"
                className="img-fluid"
                style={{ maxWidth: "60px", height: "auto" }}
              />
              <h4
                style={{
                  marginTop: "10px",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Improves Scalability
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Facilitate seamless collaboration with employees, customers, and
                partners to drive greater value and productivity.
              </p>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="col-12 col-md-2 text-md-left">
            <div>
              <LazyImage
                src="assets/Images/agile_9608966.png"
                alt="Agility Driven"
                className="img-fluid"
                style={{ maxWidth: "60px", height: "auto" }}
              />
              <h4
                style={{
                  marginTop: "10px",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Agility Driven
              </h4>
              <p style={{ fontWeight: "400", fontSize: "17px" }}>
                Strengthen your business presence in disruptive times by
                leveraging mobile as a vital engagement platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container my-5">
        <div className="row mx-0">
          <div className="col-12 text-center">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "60px",
              }}
            >
              Elevate Your Digital Strategy with Our Custom Mobile App
              Development Services
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
              {/* Andriod App Development */}
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
                  className="fab fa-android"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 1 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Android App Development
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

              {/* iOS App Development */}
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
                  className="fab fa-apple"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 2 ? "white" : "#B0B0B0",
                  }}
                ></i>
                iOS App Development
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

              {/* Hybrid Mobile App Development */}
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
                  className="fas fa-mobile-alt"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 3 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Hybrid Mobile App Development
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

              {/* Mobile User Experience Design */}
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
                  className="fas fa-cogs"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 4 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Mobile User Experience Design
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

              {/* Support & Maintenance */}
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
                  className="fas fa-server"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 5 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Support & Maintenance
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

          {/* Right Column */}
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

      {/* Section 3 */}
      <div className="container-fluid px-0 my-5">
        <div className="row mx-0 section3">
          {/* Left Column */}
          <div className="col-12 col-md-7 d-flex align-items-center justify-content-center mt-3">
            <h3 className="heading-text">
              {" "}
              Connect with our experts to devise your mobile strategy
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

      {/* Section 4 */}
      <div className="container-fluid my-5 mt-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column */}
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
              Connect a Mobile-First <br />
              Strategy with Purpose and Agility
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
              In today’s interconnected global landscape, success is determined
              by a range of dynamic factors. Businesses can navigate this
              complexity by implementing pilot programs that leverage iterative
              and agile methodologies. At Piquota, our mobile app development
              process focuses on iterative improvement, ensuring steady
              advancements that deliver impactful and transformational outcomes.
            </p>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ paddingRight: "100px" }}
          >
            <LazyImage
              src="assets/Images/API Development (1).png"
              alt="Mobile Development Process"
              className="img-fluid"
              style={{
                borderRadius: "8px",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 5 */}
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

      {/* Section 6 */}
      <div
        className="container-fluid my-0"
        style={{
          backgroundColor: "#E9E8E9",
          paddingBottom: "40px",
          paddingTop: "40px",
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
                  marginBottom: "20px",
                }}
              >
                We deliver tailored mobile solutions by leveraging cutting-edge
                technologies. Highlights include:
              </p>

              {/* Points */}
              <div className="custom-list">
                <div className="line-items" style={{fontWeight:'500'}}>Custom API Development</div>
                <div className="line-items" style={{fontWeight:'500'}}>Real-Time App Solutions</div>
                <div className="line-items" style={{fontWeight:'500'}}>Fast-Rendering Frontends</div>
                <div className="line-items" style={{fontWeight:'500'}}>Microservices Architecture</div>
                <div className="line-items" style={{fontWeight:'500'}}>eCommerce Development</div>
                <div className="line-items" style={{fontWeight:'500'}}>Database Integration</div>
                <div className="line-items" style={{fontWeight:'500'}}>Ongoing Support & Maintenance</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <LazyImage
              src="assets/Images/pexels-cottonbro-5081423 (1).jpg"
              alt="mobile application"
              className="img-fluid"
              style={{
                maxWidth: "80%",
                height: "auto",
                objectFit: "contain",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius:'10px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 7 */}
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
              Why Choose Piquota for <br />
              Custom Mobile App Development?
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
              As a full-cycle mobile app development company, we focus on every
              stage of the process—from analysis and design to development and
              growth. Our experienced team provides innovative solutions to
              tackle the challenges of a mobile-first world, ensuring your
              business’s mobility goals are achieved.
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
                Do you offer customized mobile app development services for
                businesses?
              </Accordion.Header>
              <Accordion.Body>
                Yes, at Piquota, we specialize in developing custom mobile
                applications tailored to the specific needs of your business.
                Whether it's for iOS, Android, or cross-platform solutions, we
                create apps that enhance user experience, drive engagement, and
                meet business objectives. Our team works closely with clients to
                deliver the most suitable mobile app solutions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How do you ensure data security and privacy for mobile app
                projects?
              </Accordion.Header>
              <Accordion.Body>
                Data security is a top priority in mobile app development. We
                implement industry-standard encryption techniques, follow secure
                coding practices, and comply with all relevant data protection
                regulations. We also offer non-disclosure agreements (NDAs) to
                ensure that sensitive data shared during the project is kept
                confidential and protected.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What mobile app development technologies do you specialize in?
              </Accordion.Header>
              <Accordion.Body>
                We specialize in a wide range of mobile app development
                technologies, including native development for iOS (Swift,
                Objective-C) and Android (Java, Kotlin), as well as
                cross-platform frameworks like React Native and Flutter. Our
                team stays up-to-date with the latest trends and tools to ensure
                the best performance and user experience.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How do you ensure the success of a mobile app development
                project from start to finish?
              </Accordion.Header>
              <Accordion.Body>
                Our approach to mobile app development focuses on clear
                communication, transparency, and collaboration. We use an agile
                methodology to allow flexibility and ensure that client feedback
                is integrated throughout the development process. Regular
                progress updates, testing, and client reviews help us meet
                deadlines and deliver high-quality apps on time.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What ongoing support and maintenance do you offer after mobile
                app launch?
              </Accordion.Header>
              <Accordion.Body>
                We offer comprehensive post-launch support and maintenance for
                mobile apps, ensuring they run smoothly and efficiently. Our
                services include bug fixes, performance improvements, updates to
                keep the app compatible with new OS versions, and feature
                enhancements. We provide flexible support plans based on the
                evolving needs of your business and users.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default MobileApplication;