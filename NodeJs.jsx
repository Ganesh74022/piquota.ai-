import React, { useState, lazy, Suspense } from "react";
import "../Styles/NodeJs.css";
import { Helmet } from "react-helmet";

// Lazy loading for large components if needed in the future
// const LazyComponent = lazy(() => import('./LazyComponent'));
const ServiceBox = ({ imageSrc, title }) => (
  <div className="service-box">
    <LazyImage src={imageSrc} alt={title} className="service-image" />
    <h3 className="service-title">{title}</h3>
  </div>
);

const NodeJs = () => {
  const [selectedService, setSelectedService] = useState(1);

  const handleClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const getServiceContent = (serviceId) => {
    switch (serviceId) {
      case 1:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Custom Web Applications</h3>
            <p>
              Our team specializes in designing and developing custom web
              applications tailored to your business needs. Whether it's an
              eCommerce platform to enhance online sales, a content management
              system to streamline your digital content, or advanced data
              analytics tools to derive actionable insights, we utilize the
              speed, efficiency, and reliability of Node.js to deliver solutions
              that exceed expectations.
            </p>
          </div>
        );
      case 2:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Dynamic Dashboards</h3>
            <p>
              Leverage the power of interactive and visually engaging dashboards
              designed to provide real-time data insights. With Node.js at its
              core, our dashboards enable businesses to monitor operations,
              track performance metrics, and make data-driven decisions with
              ease, ensuring enhanced productivity and control.
            </p>
          </div>
        );
      case 3:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Social Media Applications</h3>
            <p>
              We create feature-rich, scalable, and user-centric social media
              applications that foster engagement and seamless interactions.
              From real-time notifications and activity feeds to advanced
              security and scalability features, Node.js empowers us to build
              social media platforms that deliver exceptional user experiences.
            </p>
          </div>
        );
      case 4:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Real-Time Chat Applications</h3>
            <p>
              Transform user communication with robust, real-time chat
              applications. Our Node.js-based solutions ensure smooth
              connectivity, instant messaging, and high reliability, making them
              ideal for businesses aiming to offer real-time communication
              services, whether for customer support, team collaboration, or
              social networking.
            </p>
          </div>
        );
      case 5:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>API Development</h3>
            <p>
              Simplify the integration of your systems and enable seamless data
              exchange between applications with our efficient API development
              services. Node.js allows us to build secure, high-performance APIs
              that can handle complex workflows and ensure smooth communication
              across diverse platforms.
            </p>
          </div>
        );
      default:
        return <p>Select a service to see the explanation.</p>;
    }
  };

  // Reusable Image component with lazy loading
  const LazyImage = ({ src, alt, className, style }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
      />
    );
  };

  // Service Box component for reuse
  const ServiceBox = ({ imageSrc, title }) => (
    <div className="service-box text-center">
      <LazyImage
        src={imageSrc}
        alt={title}
        className="img-fluid mb-3"
      />
      <h4
        className="service-heading"
        style={{ fontWeight: "600", fontSize: "20px" }}
      >
        {title}
      </h4>
    </div>
  );

  // Feature Icon component for reuse
  const FeatureIcon = ({ imageSrc, title, colSize = "col-12 col-md-3" }) => (
    <div className={colSize + " mb-4"}>
      <LazyImage
        src={imageSrc}
        alt={title}
        className="img-fluid mb-3"
        style={{ width: "120px" }}
      />
      <h5 style={{ fontWeight: "500", color: "#333" }}>{title}</h5>
    </div>
  );

  // Service Button component
  const ServiceButton = ({ id, icon, title }) => (
    <button
      className={`list-group-item list-group-item-action d-flex align-items-center ${
        selectedService === id ? "active" : ""
      }`}
      onClick={() => handleClick(id)}
      style={{
        cursor: "pointer",
        padding: "20px",
        backgroundColor: "transparent",
        border: "none",
        textAlign: "left",
        color: selectedService === id ? "white" : "#B0B0B0",
        borderBottom: id !== 5 ? "1px solid #ccc" : "none",
        position: "relative",
        fontSize: "18px",
      }}
    >
      <i
        className={icon}
        style={{
          fontSize: "36px",
          marginRight: "15px",
          color: selectedService === id ? "white" : "#B0B0B0",
        }}
      ></i>
      {title}
      <span
        className={`arrow ${selectedService === id ? "rotate" : ""}`}
        style={{
          position: "absolute",
          right: "20px",
          transition: "transform 0.3s ease, margin-left 0.3s ease",
        }}
      >
        &rarr;
      </span>
    </button>
  );

  
  return (
    <>
      <Helmet>
        <title>Node.js Development Services | Piquota</title>
        <meta
          name="description"
          content="Build scalable, high-performance apps with Piquota’s expert Node.js development services, tailored for your business’s digital transformation."
        />
        <meta
          name="keywords"
          content="Node.js development, Custom Node.js solutions, Scalable web applications,Backend development , JavaScript runtime,Real-time applications , Node.js consulting"
        />
        <meta
          property="og:title"
          content="Node.js Development Services | Piquota"
        />
        <meta
          property="og:description"
          content="Explore our Node.js development services for scalable, high-performance web applications. Build real-time applications, APIs, and more with Piquota's expertise."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/nodejs-development"
        />
        <meta
          name="twitter:title"
          content="Node.js Development Services | Piquota"
        />
        <meta
          name="twitter:description"
          content="Explore our Node.js development services for scalable, high-performance web applications. Build real-time applications, APIs, and more with Piquota's expertise."
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="assets/Images/pexels-photo-12198537.webp"
          as="image"
        />
        {/* Add preconnect for external resources if any */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url('assets/Images/pexels-photo-12198537.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "right",
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
              Node.Js Development
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
          <div className="col-12 col-md-5 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                letterSpacing: "1px",
                marginTop: "0px",
              }}
            >
              Why Choose
              <br /> Node.js for Your
              <br /> Business?
              <span className="rectangle1"></span>
            </h2>
          </div>

          {/* Right Side Columns */}
          <div className="col-12 col-md-7">
            <div className="row mx-0">
              {/* Column 1 */}
              <div className="col-12 col-sm-6 col-md-4 text-left mb-4 d-flex">
                <div>
                  <LazyImage
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
                    Streamlined Efficiency
                  </h4>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      margin: "0",
                    }}
                  >
                    Node.js is lightweight and optimized for high-demand
                    applications.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-12 col-sm-6 col-md-4 text-left mb-4 d-flex">
                <div>
                  <LazyImage
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
                    Enhanced Scalability
                  </h4>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      margin: "0",
                    }}
                  >
                    Handle growing user traffic effortlessly with Node.js's
                    robust architecture.
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-12 col-sm-6 col-md-4 text-left mb-4 d-flex">
                <div>
                  <LazyImage
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
                    Agility at Its Core
                  </h4>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      margin: "0",
                    }}
                  >
                    Adapt to dynamic needs with Node.js's flexibility for
                    resource-heavy applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container my-5 nodejs-services-section">
        <div className="row mx-0">
          <div className="col-12 text-center">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "60px",
              }}
            >
              Our Node.js Development Services
              <span className="rectangle1"></span>
            </h2>
          </div>
        </div>

        <div className="row mx-0 mt-5">
          {/* Left Column */}
          <div
            className="col-12 col-md-5 nodejs-services-section-left"
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
              <ServiceButton 
                id={1} 
                icon="fas fa-laptop" 
                title="Web Development" 
              />
              <ServiceButton 
                id={2} 
                icon="fas fa-tachometer-alt" 
                title="Dashboard Development" 
              />
              <ServiceButton 
                id={3} 
                icon="fas fa-users" 
                title="Social Media Application Development" 
              />
              <ServiceButton 
                id={4} 
                icon="fas fa-comment-alt" 
                title="Real-Time Chat Application Development" 
              />
              <ServiceButton 
                id={5} 
                icon="fas fa-code" 
                title="API Development" 
              />
            </div>
          </div>

          {/* Right Column - Dynamic Explanation */}
          <div
            className="col-12 col-md-7 nodejs-services-section-left"
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
            {/* Displaying Service Content */}
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
            <h3 className="heading-text">Build powerful Node.js solutions.</h3>
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
        <div className="row mx-0 align-items-center justify-content-center">
          {/* Left Column  */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <LazyImage
              src="assets/Images/API Development.jpg"
              alt="Node.js"
              className="img-fluid"
              style={{
                maxWidth: "80%",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
            <div className="content-wrapper">
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "28px",
                  marginBottom: "30px",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                Node.js Technology Stack at Piquota
              </h3>
              <div className="custom-list">
                {[
                  "API Development for seamless communication",
                  "Real-time Applications with event-driven architecture",
                  "Microservices Architecture for modular development",
                  "Database Integration for efficient data handling",
                  "Application Maintenance",
                  "Support to keep your business running smoothly",
                  "Application Maintenance & Support"
                ].map((item, index) => (
                  <div key={index} className="line-items" style={{ fontWeight: "400" }}>
                    {item}
                  </div>
                ))}
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
            Get the Agile Competitive Edge with Node.js
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
            Harness the power of Node.js for scalable, high-performance web
            applications. Respond to <br />
            dynamic business environments with a robust backend, faster
            execution speeds, and seamless
            <br />
            integrations, all driven by the versatility and adaptability of
            Node.js development.
          </p>
        </div>

        <div className="row text-center">
          {/* Row 1 */}
          <FeatureIcon 
            imageSrc="assets/Images/10699360.png" 
            title="Non-blocking Architecture"
          />
          <FeatureIcon 
            imageSrc="assets/Images/12226874.png" 
            title="Real-time Applications"
          />
          <FeatureIcon 
            imageSrc="assets/Images/17512752.png" 
            title="Event-driven Design"
          />
          <FeatureIcon 
            imageSrc="assets/Images/17335091.png" 
            title="API Development"
          />
        </div>

        <div className="row text-center">
          {/* Row 2 */}
          <FeatureIcon 
            imageSrc="assets/Images/18045089.png" 
            title="Microservices Architecture"
            colSize="col-12 col-md-2"
          />
          <FeatureIcon 
            imageSrc="assets/Images/5700487.png" 
            title="High Scalability"
            colSize="col-12 col-md-2"
          />
          <FeatureIcon 
            imageSrc="assets/Images/4731444.png" 
            title="Third-party Integrations"
            colSize="col-12 col-md-2"
          />
          <FeatureIcon 
            imageSrc="assets/Images/6854809.png" 
            title="Automated Testing"
            colSize="col-12 col-md-2"
          />
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
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "36px",
                color: "#333",
                marginBottom: "50px",
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
                We have delivered mission-critical web applications using
                JavaScript-based technologies. Here are some highlights of our
                work:
              </p>

              {/* Points */}
              <div className="custom-list">
                {[
                  "API Development",
                  "Real-Time Applications",
                  "Microservices Architecture",
                  "E-Commerce Solutions",
                  "Database Integration",
                  "Application Maintenance & Support",
                  "Live Chat Web App"
                ].map((item, index) => (
                  <div key={index} className="line-items" style={{ fontWeight: "400" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column  */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <LazyImage
              src="assets/Images/pexels-fotios-photos-16129724 (1).jpg"
              alt="Node"
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
      <div className="container my-5">
    <h2 className="section-heading text-center" style={{ fontWeight: "600" }}>
      Industry Expertise
      <span className="rectangle1"></span>
    </h2>
    <p className="section-heading text-center m-4 w-75 mx-auto" style={{ fontSize: "22px", fontWeight: "400" }}>
      We have delivered enterprise-grade software solutions across industries for clients around the globe. With relevant experience and efficient processes, our team designs and develops web applications suited to startups, SMBs, and large enterprises. Here are some industries where we excel
    </p>
    {/* First Row */}
    <div className="row mx-0 mt-5">
      <div className="col-12 col-md-3 mb-4">
        <ServiceBox imageSrc="assets/Images/pexels-anastasiya-gepp-654466-1462630.jpg" title="Education" />
      </div>
      <div className="col-12 col-md-3 mb-4">
        <ServiceBox imageSrc="assets/Images/pexels-shvetsa-3962285.jpg" title="Grocery" />
      </div>
      <div className="col-12 col-md-3 mb-4">
        <ServiceBox imageSrc="assets/Images/pexels-asphotograpy-230544 (1).jpg" title="eCommerce" />
      </div>
      <div className="col-12 col-md-3 mb-4">
        <ServiceBox imageSrc="assets/Images/pexels-james-collington-2147687246-29979994.jpg" title="Food & Beverages" />
      </div>
    </div>
    {/* Second Row */}
    <div className="row mx-0 mt-3">
      <div className="col-12 col-md-3 mb-4">
        <ServiceBox imageSrc="assets/Images/pexels-tirachard-kumtanom-112571-347134.jpg" title="Healthcare & Fitness" />
      </div>
      <div className="col-12 col-md-3 mb-4">
        <ServiceBox imageSrc="assets/Images/pexels-august-de-richelieu-4427813.jpg" title="Communication" />
      </div>
      <div className="col-12 col-md-3 mb-4">
        <ServiceBox imageSrc="assets/Images/pexels-elevate-1267324.jpg" title="Logistics & Transportation" />
      </div>
      <div className="col-12 col-md-3 mb-4">
        <ServiceBox imageSrc="assets/Images/pexels-marta-wave-6437607.jpg" title="Online Video & Entertainment" />
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
              Why Choose Us For Node <br /> Development Services
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
              As a full-service web app development agency, we provide
              comprehensive support through every stage, including analysis,
              design, development, and growth. Our experienced team adopts a
              process-driven approach to tackle scalability challenges and help
              implement new business models seamlessly.
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
              {[
                { img: "assets/Images/Team Colloboratioj.png", title: "Team Collaboration" },
                { img: "assets/Images/images (1).png", title: "Innovative Ideas" },
                { img: "assets/Images/3094843.png", title: "Smart Solutions" },
                { img: "assets/Images/analytics.png", title: "Data Analytics" }
              ].map((item, index) => (
                <div key={index} style={{ margin: "0 10px", width: "10%" }}>
                  <LazyImage
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <p style={{ fontSize: "14px", marginTop: "10px", color: "#333" }}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-3"
            style={{
              height: "300px",
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
              {[
                "5+ Years Experience",
                "50+ Team Members",
                "Agile Development",
                "Transparent Process"
              ].map((item, index) => (
                <div key={index} style={{ marginBottom: index < 3 ? "10px" : "0", textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "300",
                      marginBottom: "8px",
                      color: "white",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>- </span>{item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodeJs;