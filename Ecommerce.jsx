import React, { useState } from "react";
import "../Styles/Ecommerce.css";
import { Accordion, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Ecommerce = () => {
  const [selectedService, setSelectedService] = useState(1);

  const handleClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const getServiceContent = (serviceId) => {
    switch (serviceId) {
      case 1:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Custom eCommerce Development</h3>
            <p>
              Our custom eCommerce development services help businesses build
              online stores that perfectly align with their unique requirements.
              From intuitive designs to seamless functionalities, we develop
              scalable platforms that drive sales, enhance user experience, and
              deliver measurable business growth. We integrate the latest
              technologies and best practices to create feature-rich eCommerce
              platforms, ensuring your business stays ahead in the competitive
              digital marketplace.
            </p>
          </div>
        );
      case 2:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>eCommerce Web Design</h3>
            <p>
              A visually appealing and responsive web design is crucial to
              attracting and retaining customers. Our eCommerce web design
              services focus on creating user-friendly, mobile-optimized
              websites that provide an engaging shopping experience. With a
              focus on seamless navigation, aesthetic layouts, and fast loading
              speeds, we ensure that your online store offers an enjoyable
              experience that encourages conversions and customer loyalty.
            </p>
          </div>
        );
      case 3:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Mobile eCommerce Development</h3>
            <p>
              In today's digital landscape, mobile commerce is a must. We offer
              mobile eCommerce solutions that are fully optimized for
              smartphones and tablets. Whether you're looking to build a mobile
              app or optimize your website for mobile users, our solutions
              provide smooth, user-centric designs and functionalities. We
              ensure that your business reaches customers wherever they are,
              offering a seamless shopping experience that drives engagement and
              sales.
            </p>
          </div>
        );
      case 4:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>eCommerce Platform Integration</h3>
            <p>
              Seamless integration of third-party systems is essential for
              enhancing the functionality of your eCommerce store. We specialize
              in integrating popular eCommerce platforms such as Shopify,
              Magento, WooCommerce, and BigCommerce with CRM, ERP, payment
              gateways, inventory management systems, and more. Our integration
              solutions ensure that all your tools work together, streamlining
              operations and improving customer satisfaction.
            </p>
          </div>
        );
      case 5:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Support & Maintenance</h3>
            <p>
              The success of an eCommerce store doesn’t end with development. We
              provide ongoing support and maintenance to ensure your platform
              runs smoothly at all times. From troubleshooting technical issues
              to updating features and ensuring security, we offer continuous
              support that allows your business to stay agile and responsive to
              customer needs, market trends, and evolving technologies.
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
        <title> E-commerce Development Solutions | Piquota</title>
        <meta
          name="description"
          content="Grow your online store with Piquota’s e-commerce development, offering secure, scalable platforms tailored for seamless shopping experiences.."
        />
        <meta
          name="keywords"
          content="E-Commerce development, Online store solutions ,E-commerce platforms,Secure payment integration,Shopify development,Magento development,Custom e-commerce solutions "
        />
        <meta
          property="og:title"
          content="ECommerce Development Services | Piquota"
        />
        <meta
          property="og:description"
          content="Piquota offers custom eCommerce development services, delivering tailored solutions that enhance customer engagement, increase sales, and ensure seamless online shopping experiences."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/custom-ecommerce-development"
        />
        <meta
          property="og:image"
          content="https://piquota.ai/assets/images/your-image.jpg"
        />
        <meta
          name="twitter:title"
          content="Custom eCommerce Development Services | Piquota"
        />
        <meta
          name="twitter:description"
          content="Piquota provides custom eCommerce development services to enhance user experience and drive business growth with tailored solutions for B2B and B2C marketplaces."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://piquota.ai/assets/images/your-image.jpg"
        />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url('assets/Images/pexels-steve-28947852.jpg')`,
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
              Custom eCommerce
              <br /> Development Solutions
              <span className="rectangle1"></span>
            </h1>
            <p
              style={{
                fontWeight: 400,
                marginTop: "30px",
                textAlign: "left",
                color: "#fff",
                marginLeft: "80px",
                fontSize: "20px",
              }}
            >
              Empower your business with tailored eCommerce development
              <br /> services designed to simplify customer journeys and drive
              <br /> conversions.
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
              Why Piquota for Custom eCommerce Development<br></br> Services?
              <span className="rectangle1"></span>
            </h2>
          </div>
        </div>

        <div className="row mx-0 d-flex align-items-start">
          {/* Left Column */}
          <div className="col-12 col-md-6">
            <p
              style={{
                fontSize: "22px",
                color: "#555",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              Custom eCommerce development bridges the gap between ideation,
              strategy, and the seamless execution of tailored online
              marketplaces. These solutions ensure that every platform aligns
              with brand identity while delivering exceptional functionality to
              meet unique operational and customer-centric goals.
            </p>
          </div>

          {/* Right Column  */}
          <div className="col-12 col-md-6">
            <p
              style={{
                fontSize: "22px",
                color: "#555",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              A structured process begins with analyzing business needs and
              crafting a strategic foundation. This approach guarantees a
              streamlined development journey, resulting in high-performance
              platforms. By combining expertise, attention to detail, and
              operational precision, businesses can deliver superior experiences
              and achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
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
                color: "black",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              Ecommerce specialists creating value at every touchpoint of the
              customer journey by implementing top-tier technology solutions.
            </p>
          </div>

          {/* Second Column */}
          <div className="col-12 col-md-4">
            <h2
              style={{
                fontSize: "4rem",
                fontWeight: "600",
                color: "black",
              }}
            >
              <div className="purple-underline-ecommerce"></div>
              18+
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "black",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              Years of a proven track record, delivering innovative and scalable
              ecommerce solutions across the entire ecommerce lifecycle.
            </p>
          </div>

          {/* Third Column */}
          <div className="col-12 col-md-4">
            <h2
              style={{
                fontSize: "4rem",
                fontWeight: "600",
                color: "black",
              }}
            >
              <div className="purple-underline-ecommerce"></div>
              500+
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "black",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              Enterprise-level ecommerce platforms developed for global B2B and
              B2C leaders, driving growth and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/*  Section 3 */}
      <div className="container px-0 py-5">
        <h2
          className="text-left"
          style={{ fontWeight: "600", fontSize: "2rem" }}
        >
          Ecommerce Solutions That Drive Business Success
          <span className="rectangle1"></span>
        </h2>

        {/* First Row - 5 Columns */}
        <div className="row  mx-0 gap-4" style={{ marginTop: "50px" }}>
          {/* Strategy and Consulting */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/graph_3647769.png"
              alt="Strategy and Consulting"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>Strategy & Planning</h5>
          </div>

          {/* B2B & B2C Ecommerce Development */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/b2b_18572953.png"
              alt="B2B & B2C Ecommerce Development"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>B2B & B2C Ecommerce Platforms</h5>
          </div>

          {/* mCommerce App Development */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/online-shopping_4000506.png"
              alt="mCommerce App Development"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>Mobile App Development</h5>
          </div>

          {/* eCommerce User Experience */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/ecommerce_15883076.png"
              alt="eCommerce User Experience"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>Digital Marketing for Ecommerce</h5>
          </div>

          {/* eCommerce Marketing */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/scalability_15203457.png"
              alt="eCommerce Marketing"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>Platform Upgrades & Migration</h5>
          </div>
        </div>

        {/* Second Row - 4 Columns */}
        <div className="row mx-0 mt-4">
          {/* Platform Migration */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/sharing_6919545.png"
              alt="Platform Migration"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>Platform Migration</h5>
          </div>

          {/* Enterprise Integrations */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/transfer_11235262.png"
              alt="Enterprise Integrations"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>Enterprise Integration Solutions</h5>
          </div>

          {/* CMS Development */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/lean_12732075.png"
              alt="CMS Development"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>Content Management Systems</h5>
          </div>

          {/* Conversion Rate Optimization */}
          <div className="col-12 col-md-2 text-center">
            <img
              src="assets/Images/network-connection_5342600.png"
              alt="Conversion Rate Optimization"
              className="img-fluid mb-3"
              style={{ width: "100px" }}
            />
            <h5>Conversion Optimization</h5>
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
              Designing eCommerce <br />
              Solutions That
              <br /> Drive Growth
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
              Your eCommerce platform is more than just a store; it's a
              reflection of your business and brand. When customers engage with
              your online store, their first impression can shape their entire
              perception of your company. At Piquota, we understand the
              significance of a user-centered design and offer comprehensive
              eCommerce development services. Our team of experts designs
              intuitive, engaging eCommerce platforms that provide seamless
              shopping experiences, making it easy for customers to navigate and
              purchase. We focus on creating tailored eCommerce solutions that
              align with your business objectives, driving conversions and
              customer loyalty. By combining advanced technologies and industry
              best practices, we build scalable, high-performance eCommerce
              stores that offer both functionality and a unique shopping
              experience for your customers.
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
              Custom eCommerce
              <br /> Development Services for Your
              <br /> Breakthrough Business Idea
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

      {/*  Section 6 */}
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
              Advanced eCommerce Integrations for Scalable and Future-Ready
              Marketplaces
              <span className="rectanglefullstop"></span>
            </h2>
          </div>
        </div>
      </div>

      {/*  Section 7 */}
      <div className="container  py-1">
        <div className="row  mx-0 g-4 d-flex">
          {/* Box 1 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Seamless Integrations for Modern eCommerce Platforms
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We prioritize creating eCommerce integrations that not only
                simplify processes but also ensure your marketplace operates
                smoothly. Our goal is to provide solutions that enhance your
                platform’s efficiency, scale effortlessly, and cater to the
                evolving needs of your business.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Building Trust Through Transparency
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                At Piquota, we believe in open and honest communication,
                allowing us to build lasting relationships. Transparency in
                every aspect of our work ensures our clients stay informed and
                confident, fostering trust through every project milestone.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Striving for Excellence with Every Project
              </h3>

              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We focus on delivering high-quality results by combining
                innovation and precision. Our team executes every project with
                an eye for detail and a commitment to excellence, ensuring your
                eCommerce platform is both effective and impactful.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Embracing Change with Flexibility
              </h3>

              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                Adaptability is crucial to success in a fast-moving digital
                world. We ensure that our solutions are flexible and responsive,
                allowing your business to pivot as needed. Our team’s agile
                approach guarantees that we’re always ready to meet your
                business's unique challenges.s
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  Section 8 */}
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
              Achieve Excellence with
              <br /> Premium Integrations
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
              Enhance Your Business Value with Our Custom
              <br /> eCommerce Solutions
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
              {/* Custom eCommerce Development */}
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
                  className="fas fa-shopping-cart" // Icon for Custom eCommerce Development
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 1 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Custom eCommerce Development
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

              {/* eCommerce Web Design */}
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
                  className="fas fa-palette" // Icon for eCommerce Web Design
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 2 ? "white" : "#B0B0B0",
                  }}
                ></i>
                eCommerce Web Design
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

              {/* Mobile eCommerce Development */}
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
                  className="fas fa-mobile-alt" // Icon for Mobile eCommerce Development
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 3 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Mobile eCommerce Development
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

              {/* eCommerce Platform Integration */}
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
                  className="fas fa-exchange-alt" // Icon for eCommerce Platform Integration
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 4 ? "white" : "#B0B0B0",
                  }}
                ></i>
                eCommerce Platform Integration
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
                  className="fas fa-tools" // Icon for Support & Maintenance
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
              {" "}
              Get in Touch with <br />
              Our Experts to Shape Your eCommerce Strategy
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
                color: "black",
              }}
            >
              Connect eCommerce-driven
              <br /> strategies with mobile-first agility
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
              With the ever-growing digital landscape, multiple factors
              contribute to the success of an eCommerce business. To stay
              competitive, businesses must adopt a mobile-first approach and
              leverage agile development methodologies to test, refine, and
              scale their eCommerce solutions. Our agile process for mobile
              eCommerce app development ensures that each feature is
              meticulously crafted and optimized. The iterative approach allows
              for continuous improvements, enabling businesses to deliver
              superior mobile shopping experiences and drive long-term customer
              engagement and growth.
            </p>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ paddingRight: "100px" }}
          >
            <img
              src="assets/Images/API Development (3).png"
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
                color: "#333",
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
                  marginBottom: "15px",
                }}
              >
                Featured eCommerce Services
              </h4>

              <p
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                Our in-house team has developed several critical features by
                leveraging the latest technologies, ensuring that your eCommerce
                platform stands out. Here are some key offerings:
              </p>

              {/* Points */}
              <div className="custom-list">
                <div className="line-items">API Development</div>
                <div className="line-items">Real-Time Applications</div>
                <div className="line-items">Fast Frontend Performance</div>
                <div className="line-items">Microservices Architecture</div>
                <div className="line-items">E-Commerce Solutions</div>
                <div className="line-items">Database Integration</div>
                <div className="line-items">
                  Application Maintenance & Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column  */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <img
              src="assets/Images/pexels-artempodrez-5716032.jpg"
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
          {/* Left Column  */}
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
              }}
            >
              Why Choose Us for Custom <br />
              eCommerce Development?
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
              As a full-service eCommerce mobile app development company, we
              focus on delivering tailored solutions that empower businesses to
              excel in the digital marketplace. From ideation and design to
              development and continuous growth, our team is committed to
              enhancing your mobile commerce experience with user-centric,
              high-performance apps. With a focus on innovation, scalability,
              and seamless integration, we ensure your app provides the ultimate
              shopping experience.
            </p>
          </div>

          {/* Right Column  */}
          <div
            className="col-12 col-md-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#742e92",
                padding: "30px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginBottom: "15px",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>5+ Years of
                eCommerce Experience
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginBottom: "15px",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>20+ Experts in
                eCommerce Solutions
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginBottom: "15px",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>Agile Development
                for Faster Delivery
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginBottom: "15px",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>Clear, Transparent
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
                Will you sign a non-disclosure agreement (NDA) with us?
              </Accordion.Header>
              <Accordion.Body>
                Yes, at Piquota, we understand the importance of confidentiality
                in business. We offer non-disclosure agreements (NDAs) to ensure
                that any sensitive information shared during the e-commerce
                development process remains protected. This helps in maintaining
                privacy, securing business data, and fostering trust between our
                team and clients.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What methodology do you use for e-commerce website development?
              </Accordion.Header>
              <Accordion.Body>
                We follow an agile development approach for e-commerce projects.
                This allows us to be flexible and iterative, delivering key
                features in manageable increments while continuously improving
                the website based on client feedback. We also use best practices
                in e-commerce development to ensure seamless user experiences,
                scalability, and robust security.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Do you offer support for e-commerce websites after launch?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we offer ongoing support and maintenance services to ensure
                your e-commerce website continues to perform optimally. This
                includes regular updates, security patches, troubleshooting, and
                enhancements. We provide various support packages, allowing you
                to choose the level of service that suits your business needs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How do I track the progress of my e-commerce development
                project?
              </Accordion.Header>
              <Accordion.Body>
                We value transparency and communication with our clients. Using
                our in-house project management system, Bizixx, you will be able
                to track the progress of your e-commerce development project in
                real-time. You will have access to detailed project timelines,
                milestones, and regular updates from our team. Additionally, we
                will provide you with login credentials to monitor progress and
                participate in project discussions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Can you integrate third-party tools and payment gateways into my
                e-commerce website?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely! We specialize in integrating various third-party
                tools, including payment gateways, CRM systems, and marketing
                tools, into your e-commerce website. Whether it's PayPal,
                Stripe, or custom integrations, our team ensures that these
                tools work seamlessly with your site, providing you with an
                optimized, secure, and user-friendly e-commerce platform.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
