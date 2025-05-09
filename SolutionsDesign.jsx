import React, { useState } from "react";
import { Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const SolutionsDesign = () => {
  return (
    <>
      <Helmet>
        <title>Technology Solutions Design | Piquota</title>
        <meta
          name="description"
          content="Create innovative tech solutions with Piquota’s solutions design services, tailored to solve complex business challenges effectively."
        />
        <meta
          name="keywords"
          content="solutions design, Technology solutions, Custom tech design , Business problem solving , Innovation consulting ,System architecture design  , Tailored IT solutions "
        />

        <meta
          property="og:title"
          content="Technology Solutions Design | Piquota"
        />
        <meta
          property="og:description"
          content="Transform your business with Piquota's solutions design services. We provide tailored, scalable designs that improve operational efficiency, enhance flexibility, and drive growth."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/solution-design"
        />

        <meta
          name="twitter:title"
          content="Solutions Design Services | Piquota"
        />
        <meta
          name="twitter:description"
          content="Leverage Piquota's innovative solutions design services to enhance your business workflows, scalability, and flexibility, ensuring long-term success with tailored strategies."
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('assets/Images/pexels-medhat-ayad-122846-378427.jpg')`,
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
                textAlign: "left",
                color: "white",
                marginLeft: "40px",
              }}
            >
              Evolving Ideas into <br />
              Actionable Solutions
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
              We take your ideas and turn them into strategic, tangible
              solutions,
              <br />
              ensuring they are both practical and future-ready while driving
              meaningful
              <br /> results for your business.
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
              marginTop: "40px",
            }}
          >
            Why Solutions Designs Services?
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
                  Benefits of Solutions Design Services
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
                  Solutions design is reshaping how companies operate by
                  integrating powerful design strategies that align with
                  business goals. By leveraging advanced technologies,
                  businesses can automate processes, reduce manual errors, and
                  boost overall productivity, all while preparing for future
                  scalability.
                </p>
                <div className="custom-list">
                  <div className="line-item">
                    Optimizing Operational Efficiency
                  </div>
                  <div className="line-item">
                    Maximizing Resource Utilization
                  </div>
                  <div className="line-item">
                    Driving Innovation through Design
                  </div>
                  <div className="line-item">Enhancing Workflow Automation</div>
                  <div className="line-item">Building a Scalable Future</div>
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
                  How Can We Enhance Your <br />
                  Solution Designs?
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  We simplify the process of defining and creating impactful
                  solution designs for your business. Our team will guide you in
                  developing a flexible and sustainable model that aligns with
                  your objectives. Through our comprehensive approach, we offer
                  the following key elements to help your business scale and
                  achieve greater profitability:
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  Design, Innovate, and Optimize, Capture Business Values, etc.
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
                      01 What is Solutions Design?
                    </Accordion.Header>
                    <Accordion.Body>
                      Solutions design refers to the process of defining the
                      architecture, components, modules, and data flow of a
                      system or service that meets business needs. It involves
                      understanding the requirements, analyzing problems, and
                      creating the optimal technical solution. The goal is to
                      provide a structured approach that ensures the system is
                      scalable, efficient, and aligned with business goals.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      02 How do you start the Solutions Design process?
                    </Accordion.Header>
                    <Accordion.Body>
                      The solutions design process begins with understanding the
                      business requirements and goals. Key activities include
                      conducting stakeholder interviews, analyzing user needs,
                      identifying technical constraints, and gathering data.
                      Once these inputs are gathered, the design team will
                      create a high-level architecture, which is further refined
                      through iterative prototyping and validation against
                      business requirements.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      03 What are the key components of a Solutions Design?
                    </Accordion.Header>
                    <Accordion.Body>
                      A comprehensive solutions design includes several key
                      components:
                      <ul>
                        <li>
                          <strong>System Architecture:</strong> A high-level
                          blueprint that defines how components interact with
                          each other.
                        </li>
                        <li>
                          <strong>Functional Design:</strong> Specifies what
                          each part of the system will do, addressing specific
                          business needs.
                        </li>
                        <li>
                          <strong>Non-Functional Requirements:</strong> Includes
                          performance, scalability, security, and other aspects
                          that are essential for system operation.
                        </li>
                        <li>
                          <strong>Data Flow and Integration:</strong> Details
                          how data will flow through the system, including any
                          external integrations or APIs.
                        </li>
                        <li>
                          <strong>User Experience (UX) Design:</strong> Focuses
                          on how users interact with the system, ensuring ease
                          of use and engagement.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      04 How do you ensure the solutions design meets business
                      goals?
                    </Accordion.Header>
                    <Accordion.Body>
                      Ensuring that the solutions design meets business goals
                      requires close collaboration with stakeholders throughout
                      the process. Regular feedback loops, clear documentation,
                      and alignment of technical choices with business
                      objectives are key. Additionally, ensuring scalability,
                      security, and cost efficiency helps align the solution
                      with long-term goals. Prototyping and testing can also
                      help validate that the solution meets expectations before
                      full implementation.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      05 What tools and technologies are used in Solutions
                      Design?
                    </Accordion.Header>
                    <Accordion.Body>
                      Solutions design often involves a variety of tools and
                      technologies to support modeling, prototyping, and
                      documentation:
                      <ul>
                        <li>
                          <strong>Modeling Tools:</strong> Tools like UML,
                          Flowcharts, or BPMN are used to represent the
                          architecture and flow of the solution.
                        </li>
                        <li>
                          <strong>Design and Prototyping Tools:</strong> Tools
                          such as Figma, Adobe XD, or Balsamiq are used to
                          create wireframes, mockups, and prototypes.
                        </li>
                        <li>
                          <strong>Collaboration Tools:</strong> Platforms like
                          Jira, Confluence, and Trello help teams collaborate
                          and track progress on design iterations.
                        </li>
                        <li>
                          <strong>Cloud Platforms:</strong> AWS, Azure, or
                          Google Cloud are often used for creating scalable
                          infrastructure designs.
                        </li>
                      </ul>
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
              color: "#333",
            }}
          >
            Solution Design Strategy
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
                Our solution design strategy ensures a clear and systematic
                approach to achieving
                <br /> business excellence. By partnering with clients, we
                develop customized plans, provide ongoing
                <br /> support, and implement effective designs that drive
                innovation and growth.
              </p>
            </div>

            <div className="col-12 text-center">
              <img
                src="assets/Images/Solutions Design.png"
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
              letterSpacing: "1px",
              marginTop: "40px",
              color: "white",
            }}
          >
            Solution Design Framework
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
                  Advantages of Solution Design Services
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "19px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  A detailed analysis of critical components such as value
                  propositions, key partnerships, customer segments, and
                  relationships. These interconnected elements are designed to
                  enhance revenue growth and ensure scalability aligned with
                  your business goals. Our tailored frameworks align with your
                  specific needs and ideas, fostering a self-sustaining,
                  efficient cycle. Beyond just completing a traditional model,
                  we focus on interconnecting all elements to drive growth and
                  investor confidence.
                </p>
                {/* <a
                  href="https://www.example.com"
                  style={{ color: "purple", textDecoration: "underline" }}
                >
                  Evaluate your Competitor Analysis
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
          {/* First Column  */}
          <div className="col-12 col-md-5 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "0px",
              }}
            >
              Key Benefits of <br /> Choosing Solution <br />
              Design Services
              <span className="rectangle1"></span>
            </h2>
          </div>

          {/* Second Column */}
          <div className="col-12 col-sm-6 col-md-2 text-md-left">
            <div>
              <img
                src="assets/Images/Streamlined Efficiency.jpg"
                alt=" Streamlined Efficiency"
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
                Streamlined Efficiency
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Simplify complex processes with lightweight, efficient solutions
                tailored for businesses of all sizes.
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
                src="assets/Images/4838773.png"
                alt="Enhanced Scalability"
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
                Enhanced Scalability
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Seamlessly scale operations to accommodate growth and evolving
                business demands.
              </p>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="col-12 col-md-2  text-md-left" style={{}}>
            <div>
              <img
                src="assets/Images/2646177.png"
                alt="Flexibility in Action"
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
                Flexibility in Action
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Adapt quickly to changing needs with agile solutions designed to
                power resource-intensive applications.
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
              Connect with our specialists to craft your tailored solution
              design strategy.
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
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="assets/Images/Design-process-diagram.webp"
              alt="Node.js"
              className="img-fluid"
              style={{
                maxWidth: "80%",
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
                  textAlign: "left",
                }}
              >
                Innovative Solutions Design to
                <br /> Empower Your Business
              </h3>
              <div className="custom-list">
                <div className="line-items">
                  Tailored Solution Design for Seamless Business Growth
                </div>
                <div className="line-items">
                  Optimizing Business Workflows with Strategic Design
                </div>
                <div className="line-items">
                  Future-Ready Solution Design for Dynamic Markets
                </div>
                <div className="line-items">
                  User-Centric Designs for Exceptional Experiences
                </div>
                <div className="line-items">
                  Cloud-Optimized Solutions for Maximum Performance
                </div>
                <div className="line-items">
                  Agile Solution Designs for Faster Time-to-Market
                </div>
                <div className="line-items">
                  End-to-End Solution Design for Complete Business Integration
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
            Transform Your Business with Innovative
            <br /> Design Solutions
            <span className="rectangle1"></span>
          </h2>
          <p
            style={{
              fontSize: "1.4rem",
              lineHeight: "1.6",
              margin: "20px auto 80px",
              fontWeight: "400",
            }}
          >
            Unlock the potential of innovative solutions, crafted for
            scalability and efficiency.
            <br /> Leverage our expertise to create agile, high-performance
            systems that integrate seamlessly
            <br /> with your existing infrastructure, ensuring faster execution
            and future growth.
          </p>
        </div>

        {/* Rows with Columns */}
        <div className="row text-center mx-0">
          {/* Row 1 */}
          <div className="col-12 col-md-2 mb-4">
            <img
              src="assets/Images/10699360.png"
              alt="Non-blocking Architecture"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Optimized Workflow Design
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
              Scalable Cloud-Based Architecture
            </h5>
          </div>
          <div className="col-12 col-md-2 mb-4">
            <img
              src="assets/Images/17512752.png"
              alt="Event-driven Design"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Agile Design Methodologies
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
              End-to-End Integration Capabilities
            </h5>
          </div>
        </div>

        <div className="row text-center mx-0">
          {/* Row 2 */}
          <div className="col-12 col-md-2 mb-4">
            <img
              src="assets/Images/18045089.png"
              alt="Microservices Architecture"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Customizable Application Solutions
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
              Predictive Analytics for Smarter Solutions
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
          With extensive experience in solutions design, we help startups, SMBs,
          and enterprises streamline operations with tailored, scalable
          solutions. Our expertise spans various industries, delivering
          impactful results worldwide.
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
              }}
            >
              Why Choose Us for Solution
              <br /> Design Management Services
              <span className="rectangle1"></span>
            </h3>
            <p
              style={{
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              As a full-service solutions design agency, we prioritize every
              phase of the process, from analysis to design and implementation.
              Our experienced team adapts to evolving business models and
              scalability challenges, ensuring that we deliver process-driven,
              efficient, and scalable solutions tailored to your needs.
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

export default SolutionsDesign;
