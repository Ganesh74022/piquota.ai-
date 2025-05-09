import React, { useState } from "react";
import { Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const CloudServicesManagement = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Services Management | Piquota</title>
        <meta
          name="description"
          content="Streamline operations with Piquota’s cloud services management, offering secure, scalable solutions for AWS, Azure, and Google Cloud.."
        />
        <meta
          name="keywords"
          content="cloud services management, cloud  migration services, AWS consulting , Azure management , Google Cloud solutions , Cloud infrastructure , Hybrid cloud management "
        />

        <meta
          property="og:title"
          content="Cloud Services Management | Piquota"
        />
        <meta
          property="og:description"
          content="Transform your cloud strategy with Piquota's cloud services management. We optimize your cloud infrastructure for scalability, security, and cost efficiency to drive growth and innovation."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/cloud-services-management"
        />

        <meta
          name="twitter:title"
          content="Cloud Services Management | Piquota"
        />
        <meta
          name="twitter:description"
          content="Leverage Piquota's cloud services management expertise to optimize your infrastructure, improve scalability, and enhance security. Our tailored cloud strategies drive business growth and future-proofing."
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('assets/Images/pexels-cookiecutter-17489163.jpg')`,
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
              Cloud Services <br /> Management Solutions
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
              Optimized Solutions for Scalable Growth
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
            Why Cloud Services Management?
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
                  Benefits of Cloud Consulting
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
                  Cloud consulting helps businesses leverage cloud technologies
                  to improve efficiency, scalability, and innovation. By
                  optimizing operations and resource management, companies can
                  streamline processes and prepare for future growth with
                  flexible, data-driven solutions.
                </p>
                <div className="custom-list">
                  <div className="line-item">
                    Enhanced Security and Compliance
                  </div>
                  <div className="line-item">Cost Optimization</div>
                  <div className="line-item">Improved Scalability</div>
                  <div className="line-item">Streamlined Operations</div>
                  <div className="line-item">
                    Future-Proofing with Predictive Analytics
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
                  <br /> Cloud Strategy?
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  We simplify the process of developing and managing a robust
                  cloud strategy for your business. Our expertise ensures that
                  your cloud infrastructure is optimized for scalability,
                  security, and cost-efficiency. We provide the following key
                  services to help you unlock the full potential of cloud
                  technology and drive business growth:
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  Cloud Strategy and Design, Seamless Cloud Integration, Cost
                  and Resource Optimization, Ongoing Support and Maintenance
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
                      01 What is Cloud Services Management?
                    </Accordion.Header>
                    <Accordion.Body>
                      Cloud services management involves overseeing and
                      optimizing cloud-based infrastructure and services that
                      businesses use. This includes managing the deployment,
                      operation, and maintenance of cloud resources, ensuring
                      security, compliance, and cost efficiency. The goal is to
                      ensure that the cloud environment aligns with business
                      objectives, enhances productivity, and minimizes downtime.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      02 How do you choose the right cloud services provider?
                    </Accordion.Header>
                    <Accordion.Body>
                      Choosing the right cloud service provider involves
                      evaluating several factors such as reliability,
                      scalability, security features, compliance standards, and
                      cost. You should also consider the provider's reputation,
                      service level agreements (SLAs), customer support, and the
                      range of services they offer (e.g., compute, storage,
                      networking, and analytics). A good provider should align
                      with your business goals and technological needs.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      03 What are the different types of cloud deployment
                      models?
                    </Accordion.Header>
                    <Accordion.Body>
                      The three primary cloud deployment models are:
                      <ul>
                        <li>
                          <strong>Public Cloud:</strong> Services are delivered
                          over the internet and shared with other customers.
                          Providers like AWS, Azure, and Google Cloud offer
                          public cloud services.
                        </li>
                        <li>
                          <strong>Private Cloud:</strong> Services are
                          maintained on a private network, offering higher
                          security and control over resources. It’s ideal for
                          organizations with strict compliance needs.
                        </li>
                        <li>
                          <strong>Hybrid Cloud:</strong> A combination of public
                          and private clouds, allowing data and applications to
                          be shared between them. This model offers flexibility
                          and optimization for both workloads and costs.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      04 How do you ensure cloud security?
                    </Accordion.Header>
                    <Accordion.Body>
                      Cloud security involves implementing robust security
                      measures to protect data and applications in the cloud.
                      This includes encryption, identity and access management
                      (IAM), multi-factor authentication, regular security
                      audits, and ensuring compliance with relevant regulations
                      (e.g., GDPR, HIPAA). Cloud services management also
                      requires continuous monitoring to detect and mitigate
                      potential threats or vulnerabilities.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      05 How can cloud services help with business scalability?
                    </Accordion.Header>
                    <Accordion.Body>
                      Cloud services provide businesses with the ability to
                      scale resources up or down based on demand. This
                      flexibility ensures that organizations only pay for what
                      they use, optimizing costs. Cloud platforms can
                      automatically adjust computing power, storage, and other
                      resources to handle spikes in traffic or data, making it
                      easier for businesses to grow without the need for
                      significant upfront investment in infrastructure.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      06 What is cloud cost optimization and how does it work?
                    </Accordion.Header>
                    <Accordion.Body>
                      Cloud cost optimization involves managing and controlling
                      cloud expenditures while maximizing the value derived from
                      cloud services. This includes monitoring resource usage,
                      identifying underutilized resources, right-sizing
                      instances, using spot or reserved instances, and adopting
                      automated scaling. By regularly reviewing and optimizing
                      cloud services, businesses can reduce wastage and ensure
                      that they are getting the best value for their investment.
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
              letterSpacing: "1px",
            }}
          >
            Cloud Model Analysis Process
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
                  color: "#555",
                  fontWeight: "400",
                  marginBottom: "30px",
                }}
              >
                To provide a sustainable competitive advantage, we use a
                structured cloud model analysis process.
                <br /> This approach allows us to collaborate closely with
                clients, ensuring a comprehensive understanding of your
                <br /> cloud needs. We systematically assess, optimize, and
                manage your cloud infrastructure to ensure it meets your
                business goals and delivers maximum value. With our process, we
                help you navigate the complexities of cloud management, ensuring
                scalability, security, and efficiency at every stage.
              </p>
            </div>

            <div className="col-12 text-center">
              <img
                src="assets/Images/Cloud Services.png"
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
            Cloud Model Canvas
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
                  Benefits of Cloud Consulting Services
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "19px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  The Cloud Model Canvas helps analyze the critical components
                  of your cloud strategy, including value proposition, key
                  partners, customer segments, and customer relationships. Each
                  element of the cloud model should be interconnected, driving
                  revenue growth while aligning with business requirements. We
                  offer tailored cloud model design to suit your unique needs
                  and vision. A successful cloud strategy is a continuous cycle
                  of optimization and innovation. While filling out the
                  foundational aspects of your cloud model is just the start, we
                  ensure that all components work together efficiently to
                  maximize scalability and value. For investors, understanding
                  the scalability and integration of each cloud model component
                  is crucial for success.
                </p>
                {/* <a
                  href="https://www.example.com"
                  style={{ color: "purple", textDecoration: "underline" }}
                >
                  Evaluate Your Cloud Competitors
                </a> */}
              </div>
            </div>

            {/* Right column */}
            <div className="col-12 col-md-5 p-0 d-flex flex-column">
              <img
                src="assets/Images/Statergic.png"
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
              <br /> IT Consulting Services Business Value
              <span className="rectangle1"></span>
            </h2>
          </div>

          {/* Second Column */}
          <div className="col-12 col-sm-6 col-md-2 text-md-left">
            <div>
              <img
                src="assets/Images/115804.png"
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
                Scalable Solutions
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Cloud management helps your business grow easily with flexible
                infrastructure.
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
                src="assets/Images/3896622.png"
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
                Enhanced Flexibility
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                You can quickly add resources to support more users or
                transactions.
              </p>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="col-12 col-md-2  text-md-left" style={{}}>
            <div>
              <img
                src="/assets/Images/Agile operation.jpg"
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
                Agile Operations
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Cloud services help your business adapt to changes quickly.
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
              Partner with our experts to craft your personalized mobile
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

      {/* Section 7 */}
      <div className="container-fluid my-5">
        <div className="row mx-0 align-items-center justify-content-center">
          {/* Left Column  */}
          <div className="col-12 col-md-7 d-flex justify-content-center">
            <img
              src="assets/Images/1687774578329-1-01 (30).png"
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
                Cloud Solutions to Drive
                <br /> Business Growth
              </h3>
              <div className="custom-list">
                <div className="line-items">API Management in the Cloud</div>
                <div className="line-items">Real-Time Data Processing</div>
                <div className="line-items">
                  High-Performance Cloud Infrastructure
                </div>
                <div className="line-items">
                  Scalable Microservices Deployment
                </div>
                <div className="line-items">
                  Cloud-Based E-Commerce Solution
                </div>
                <div className="line-items">
                  Advanced Cloud Database Connectivity
                </div>
                <div className="line-items">
                  Continuous Cloud Application Support
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
              margin: "20px auto 30px",
            }}
          >
            Achieve Excellence with Advanced Cloud Management
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
            Leverage cutting-edge cloud technologies to optimize your
            operations, reduce costs, and <br />
            enhance agility. With tailored solutions, your business can scale
            seamlessly while maintaining flexibility
            <br /> in a rapidly changing digital landscape.
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
              Cloud Automation
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
              Elastic Scalability
            </h5>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <img
              src="assets/Images/17512752.png"
              alt="Event-driven Design"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>Cloud Security</h5>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <img
              src="assets/Images/17335091.png"
              alt="API Development"
              className="img-fluid mb-3"
              style={{ width: "120px" }}
            />
            <h5 style={{ fontWeight: "500", color: "#333" }}>
              Cloud Data Analytics
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
              Multi-Cloud Strategy
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
              Disaster Recovery Solutions
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
              Cloud Performance Optimization
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
          className="section-heading text-center m-4 mx-0"
          style={{ fontSize: "22px", fontWeight: "400" }}
        >
          With a proven track record of delivering enterprise-grade software
          solutions, we serve <br />
          clients across diverse industries worldwide. Our experienced
          cross-functional team leverages
          <br /> efficient processes to design and develop web applications
          tailored to the needs of startups,
          <br />
          SMBs, and large enterprises. Explore the industries where we bring our
          expertise:
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
              Why Choose Us for Cloud Management Consulting Services
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
              As a comprehensive cloud management consulting provider, we
              prioritize every stage—from analysis and design to implementation
              and growth. Our team of skilled professionals is dedicated to
              helping you optimize cloud strategies, tackle scalability
              challenges, and adopt innovative business models with a
              process-driven approach. We stay ahead of industry trends,
              ensuring your cloud solutions are both efficient and future-proof.
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

export default CloudServicesManagement;
