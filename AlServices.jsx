import React, { useState } from "react";
import { Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";

import { Helmet } from "react-helmet";

const AlServices = () => {
  return (
    <>
      <Helmet>
        <title>AI and Machine Learning Services | Piquota</title>
        <meta
          name="description"
          content="Harness AI with Piquota’s machine learning and AI services, delivering intelligent solutions for automation and data-driven insights."
        />
        <meta
          name="keywords"
          content="AI services, Machine learning solutions ,Artificial intelligence development ,Predictive analytics ,AI consulting ,Intelligent automation,Data-driven AI "
        />

        <meta
          property="og:title"
          content="AI and Machine Learning Services | Piquota"
        />
        <meta
          property="og:description"
          content="Partner with Piquota to leverage AI/ML for smarter decisions, improved efficiency, and scalable solutions that adapt to your business needs and enhance growth."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/ai-ml-solutions"
        />

        <meta
          name="twitter:title"
          content="AI/ML Solutions for Business Transformation | Piquota"
        />
        <meta
          name="twitter:description"
          content="Unlock the power of AI and machine learning with Piquota's cutting-edge solutions designed to optimize operations, enhance customer experiences, and boost scalability."
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('assets/Images/pexels-tara-winstead-8386422.jpg')`,
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
              className=""
              style={{
                fontWeight: 600,
                textAlign: "left",
                color: "white",
                marginLeft: "60px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "45px",
              }}
            >
              Transform Your Business
              <br /> With AI/ML Solutions
              <span className="rectangle1"></span>
            </h1>
            <p
              style={{
                fontSize: " 22px",
                fontWeight: 300,
                marginTop: "30px",
                textAlign: "left",
                color: "white",
                marginLeft: "60px",
              }}
            >
              Evolving Ideas into Concepts
              <br /> and Solutions
            </p>
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
              color: "#292a2b",
            }}
          >
            Why AI/ML Services?
            <span className="rectangle1"></span>
          </h2>
        </div>

        {/* Left and Right column*/}
        <div
          className="container"
          style={{ maxWidth: "90%", margin: "0 auto" }}
        >
          <div className="row mx-0 no-gutters">
            {/* Left Column */}
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
                  style={{ fontWeight: 400, fontSize: "30px" }}
                >
                  Unlock the Power of Data for Smarter Decisions
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    fontWeight: "200",
                  }}
                >
                  AI and machine learning are transforming how businesses
                  operate by enabling automation and data-driven insights. With
                  AI-driven processes, companies can streamline operations,
                  minimize errors, and maximize productivity, ensuring they stay
                  ahead in an evolving market.
                </p>
                <div className="custom-list">
                  <div className="line-item">
                    Make Smarter Decisions with Data
                  </div>
                  <div className="line-item">
                    Increase Efficiency and Cut Costs
                  </div>
                  <div className="line-item">Better Manage Resources</div>
                  <div className="line-item">
                    Automate Tasks and Improve Workflows
                  </div>
                  <div className="line-item">
                    Predict Trends for Future Growth
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
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
            {/* Left Column */}
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
                  <br /> Business with AI/ML?
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  We simplify the process of integrating AI/ML into your
                  business to drive growth and innovation. Our services help you
                  leverage data and automation for smarter decisions:
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  Develop AI-driven solutions tailored to your needs Enhance
                  efficiency and reduce operational costs
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

            {/* Right Column */}
            {/* FAQ */}
            <div className="faq-section col-12 col-md-6 d-flex flex-column justify-content-center">
              <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      01 What is AI/ML and how does it benefit businesses?
                    </Accordion.Header>
                    <Accordion.Body>
                      Artificial Intelligence (AI) and Machine Learning (ML) are
                      technologies that enable computers to learn from data and
                      make decisions without human intervention. AI/ML can
                      benefit businesses by automating processes, providing
                      data-driven insights, personalizing customer experiences,
                      and improving operational efficiency.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      02 How does AI/ML improve customer experience?
                    </Accordion.Header>
                    <Accordion.Body>
                      AI/ML enhances customer experiences by enabling businesses
                      to deliver personalized recommendations, automate customer
                      support through chatbots, predict customer behavior, and
                      optimize marketing strategies. By leveraging AI,
                      businesses can anticipate customer needs, improve
                      engagement, and increase customer satisfaction.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      03 What are the different types of AI/ML models?
                    </Accordion.Header>
                    <Accordion.Body>
                      AI/ML models can be categorized into supervised learning,
                      unsupervised learning, semi-supervised learning, and
                      reinforcement learning. Supervised learning is used for
                      tasks like classification and regression, while
                      unsupervised learning is used for clustering and anomaly
                      detection. Reinforcement learning is used for
                      decision-making processes, while semi-supervised learning
                      combines both supervised and unsupervised approaches.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      04 How can businesses implement AI/ML?
                    </Accordion.Header>
                    <Accordion.Body>
                      To implement AI/ML, businesses need to collect
                      high-quality data, choose the right algorithms, and build
                      or integrate machine learning models into their existing
                      infrastructure. The process often involves data cleaning,
                      feature selection, model training, and evaluation.
                      Additionally, businesses may need AI/ML experts to help
                      with model development and deployment.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      05 What challenges do businesses face when adopting AI/ML?
                    </Accordion.Header>
                    <Accordion.Body>
                      The adoption of AI/ML can come with challenges such as
                      data quality issues, the complexity of selecting the right
                      algorithms, the need for skilled talent, and integration
                      with existing systems. Additionally, businesses need to
                      ensure data privacy and compliance with regulations.
                      Despite these challenges, the benefits of AI/ML can
                      significantly outweigh the obstacles.
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
            AI/ML Model Analysis Process
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
                  fontWeight: "400",
                  marginBottom: "30px",
                }}
              >
                To give your business a competitive edge, we use a structured
                AI/ML model analysis process.
                <br /> This allows us to collaborate with you in harnessing
                data, optimizing workflows, and building AI-driven <br />
                solutions that adapt to your business needs, ensuring
                scalability and continuous growth.
              </p>
            </div>

            <div className="col-12 text-center">
              <img
                src="assets/Images/AILM.png"
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
            AI/ML Model Canvas
            <span className="rectangle1"></span>
          </h2>
        </div>

        {/* Left and Right columns */}
        <div
          className="container"
          style={{ maxWidth: "90%", margin: "0 auto" }}
        >
          <div className="row mx-0 no-gutters">
            {/* Left Column */}
            <div
              className="col-12 col-md-6 d-flex flex-column justify-content-center"
              style={{
                color: "black",
                padding: "50px",
                backgroundColor: "white",
              }}
            >
              <div>
                <h2
                  className="mb-3"
                  style={{ fontWeight: 400, fontSize: "30px" }}
                >
                  Benefits of AI/ML Services
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  Our AI/ML model canvas focuses on analyzing key components
                  such as data sources, algorithms, customer insights, and
                  operational efficiency. Each element of the AI/ML strategy is
                  interlinked, aiming to increase automation, scalability, and
                  adaptability to your business needs. We craft AI/ML solutions
                  that enhance your data-driven decisions, ensuring seamless
                  integration and maximum value. A successful AI/ML model is
                  self-evolving, constantly learning from new data to optimize
                  and refine operations. Evaluating the relationships between
                  these components is crucial for investors to gauge the
                  potential for growth and return on investment.
                </p>
                {/* <a
                  href="https://www.example.com"
                  style={{ color: "purple", textDecoration: "underline" }}
                >
                  Evaluate Your Competitors with AI Insights
                </a> */}
              </div>
            </div>

            {/* Right Column */}
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
          {/* First Column  */}
          <div className="col-12 col-md-5 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "0px",
              }}
            >
              Business Values <br />
              Added by Choosing <br />
              AI/ML Solutions
              <span className="rectangle1"></span>
            </h2>
          </div>

          {/* Second Column */}
          <div className="col-12 col-sm-6 col-md-2 text-md-left">
            <div>
              <img
                src="assets/Images/Enchanced Efficiency.jpg"
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
                Enhanced Efficiency
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                AI/ML streamlines operations by automating tasks, reducing
                errors, and boosting productivity.
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
                src="assets/Images/Improved Descision making.jpg"
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
                Improved Decision Making
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                AI/ML provides real-time insights, helping businesses make
                quicker, more accurate decisions.
              </p>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="col-12 col-md-2  text-md-left" style={{}}>
            <div>
              <img
                src="assets/Images/Increased Scalability.jpg"
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
                Increased Scalability
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                AI/ML adapts to your growing business, handling large data and
                scaling as needed.
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
              Collaborate with our experts to craft your AI/ML strategy
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
          {/* Left Column */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="assets/Images/Concept-map-of-key-ML-terms.png"
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
                AI/ML to Drive Exceptional Results
              </h3>
              <div className="custom-list">
                <div className="line-items">AI-Powered API Development</div>
                <div className="line-items">Real-Time Data Processing</div>
                <div className="line-items">Low-Latency AI Apps</div>
                <div className="line-items">Scalable Microservices with AI</div>
                <div className="line-items">AI-Driven E-Commerce Solutions</div>
                <div className="line-items">
                  Intelligent Database Integration
                </div>
                <div className="line-items">
                  Ongoing AI Application Maintenance
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
            Gain a Competitive Edge with AI/ML Solutions
            <span className="rectangle1"></span>
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              margin: "20px auto 80px",
              fontWeight: "400",
            }}
          >
            Leverage AI and machine learning to build scalable, high-performance
            solutions
            <br /> that adapt to evolving business needs. Accelerate
            decision-making, enhance efficiency,
            <br /> and integrate seamlessly with your business systems.
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
              AI-Driven Architecture
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
              Real-Time Data Processing
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
              Predictive Analytics
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
              AI-Powered API Development
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
              Scalable AI Microservices
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
              Third-Party AI Integrations
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
              Automated Machine Learning Testing
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
          We specialize AI/ML technologies to deliver advanced, data-driven
          solutions across various industries globally. Our team's deep
          expertise in machine learning, data science, and artificial
          intelligence enables us to craft tailored solutions for businesses of
          all sizes. Explore the industries where our AI/ML expertise is making
          an impact:
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
              Why Choose Us For <br /> AI/ML Services
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
              As a leading AI/ML development agency, we focus on every phase,
              from ideation to deployment, ensuring seamless integration with
              your business model. Our team of experts uses cutting-edge
              technologies to solve complex challenges, improve business
              processes, and drive scalable growth with data-driven solutions.
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

export default AlServices;
