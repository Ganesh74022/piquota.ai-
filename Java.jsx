import React, { useState } from "react";
import "../Styles/Java.css";
import { Accordion, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Java = () => {
  const [selectedService, setSelectedService] = useState(1);

  const handleClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const getServiceContent = (serviceId) => {
    switch (serviceId) {
      case 1:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Custom Development Services</h3>
            <p>
              Empower your business with personalized development services that
              cater to your unique requirements. We specialize in creating
              custom-built solutions that offer exceptional scalability,
              security, and performance. Whether you're looking to build a web
              application, mobile app, or enterprise system, our services are
              designed to match your business needs. We focus on delivering
              robust applications that are optimized for the best user
              experience, while also ensuring seamless integration with existing
              systems and technologies.
            </p>
          </div>
        );
      case 2:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Web Application Development</h3>
            <p>
              Unlock the full potential of the web with high-performance,
              secure, and scalable web applications. Our web development
              services are designed to provide flexible, dynamic, and responsive
              applications that work across all platforms and devices. We
              leverage cutting-edge technologies and frameworks to build apps
              that not only meet but exceed your expectations. From eCommerce
              platforms to content management systems, our expertise ensures
              your application is future-proof, with fast load times, intuitive
              user interfaces, and reliable performance even under high traffic
              conditions.
            </p>
          </div>
        );
      case 3:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Mobile Application Development</h3>
            <p>
              In today’s mobile-first world, having a feature-rich, intuitive
              mobile app is essential. We provide end-to-end mobile app
              development services, ensuring that your Android or iOS
              application is not only functional but also delivers an
              exceptional user experience. Whether it's a simple app or a
              complex, multi-feature platform, we ensure your mobile app
              integrates seamlessly with existing systems, is optimized for
              performance, and meets all security standards. Our team focuses on
              delivering high-quality mobile apps that help drive customer
              engagement, improve retention, and enhance your business’s overall
              performance in the digital world.
            </p>
          </div>
        );
      case 4:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Enterprise Solutions</h3>
            <p>
              Transform the way your business operates with scalable and
              efficient enterprise solutions. Our team works closely with you to
              design and develop applications that streamline business
              processes, enhance data management, and integrate various systems.
              We specialize in creating solutions that are tailored to your
              specific industry needs, ensuring that the applications improve
              workflow, reduce operational costs, and support long-term growth.
              With a focus on scalability, security, and high availability, we
              deliver enterprise-grade solutions that help you stay ahead of the
              competition and drive innovation across your organization.
            </p>
          </div>
        );
      case 5:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Integration Services</h3>
            <p>
              Integrating your systems with third-party applications is key to
              optimizing business processes and ensuring data flows seamlessly
              across your operations. We offer comprehensive integration
              services that connect your applications with essential tools like
              CRMs, ERP systems, payment gateways, and other business-critical
              systems. Our integration solutions are designed to enhance
              functionality, improve user experience, and ensure that all
              systems work together efficiently. Whether you're looking to
              connect a simple API or integrate complex systems, we provide a
              seamless experience that ensures your business processes remain
              uninterrupted and streamlined.
            </p>
          </div>
        );
      default:
        return <p>Select a service to see the explanation.</p>;
    }
  };

  return (
    <>
      <Helmet>
        <title> Java Development Services | Piquota</title>
        <meta
          name="description"
          content="Develop robust, scalable applications with Piquota’s expert Java development services, designed for enterprise-grade performance and reliability."
        />
        <meta
          name="keywords"
          content="Java development, Enterprise Java solutions,Custom Java applications,Java software development ,Spring framework,Java consulting,Scalable backend development"
        />
        <meta
          property="og:title"
          content="Java Development Services | Piquota"
        />
        <meta
          property="og:description"
          content="Piquota provides custom Java development services with a focus on scalability, security, and performance. Our expert team delivers tailored solutions for businesses of all sizes."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/java-development"
        />
        <meta
          property="og:image"
          content="https://piquota.ai/assets/images/java-development.jpg"
        />{" "}
        {/* Replace with your actual image URL */}
        <meta
          name="twitter:title"
          content="Custom Java Development Services | Piquota"
        />
        <meta
          name="twitter:description"
          content="Partner with Piquota for custom Java development services that deliver high-performance, secure, and scalable applications, designed to drive business growth and innovation."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://piquota.ai/assets/images/java-development.jpg"
        />{" "}
        {/* Replace with your actual image URL */}
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url('assets/Images/pexels-slendyalex-3648850.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div
          className="row align-items-center h-100 text-white p-3 p-sm-4"
          style={{ maxWidth: "100%", margin: "0 auto" }}
        >
          <div className="col-12">
            <h1
              className="display-6"
              style={{
                fontWeight: 600,
                textAlign: "left",
                color: "#fff",
                marginLeft: "80px",
              }}
            >
              Drive Innovation with
              <br /> Java
              <span className="rectangle1"></span>
            </h1>

            <p
              style={{
                fontWeight: 400,
                marginTop: "10px",
                textAlign: "left",
                color: "#fff",
                marginLeft: "80px",
                fontSize: "20px",
              }}
            >
              Our skilled teams leverage advanced Java frameworks, cutting-edge{" "}
              <br />
              technologies, and a collaborative approach to help you transform
              <br /> business ideas into scalable solutions. With Agile
              methodologies and
              <br /> a focus on continuous improvement, we equip your business
              with
              <br /> the tools to thrive in an evolving digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1*/}
      <div className="container py-5">
        <div className="row mx-0 text-left">
          <div className="col-12">
            <h2
              className="display-4"
              style={{
                fontWeight: 600,
                fontSize: "2rem",
              }}
            >
              Why Partner with Piquota
              <br /> for Java Development?
              <span className="rectangle1"></span>
            </h2>
          </div>
        </div>

        <div className="row mx-0 d-flex align-items-start">
          {/* Left Column  */}
          <div className="col-12 col-md-6">
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              In a fast-paced digital landscape where technology is constantly
              evolving and customer needs are ever-changing, Java-based
              eCommerce solutions must be both adaptable and precise. At
              Piquota, we focus on delivering highly scalable and secure Java
              applications using a methodical approach.
            </p>
          </div>

          {/* Right Column  */}
          <div className="col-12 col-md-6">
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              By embracing Agile practices and fostering close collaboration
              among cross-disciplinary teams, we ensure rapid development and
              seamless project delivery. Our goal is to provide solutions that
              are both innovative and reliable, helping your business stay ahead
              in the competitive eCommerce space.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2*/}
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

      {/* Section 3 */}
      <div className="container py-0">
        <div className="row text-left">
          {/* First Column */}
          <div className="col-12 col-md-4">
            <h2
              style={{
                fontSize: "4rem",
                fontWeight: "600",
              }}
            >
              <div className="purple-underline-ecommerce"></div>
              200+
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              Java experts delivering high-performance solutions across diverse
              domains, utilizing the latest frameworks and technologies to
              optimize your business operations.
            </p>
          </div>

          {/* Second Column */}
          <div className="col-12 col-md-4">
            <h2
              style={{
                fontSize: "4rem",
                fontWeight: "600",
              }}
            >
              <div className="purple-underline-ecommerce"></div>
              18+
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              years of expertise in Java development, delivering scalable,
              secure, and innovative solutions tailored to meet your evolving
              business needs.
            </p>
          </div>

          {/* Third Column */}
          <div className="col-12 col-md-4">
            <h2
              style={{
                fontSize: "4rem",
                fontWeight: "600",
              }}
            >
              <div className="purple-underline-ecommerce"></div>
              500+
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              enterprise-level Java applications built for global businesses,
              driving efficiency and empowering growth through customized
              solutions and reliable architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="container my-5">
        <div className="row mx-0 align-items-center justify-content-center g-5">
          <div className="col-12 col-md-5 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                marginBottom: "20px",
                textAlign: "left",
                fontSize: "35px",
              }}
            >
              Design that Powers <br />
              Seamless Java
              <br /> Experiences
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
              Your application should represent your brand and enhance the user
              journey. Users who interact with your application form their
              opinions based on its functionality and performance. At Piquota,
              we understand the importance of delivering top-tier Java-based
              solutions. Our team of experienced developers focuses on creating
              high-performance applications that ensure smooth user experiences.
              We offer the most value-driven Java development services,
              utilizing cutting-edge frameworks and best practices. Each project
              is designed with extensive research and a deep understanding of
              your business needs, ensuring a robust and scalable Java solution.
              For us, excellence is a standard, and we leverage the latest Java
              technologies to create applications that drive success.
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
                  <img
                    className="d-block w-100"
                    src="assets/Images/www.veltris.com_ (1).png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/Images/prophet.com_ (1).png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/Images/www.innoverdigital.com_ (1).png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
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

      {/* Section 5 */}

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
              src="assets/Images/5.png"
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
              Custom Java Development
              <br />
              for Your Groundbreaking
              <br /> Business Ideas
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

      {/* Section 6 */}
      <div className="container py-5">
        <div className="row mx-0 text-center">
          <div className="col-12">
            <h2
              className="display-4 fs-2"
              style={{
                fontWeight: 600,
                marginTop: "40px",
              }}
            >
              Delivering Future-Ready Applications with Seamless Java
              Integrations
              <span className="rectanglefullstop"></span>
            </h2>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className="container  py-1">
        <div className="row  mx-0 g-4 d-flex">
          {/* Box 1 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Build Trust with Robust Java Solutions
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We prioritize transparency and reliability in all our Java
                projects, fostering trust by delivering robust, secure solutions
                that meet client expectations.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Deliver Perfection in Every Java Application
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                With a strong focus on quality, our Java development process
                ensures that every project is executed flawlessly, providing
                businesses with high-performance applications.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Drive Innovation Through Java Development
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                Leveraging the power of Java, we turn innovative ideas into
                tangible solutions, helping businesses achieve a competitive
                edge with cutting-edge technology.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Exercise Agility in Java Projects
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                By embracing Agile methodologies, we stay responsive to client
                needs and quickly adapt our Java solutions to ensure continuous
                improvement and faster delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8 */}
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
              src="assets/Images/6.png"
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
              Lead with Java's <br />
              Best-In-Class Integrations
              <span className="rectangle1"></span>
            </h2>
            <p
              style={{
                fontWeight: "500",
                fontSize: "1.3rem",
                color: "#333",
                marginLeft: "20px",
              }}
            >
              Discover innovative solutions crafted for your unique <br />{" "}
              project needs.
            </p>
          </div>
        </div>
      </div>

      {/* Section 9 */}
      <div className="container my-5">
        <div className="row mx-0">
          <div className="col-12 text-center">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "60px",
              }}
            >
              Unlock digital potential with our custom Java development services
              <span className="rectangle1"></span>
            </h2>
          </div>
        </div>

        <div className="row mx-0 mt-5">
          {/* Left Column */}
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
              {/* Custom Java Development */}
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
                  className="fas fa-code"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 1 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Custom Java Development
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

              {/* Web Application Development */}
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
                  className="fas fa-globe"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 2 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Web Application Development
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

              {/* Mobile Application */}
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
                Mobile Application
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

              {/* Enterprise Solutions */}
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
                  className="fas fa-building"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 4 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Enterprise Solutions
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

              {/* Integration Services */}
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
                  className="fas fa-network-wired"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 5 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Integration Services
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

      {/* Section 10 */}
      <div className="container-fluid px-0 my-5">
        <div className="row mx-0 section3">
          {/* Left Column */}
          <div className="col-12 col-md-7 d-flex align-items-center justify-content-center mt-3">
            <h3 className="heading-text">
              Connect with Our Experts to Craft Your Tailored Mobile Strategy
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

      {/* Section 11 */}
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
              Seamlessly Integrate <br />
              Mobile-First Strategy with
              <br /> Purposeful Agility
            </h3>

            <p
              style={{
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "1.6",
                marginBottom: "40px",
              }}
            >
              In today’s interconnected global economy, the success of a
              business idea is influenced by numerous factors. To stay ahead,
              businesses must embrace an agile mobile-first strategy that can
              adapt to market dynamics. By initiating pilot programs and
              utilizing iterative agile development, companies can test and
              refine their concepts. Our agile approach to mobile application
              development ensures continuous improvement, tackling each task
              with precision and quality. This process not only enhances
              efficiency but also drives meaningful, long-term transformation,
              allowing businesses to deliver value and stay responsive to
              evolving customer needs.
            </p>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ paddingRight: "100px" }}
          >
            <img
              src="assets/Images/API Development (4).png"
              alt="Mobile Development Process"
              className="img-fluid"
              style={{
                borderRadius: "8px",
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 12 */}
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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

      {/* Section 13 */}
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
          {/* Left Column */}
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
                We focus on delivering exceptional Java-based solutions for
                modern web and eCommerce needs. Here are some of the core
                services we offer:
              </p>

              {/* Points */}
              <div className="custom-list">
                <div className="line-items">Custom Web Development</div>
                <div className="line-items">Scalable E-Commerce Solutions</div>
                <div className="line-items">Enterprise-Level Integration</div>
                <div className="line-items">Performance Optimization</div>
                <div className="line-items">Cloud-Based Solutions</div>
                <div className="line-items">Cross-Platform Development</div>
                <div className="line-items">Ongoing Support & Maintenance</div>
              </div>
            </div>
          </div>

          {/* Right Column  */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <img
              src="assets/Images/pexels-cottonbro-5474300.jpg"
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

      {/* Section 14 */}
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
          {/* Left Column */}
          <div
            className="col-12 col-md-8"
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
                marginBottom: "20px",
                color: "black",
              }}
            >
              Why Choose Us For Custom
              <br /> Java Development?
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
              As a full-service custom Java development company, we prioritize
              every phase of your project — from analysis and design to
              development and growth. Our expert team leverages the latest Java
              technologies to provide scalable, secure, and high-performing
              solutions that meet your business needs in today's fast-evolving
              digital world.
            </p>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-4"
            style={{
              display: "flex",
              justifyContent: "center", // Center the content in the column
              alignItems: "center", // Align content vertically in the center
            }}
          >
            <div
              style={{
                backgroundColor: "#742e92",
                padding: "40px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Align content to the top
                alignItems: "flex-start", // Align text to the left
                width: "100%", // Ensure the width is 100% to center the block
              }}
            >
              <div
                style={{
                  marginBottom: "10px",
                  textAlign: "left", // Left-align the text
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>5+ Years of
                Expertise
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  textAlign: "left", // Left-align the text
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>20+ Skilled Java
                Developers
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  textAlign: "left", // Left-align the text
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>Agile Development
                Methodology
              </div>
              <div
                style={{
                  textAlign: "left", // Left-align the text
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>Transparent
                Processes
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
                Do you provide custom Java development services for enterprises?
              </Accordion.Header>
              <Accordion.Body>
                Yes, at Piquota, we offer tailored Java development services
                specifically designed for enterprises. Whether it's developing
                robust enterprise applications, optimizing existing solutions,
                or building scalable backend systems, we have the expertise to
                deliver high-performance Java solutions that align with your
                business goals.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What is your approach to testing Java applications?
              </Accordion.Header>
              <Accordion.Body>
                We follow a rigorous testing process to ensure the quality and
                reliability of Java applications. Our approach includes unit
                testing, integration testing, system testing, and performance
                testing. We use industry-standard testing frameworks such as
                JUnit, TestNG, and Selenium to ensure that our Java applications
                are free from bugs and are optimized for performance.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can you develop Java-based mobile applications?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we specialize in developing Java-based mobile applications
                for both Android and cross-platform frameworks like React
                Native. Our Java development team ensures that your mobile app
                performs seamlessly, delivers a great user experience, and is
                compatible with a wide range of devices.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How do you ensure the scalability of Java applications?
              </Accordion.Header>
              <Accordion.Body>
                Scalability is a core aspect of our Java development process. We
                design applications with future growth in mind, using
                architectural patterns like microservices and leveraging cloud
                infrastructure to ensure seamless scaling. By adopting best
                practices like code modularity, performance optimization, and
                load balancing, we ensure that your Java applications can handle
                increasing traffic and data volume efficiently.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What Java technologies do you specialize in?
              </Accordion.Header>
              <Accordion.Body>
                Our team is skilled in a wide range of Java technologies,
                including Java SE (Standard Edition), Java EE (Enterprise
                Edition), Spring Framework, Hibernate, JPA, and JavaFX. We also
                have experience with Java-based tools and frameworks for cloud
                computing, such as Spring Boot, Apache Kafka, and Docker,
                ensuring that your application is built using the latest and
                most effective technologies.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Java;
