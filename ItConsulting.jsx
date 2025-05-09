import React, { useState } from "react";
import { Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const ItConsulting = () => {
  return (
    <>
      <Helmet>
        <title>IT Consulting Services | Piquota</title>
        <meta
          name="description"
          content="Optimize your IT strategy with Piquota’s expert IT consulting, delivering tailored solutions for digital transformation and efficiency."
        />
        <meta
          name="keywords"
          content="IT consulting services, Digital transformation consulting , IT strategy development , Technology advisory , Business IT solutions , IT optimization , Enterprise IT consulting"
        />

        <meta property="og:title" content="IT Consulting Services | Piquota" />
        <meta
          property="og:description"
          content="Leverage Piquota's IT consulting services to enhance business agility, streamline operations, and drive digital transformation with tailored IT strategies and solutions."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/it-consulting"
        />

        <meta name="twitter:title" content="IT Consulting Services | Piquota" />
        <meta
          name="twitter:description"
          content="Transform your business with Piquota's IT consulting services. Our experts provide tailored IT strategies, cloud optimization, data integration, and ongoing support to drive growth."
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
          url('assets/Images/pexels-steve-29738257.jpg')`,
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
              style={{
                fontSize: "50px",
                fontWeight: 600,
                letterSpacing: "2px",
                textAlign: "left",
                color: "white",
                marginLeft: "40px",
              }}
            >
              IT Consulting
              <br /> Services
              <span className="rectangle1"></span>
            </h1>

            <p
              style={{
                fontSize: " 22px",
                fontWeight: 300,
                marginTop: "10px",
                textAlign: "left",
                color: "white",
                marginLeft: "40px",
              }}
            >
              Transforming Challenges into Strategic Solutions
            </p>

            <a
              href="/contact"
              className="btn btn-purple btn-lg mt-4"
              style={{
                textAlign: "left",
                borderRadius: "0px",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                padding: "10px 20px",
                transition: "all 0.3s ease",
                marginLeft: "40px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
              }}
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#ededed" }}
      >
        <div className="text-center mb-5">
          <h2
            style={{
              fontWeight: "600",
              fontSize: "2rem",
              letterSpacing: "1px",
              marginTop: "40px",
              color: "#292a2b",
            }}
          >
            Why Choose Our IT Consulting Services?
            <span className="rectangle1"></span>
          </h2>
        </div>

        {/* Left and Right column*/}
        <div
          className="container"
          style={{ maxWidth: "90%", margin: "0 auto" }}
        >
          <div className="row mx-0 no-gutters">
            {/* Left column */}
            <div
              className="col-12 col-md-6 d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "#0a121f",
                color: "#fff",
                minHeight: "50vh",
                padding: "50px",
              }}
            >
              <div>
                <h2
                  className="mb-3"
                  style={{ fontWeight: 450, fontSize: "30px" }}
                >
                  Transform Your Business with Expert Insights
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "19px",
                    lineHeight: "1.6",
                    color: "#fff",
                    fontWeight: "100",
                  }}
                >
                  Our IT consulting services empower your organization to adopt
                  cutting-edge technologies and strategies that drive efficiency
                  and innovation. By aligning your IT infrastructure with
                  business goals, we ensure sustainable growth and competitive
                  advantage in an ever-evolving digital landscape.
                </p>
                <div className="custom-list">
                  <div className="line-item">
                    Custom IT Solutions for Your Business
                  </div>
                  <div className="line-item">
                    Optimized IT Operations to Cut Costs
                  </div>
                  <div className="line-item">
                    Scalable Tech that Grows with Your Business
                  </div>
                  <div className="line-item">
                    Expert Guidance on Technology Trends
                  </div>
                  <div className="line-item">
                    Strong Cybersecurity and Risk Management
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-12 col-md-5 p-0">
              <img
                src="assets/Images/pexels-cottonbro-7438096 (1).jpg"
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

      {/* Section 2 */}
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: 'url("assets/Images/wave.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        {/* Left and Right column*/}
        <div
          className="container"
          style={{ maxWidth: "90%", margin: "0 auto" }}
        >
          <div className="row mx-0 no-gutters">
            {/* Left column */}
            <div
              className="col-12 col-md-6 d-flex flex-column justify-content-center"
              style={{
                height: "50%",
                padding: "50px",
              }}
            >
              <div>
                <h2
                  className="mb-3"
                  style={{ fontWeight: 600, fontSize: "33px" }}
                >
                  How Can We Help Your
                  <br /> Business?
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  We simplify your IT challenges by providing expert guidance
                  and tailored solutions that align with your business goals.
                  Our services help you improve efficiency, optimize technology
                  investments, and stay ahead in a fast-evolving tech landscape:
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "600",
                  }}
                >
                  Strategic IT Planning and Advisory, Customized Solutions for
                  Business Growth, etc.
                </p>
                <div className="row justify-content-center mt-1">
                  <div className="col-12 text-left">
                    <a
                      href="/contact"
                      className="btn btn-purple"
                      style={{
                        backgroundColor: "#9b4dca",
                        color: "white",
                        padding: "13px 58px",
                        textDecoration: "none",
                        borderRadius: "0px",
                      }}
                    >
                      Ask Us How
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            {/* FAQ */}
            <div className="faq-section col-12 col-md-6 d-flex flex-column justify-content-center">
              <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      01 What is IT Consulting and how can it benefit your
                      business?
                    </Accordion.Header>
                    <Accordion.Body>
                      IT consulting involves expert advice and strategic
                      guidance to help organizations leverage technology for
                      business growth and operational efficiency. IT consultants
                      assess the needs of your business, recommend solutions,
                      and help implement strategies that align with your goals.
                      The main benefits include optimizing operations, reducing
                      costs, and driving innovation through technology.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      02 How do IT consultants evaluate your business needs?
                    </Accordion.Header>
                    <Accordion.Body>
                      IT consultants start by performing a thorough assessment
                      of your current technological infrastructure, processes,
                      and challenges. They work closely with key stakeholders to
                      understand business goals and identify areas where
                      technology can improve performance. This helps in
                      recommending tailored IT solutions that address specific
                      needs, whether it’s increasing security, improving
                      collaboration, or automating workflows.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      03 What types of IT services are typically offered by
                      consultants?
                    </Accordion.Header>
                    <Accordion.Body>
                      IT consultants provide a wide range of services, including
                      but not limited to:
                      <ul>
                        <li>IT infrastructure design and optimization</li>
                        <li>Cloud services and migration</li>
                        <li>Enterprise resource planning (ERP) systems</li>
                        <li>Cybersecurity strategies and risk management</li>
                        <li>Data management and analytics</li>
                        <li>Software development and integration</li>
                      </ul>
                      The scope of services depends on the unique requirements
                      of your business and the IT challenges you face.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      04 How do IT consultants help in digital transformation?
                    </Accordion.Header>
                    <Accordion.Body>
                      IT consultants are instrumental in guiding businesses
                      through digital transformation. They help organizations
                      adopt new technologies, modernize legacy systems, and
                      improve customer experiences through automation, data
                      insights, and cloud computing. Consultants ensure that the
                      transformation process is smooth, cost-effective, and
                      aligned with strategic business objectives, enabling
                      companies to stay competitive in the digital age.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      05 What is the role of IT consulting in business
                      scalability?
                    </Accordion.Header>
                    <Accordion.Body>
                      As businesses grow, their IT systems need to scale
                      accordingly. IT consultants assist by recommending and
                      implementing scalable solutions that accommodate growth,
                      such as cloud platforms, data storage solutions, and
                      enterprise software. They help design IT strategies that
                      ensure businesses can handle increased demand, reduce
                      downtime, and manage resources efficiently as they expand.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="container-fluid  py-5">
        <div className="text-center mb-4">
          <h2
            style={{
              fontWeight: "600",
              fontSize: "2rem",
              letterSpacing: "1px",
            }}
          >
            IT Consulting Process
            <span className="rectangle1"></span>
          </h2>
        </div>

        <div
          className="container"
          style={{ maxWidth: "90%", margin: "0 auto" }}
        >
          <div className="row mx-0 align-items-center">
            <div className="col-12 text-center mb-4">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.6",
                  color: "#555",
                  fontWeight: "400",
                  marginBottom: "30px",
                }}
              >
                To deliver a sustainable competitive advantage, we use a
                structured IT consulting
                <br /> process. This approach allows us to work closely with
                clients, understand their business
                <br /> needs, and implement tailored IT solutions that drive
                growth, optimize operations,
                <br /> and mitigate risks. Let me know if you'd like any
                adjustments!
              </p>
            </div>

            <div className="col-12 text-center">
              <img
                src="assets/Images/IT Consulting.png"
                alt="Business Model Process"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#0a121f" }}
      >
        <div className="text-center mb-5">
          <h2
            style={{
              fontWeight: "600",
              fontSize: "2rem",
              marginTop: "40px",
              color: "white",
            }}
          >
            Technology-Driven Growth Strategy
            <span className="rectangle1"></span>
          </h2>
        </div>

        {/* Left and Right columns */}
        <div
          className="container"
          style={{ maxWidth: "90%", margin: "0 auto" }}
        >
          <div className="row mx-0 no-gutters">
            {/* Left column */}
            <div
              className="col-12 col-md-6 d-flex flex-column justify-content-center"
              style={{
                padding: "50px",
                backgroundColor: "white",
              }}
            >
              <div>
                <h2
                  className="mb-3"
                  style={{ fontWeight: 450, fontSize: "30px" }}
                >
                  IT Consulting Benefits
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "19px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  Effective IT consulting can transform your business by
                  optimizing processes and leveraging technology to drive
                  growth. We focus on delivering tailored IT solutions that
                  align with your business objectives, ensuring scalable growth
                  and streamlined operations. Our consulting services are
                  designed to evaluate your current systems, identify gaps, and
                  recommend the best technologies to improve efficiency,
                  performance, and competitive advantage.
                </p>
                {/* <a
                  href="https://www.example.com"
                  style={{ color: "purple", textDecoration: "underline" }}
                >
                  Read more
                </a> */}
              </div>
            </div>

            {/* Right column */}
            <div className="col-12 col-md-5 p-0 d-flex flex-column">
              <img
                src="assets/Images/Statergic image.png"
                alt="About Us"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "30px",
                  backgroundColor: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="container my-5" style={{ marginRight: "80px" }}>
        <div className="row mx-0 align-items-center">
          {/* First Column */}
          <div className="col-12 col-md-5 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "0px",
              }}
            >
              Business Values
              <br /> Added by Choosing
              <br /> IT Consulting Services
              <span className="rectangle1"></span>
            </h2>
          </div>

          {/* Second Column */}
          <div className="col-12 col-sm-6 col-md-2 text-md-left">
            <div>
              <img
                src="assets/Images/Custom Solutions.jpg"
                alt="Lightweight Sophistication"
                className="img-fluid"
                style={{ maxWidth: "60px", height: "auto" }}
              />
              <h4
                style={{
                  marginTop: "10px",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Custom Solutions
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Get IT solutions tailored to your business needs for a
                competitive edge.
              </p>
            </div>
          </div>

          {/* Third Column */}
          <div
            className="col-12 col-sm-6 col-md-2  text-md-left"
            style={{ marginTop: "10px" }}
          >
            <div>
              <img
                src="assets/Images/Improve efficiency.jpg"
                alt="Improves Scalability"
                className="img-fluid"
                style={{ maxWidth: "60px", height: "auto" }}
              />
              <h4
                style={{
                  marginTop: "10px",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Improved Efficiency
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Optimize processes to reduce downtime and boost productivity.
              </p>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="col-12 col-md-2  text-md-left" style={{}}>
            <div>
              <img
                src="assets/Images/Scalable growth.jpg"
                alt="Agility Driven"
                className="img-fluid"
                style={{ maxWidth: "60px", height: "auto" }}
              />
              <h4
                style={{
                  marginTop: "10px",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Scalable Growth
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Easily adapt to changing demands with flexible IT systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="container-fluid px-0 my-5">
        <div className="row mx-0 section3">
          {/* Left Column */}
          <div className="col-12 col-md-7 d-flex align-items-center justify-content-center mt-3">
            <h3 className="heading-text">
              {" "}
              Connect with our experts to craft your IT strategy.
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

      {/* Section 7 */}
      <div className="container-fluid my-5">
        <div className="row mx-0 align-items-center justify-content-center">
          {/* Left Column  */}
          <div className="col-12 col-md-7 d-flex justify-content-center">
            <img
              src="assets/Images/it-consulting.png"
              alt="Node.js"
              className="img-fluid"
              style={{
                maxWidth: "80%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right Column  */}
          <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start">
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
                IT Consulting to Deliver
                <br /> Effective Solutions
              </h3>
              <div className="custom-list">
                <div className="line-items">Custom IT Strategy Development</div>
                <div className="line-items">
                  Cloud & Infrastructure Optimization
                </div>
                <div className="line-items">IT System Architecture Design</div>
                <div className="line-items">Scalable Technology Solutions</div>
                <div className="line-items">Business Process Automation</div>
                <div className="line-items">Data Management & Integration</div>
                <div className="line-items">
                  Ongoing IT Support & Maintenance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8 */}
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
            Gain a Competitive Edge with Expert IT Solutions
            <span className="rectangle1"></span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              margin: "20px auto 80px",
              fontWeight: "400",
            }}
          >
            Leverage advanced IT strategies to enhance your infrastructure,
            streamline operations,
            <br /> and improve business agility. Our solutions empower your
            organization to scale efficiently,
            <br /> optimize processes, and adapt to evolving market demands.
          </p>
        </div>

        {/* Rows with Columns */}
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
              Custom IT Strategy
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
              Cloud Infrastructure Optimization
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
              Scalable System Architecture
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
              Business Process Automation
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
              Data Integration Solutions
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
              Cybersecurity Measures
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
              Ongoing IT Support
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

      {/* Section 9 */}

      {/* Section 10*/}
      <div className="container my-5 ">
        <h2
          className="section-heading text-center"
          style={{ fontWeight: "600" }}
        >
          Industry Expertise
          <span className="rectangle1"></span>
        </h2>
        <p
          className="section-heading text-center m-4 w-75 mx-auto"
          style={{ fontSize: "22px", fontWeight: "400" }}
        >
          With years of experience delivering enterprise-grade IT solutions, we
          cater to clients across various industries globally. Our team’s deep
          knowledge and efficient processes enable us to design and develop
          customized IT solutions that cater to the needs of startups, SMBs, and
          large enterprises alike. Explore some of the industries where we
          excel:
        </p>
        {/* First Row */}
        <div className="row mx-0 mt-5">
          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-center">
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
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-center">
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
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-center">
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
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-center">
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
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row mx-0 mt-3">
          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-center">
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
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-center">
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
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-center">
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
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <div className="service-box text-center">
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
            </div>
          </div>
        </div>
      </div>

      {/* Section 11 */}
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
              }}
            >
              Why Choose Us For IT <br /> Consulting Services
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
              As a comprehensive IT consulting provider, we focus on every phase
              of your project, from analysis and design to development and
              growth. Our team of skilled professionals stays ahead of industry
              trends, providing you with innovative solutions to implement new
              business models, overcome scalability challenges, and ensure
              long-term success through a methodical, process-driven approach.
            </p>

            {/* 4 Images in a Row */}
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
                padding: "20px",
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
                    fontSize: "18px",
                    fontWeight: "400",
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
                    fontSize: "18px",
                    fontWeight: "400",
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
                    fontSize: "18px",
                    fontWeight: "400",
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
                    fontSize: "18px",
                    fontWeight: "400",
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

export default ItConsulting;
