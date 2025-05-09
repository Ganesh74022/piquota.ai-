import React, { useState } from "react";
import "../Styles/ReactJs.css";
import { Helmet } from 'react-helmet';

const ReactJs = () => {
  const [selectedService, setSelectedService] = useState(1);

  const handleClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const getServiceContent = (serviceId) => {
    switch (serviceId) {
      case 1:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Custom Web Development</h3>
            <p>
              We specialize in creating custom web applications tailored to your
              unique business objectives. By leveraging React.js’s powerful
              component-based architecture, we deliver dynamic and scalable
              solutions that grow with your business. Whether it’s an e-commerce
              platform, a CRM system, or an enterprise-grade portal, our team
              ensures robust functionality, seamless performance, and intuitive
              user experiences.
            </p>
          </div>
        );
      case 2:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>UI/UX Design Excellence</h3>
            <p>
              Delivering visually stunning and user-friendly interfaces is at
              the heart of what we do. Our UI/UX designers focus on crafting
              designs that not only captivate your audience but also ensure
              seamless navigation and an intuitive user experience. From
              wireframes to prototypes, we implement a design-first approach to
              maximize user satisfaction and engagement.
            </p>
          </div>
        );
      case 3:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Progressive Web Apps (PWAs)</h3>
            <p>
              We build Progressive Web Apps (PWAs) that combine the best of web
              and mobile experiences. These apps are fast, reliable, and provide
              an app-like experience, including offline functionality and push
              notifications. With React.js, we ensure your PWAs are highly
              responsive, engaging, and optimized for performance on all
              devices.
            </p>
          </div>
        );
      case 4:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Migration and Support Services </h3>
            <p>
              Transitioning to React.js has never been easier. Our migration
              services are designed to seamlessly transform your legacy systems
              into modern React.js applications without disrupting your
              operations. Post-deployment, we offer ongoing support to ensure
              your applications remain up-to-date, secure, and performing at
              their best.
            </p>
          </div>
        );
      case 5:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Interactive Dashboards</h3>
            <p>
              Transform data into actionable insights with our interactive
              dashboards. Using React.js’s advanced features, we create data
              visualization tools that present complex information in a clear
              and concise manner. From sales performance tracking to operational
              analytics, our dashboards are tailored to empower decision-making
              with real-time data.
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
        <title>React.js Development Services | Piquota</title>
        <meta name="description" content="Create dynamic, user-friendly web apps with Piquota’s expert React.js development services, tailored for seamless digital experiences." />
        <meta name="keywords" content="React.js development, Front-end development , Dynamic web applications , JavaScript framework , User interface design , React.js consulting ,Custom React solutions " />
        <meta property="og:title" content="React.js Development Services | Piquota" />
        <meta property="og:description" content="Transform your digital presence with Piquota's React.js development services. Build scalable, interactive, and high-performance web applications tailored to your business needs." />
        <meta property="og:url" content="https://www.piquota.ai/reactjs-development" />
        <meta name="twitter:title" content="React.js Development Services | Piquota" />
        <meta name="twitter:description" content="Transform your digital presence with Piquota's React.js development services. Build scalable, interactive, and high-performance web applications tailored to your business needs." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>




      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url('assets/Images/pexels-creationsbyfaik-1025469.jpg')`,
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
              className="fs-1"
              style={{
                fontWeight: 600,
                letterSpacing: "2px",
                textAlign: "left",
                color: "white",
                marginLeft: "80px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              React.Js Development
            </h1>
            <h2
              className="fs-1"
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
      <div className="container my-5" style={{ marginRight: "90px" }}>
        <div className="row mx-0 align-items-center">
          {/* First Column */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                letterSpacing: "1px",
                marginTop: "0px",
              }}
            >
              Transform Your
              <br /> Digital Presence <br /> with React.js
              <span className="rectangle1"></span>
            </h2>
          </div>

          {/* Right Side Columns */}
          <div className="col-12 col-md-8">
            <div className="row">
              {/* Column 1 */}
              <div className="col-12 col-sm-6 col-md-4 text-left mb-4 d-flex">
                <div>
                  <img
                    src="assets/Images/transfer_11235262.png"
                    alt="Lightweight Sophistication"
                    className="img-fluid"
                    style={{
                      maxWidth: "60px",
                      height: "auto",
                      marginBottom: "10px",
                    }}
                  />
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Lightweight and Fast
                  </h4>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      margin: "0",
                    }}
                  >
                    React.js empowers businesses to create lightweight yet
                    robust applications, delivering lightning-fast and highly
                    interactive user experiences.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-12 col-sm-6 col-md-4 text-left mb-4 d-flex">
                <div>
                  <img
                    src="assets/Images/scalability_15203457.png"
                    alt="Improves Scalability"
                    className="img-fluid"
                    style={{
                      maxWidth: "60px",
                      height: "auto",
                      marginBottom: "10px",
                    }}
                  />
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Scalable Architecture
                  </h4>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      margin: "0",
                    }}
                  >
                    With React.js, your applications can scale effortlessly as
                    your user base expands, ensuring smooth performance under
                    heavy traffic.
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-12 col-sm-6 col-md-4 text-left mb-4 d-flex">
                <div>
                  <img
                    src="assets/Images/agile_9608966.png"
                    alt="Agility Driven"
                    className="img-fluid"
                    style={{
                      maxWidth: "60px",
                      height: "auto",
                      marginBottom: "10px",
                    }}
                  />
                  <h4
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Agile-
                    <br />
                    Friendly
                  </h4>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      margin: "0",
                    }}
                  >
                    React.js integrates seamlessly into agile workflows,
                    enabling rapid development cycles and innovation for complex
                    projects.
                  </p>
                </div>
              </div>
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
              Comprehensive React.js Application Development Services
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
              {/* Custom Web Development */}
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
                  className="fas fa-laptop"
                  style={{
                    fontSize: "36px",
                    marginRight: "30px",
                    color: selectedService === 1 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Custom Web Development
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

              {/* UI/UX Design Excellence */}
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
                  className="fas fa-object-group"
                  style={{
                    fontSize: "36px",
                    marginRight: "35px",
                    color: selectedService === 2 ? "white" : "#B0B0B0",
                  }}
                ></i>
                UI/UX Design Excellence
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

              {/* Progressive Web Apps */}
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
                  className="fas fa-globe"
                  style={{
                    fontSize: "36px",
                    marginRight: "25px",
                    color: selectedService === 3 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Progressive Web Apps
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

              {/* Migration and Support Services */}
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
                  className="fas fa-cloud-upload-alt"
                  style={{
                    fontSize: "36px",
                    marginRight: "30px",
                    color: selectedService === 4 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Migration and Support Services
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

              {/* Interactive Dashboards */}
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
                  className="fas fa-tachometer-alt"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 5 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Interactive Dashboards
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

      {/* Section 3 */}
      <div className="container-fluid px-0 my-5">
        <div className="row mx-0 section3">
          {/* Left Column */}
          <div className="col-12 col-md-7 d-flex align-items-center justify-content-center mt-3">
            <h3 className="heading-text">
              Let’s explore the intricate details of your React development
              needs.
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
      <div className="container-fluid my-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column  */}
          <div className="col-12 col-md-7 d-flex justify-content-center">
            <img
              src="assets/Images/API Development.png"
              alt="Node.js"
              className="img-fluid"
              style={{
                borderRadius: "8px",
                maxWidth: "80%",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-5">
            <h3
              style={{
                fontWeight: "600",
                fontSize: "30px",
                marginBottom: "30px",
                marginRight: "20vh",
                color: "#333",
              }}
            >
              How We Leverage the React.js Stack to Deliver Quality Solutions
              <span className="rectangle1"></span>
            </h3>

            <div className="custom-list">
              <div className="line-items" style={{ fontWeight: "400" }}>
                Iterative, incremental, and collaborative development for
                exceptional
              </div>
              <div className="line-items" style={{ fontWeight: "400" }}>
                Accelerating innovation and reducing time-to-market.
              </div>
              <div className="line-items" style={{ fontWeight: "400" }}>
                Efficient, repeatable, and optimized solutions for global
                usability.
              </div>
              <div className="line-items" style={{ fontWeight: "400" }}>
                Leveraging universal support with extensive compatibility.
              </div>
              <div className="line-items" style={{ fontWeight: "400" }}>
                React.js offers flexibility and easy integration into existing
                projects.
              </div>
              <div className="line-items" style={{ fontWeight: "400" }}>
                Balanced server load and improved responsiveness.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="container-fluid px-5 py-5">
        <div className="text-center mb-4">
          <h2
            style={{
              fontWeight: "600",
              fontSize: "2rem",
              color: "#333",
              margin: "20px auto 30px",
            }}
          >
            Get the Agile Competitive Edge with React.js
            <span className="rectangle1"></span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#555",
              lineHeight: "1.6",
              margin: "20px auto 80px",
              fontWeight: "400",
            }}
          >
            Harness the power of React.js for dynamic, high-performance user
            interfaces. Respond to evolving
            <br /> user needs with a responsive, interactive frontend, faster
            rendering speeds, and seamless integrations,
            <br /> all driven by the flexibility and scalability of React.js
            development.
          </p>
        </div>

        <div className="row text-center">
          {/* Row 1 */}
          <div className="col-12 col-md-3 mb-4">
            <img
              src="assets/Images/10699360.png"
              alt="Non-blocking Architecture"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Non-blocking Architecture
            </h5>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <img
              src="assets/Images/12226874.png"
              alt="Real-time Applications"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Real-time Applications
            </h5>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <img
              src="assets/Images/17512752.png"
              alt="Event-driven Design"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Event-driven Design
            </h5>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <img
              src="assets/Images/17335091.png"
              alt="API Development"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              API Development
            </h5>
          </div>
        </div>

        <div className="row text-center">
          {/* Row 2 */}
          <div className="col-12 col-md-2 mb-4">
            <img
              src="assets/Images/18045089.png"
              alt="Microservices Architecture"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Microservices Architecture
            </h5>
          </div>
          <div className="col-12 col-md-2 mb-4 ">
            <img
              src="assets/Images/5700487.png"
              alt="High Scalability"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              High Scalability
            </h5>
          </div>
          <div className="col-12 col-md-2 mb-4">
            <img
              src="assets/Images/4731444.png"
              alt="Third-party Integrations"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Third-party Integrations
            </h5>
          </div>
          <div className="col-12 col-md-2 mb-4">
            <img
              src="assets/Images/6854809.png"
              alt="Automated Testing"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Automated Testing
            </h5>
          </div>
        </div>
      </div>

      {/* Section 6 */}
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
                color: "#333",
                marginBottom: "60px",
              }}
            >
              Our Expertise
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
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "22px",
                  color: "#555",
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
                We have successfully built high-performance, scalable user
                interfaces with React.js. Here are some key highlights of our
                work:
              </p>

              {/* Points */}
              <div className="custom-list" style={{ fontWeight: "400" }}>
                <div className="line-items" style={{ fontWeight: "400" }}>
                  Dynamic User Interfaces
                </div>
                <div className="line-items" style={{ fontWeight: "400" }}>
                  Interactive Web Applications
                </div>
                <div className="line-items" style={{ fontWeight: "400" }}>
                  Progressive Web Apps (PWA)
                </div>
                <div className="line-items" style={{ fontWeight: "400" }}>
                  State Management Solutions (Redux, Context API)
                </div>
                <div className="line-items" style={{ fontWeight: "400" }}>
                  Custom React Components
                </div>
                <div className="line-items" style={{ fontWeight: "400" }}>
                  Seamless Frontend-Backend Integration
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <img
              src="assets/Images/pexels-elly-fairytale-4008707.jpg"
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
              Why Choose Piquota for
              <br /> React.js Development Services?
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
              At Piquota, we create elegant web applications that seamlessly
              blend business goals with sublime user experiences. Our
              development practices balance aesthetics, functionality, and
              performance with efficiency and cost-effectiveness.
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
                <img
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
                <img
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
                <img
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
                <img
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
    </>
  );
};

export default ReactJs;
