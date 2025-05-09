import React, { useState } from "react";
import { Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | Piquota</title>
        <meta
          name="description"
          content="Boost your brand with Piquota’s digital marketing services, offering SEO, PPC, and social media strategies for measurable growth."
        />
        <meta
          name="keywords"
          content="Digital marketing services, SEO Services,PPC advertising ,Social media marketing  , Content marketing , Online brand growth , Digital strategy "
        />

        <meta
          property="og:title"
          content="Digital Marketing Services | Piquota"
        />
        <meta
          property="og:description"
          content="Piquota’s digital marketing services help businesses enhance their online presence, engage customers effectively, and drive measurable growth with data-driven strategies."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/digital-marketing"
        />

        <meta
          name="twitter:title"
          content="Digital Marketing Services | Piquota"
        />
        <meta
          name="twitter:description"
          content="Drive growth with Piquota’s digital marketing services, including SEO, social media, content strategy, and more to enhance brand visibility and customer engagement."
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
          url('assets/Images/pexels-steve-29404569.jpg')`,
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
              Digital Marketing
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
              Turning Strategies into Tangible Results
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
              color: "#292a2b",
            }}
          >
            Why Digital Marketing Services?
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
                  style={{ fontWeight: 400, fontSize: "30px" }}
                >
                  Benefits of Digital Marketing Services
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "19px",
                    lineHeight: "1.6",
                    color: "#fff",
                    fontWeight: "200",
                  }}
                >
                  Digital marketing is transforming how businesses connect with
                  customers and improve engagement. By leveraging data-driven
                  strategies, businesses can enhance brand presence, optimize
                  campaigns, and drive customer acquisition.
                </p>
                <div className="custom-list">
                  <div className="line-item">
                    Data-Driven Insights for Smarter Decisions
                  </div>
                  <div className="line-item">
                    Maximize ROI and Cost Efficiency
                  </div>
                  <div className="line-item">Improve Resource Allocation</div>
                  <div className="line-item">
                    Automate and Streamline Campaigns
                  </div>
                  <div className="line-item">
                    Predict and Adapt to Market Trends
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
                  style={{ fontWeight: 600, fontSize: "32px" }}
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
                  We can simplify the process of enhancing your online presence
                  and improving customer engagement. Our digital marketing
                  services help you define a clear strategy and drive growth
                  through targeted campaigns. We offer:
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  SEO Optimization, Social Media Marketing, Content Strategy &
                  Creation, Paid Advertising Campaigns, Analytics & Performance
                  Tracking
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
                      01 What is Digital Marketing and why is it important?
                    </Accordion.Header>
                    <Accordion.Body>
                      Digital marketing refers to the use of digital channels,
                      platforms, and technologies to promote and advertise
                      products or services. It includes strategies like social
                      media marketing, search engine optimization (SEO), content
                      marketing, and email marketing. Its importance lies in the
                      ability to reach a global audience, track performance in
                      real-time, and build personalized marketing campaigns.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      02 How can businesses leverage Social Media for marketing?
                    </Accordion.Header>
                    <Accordion.Body>
                      Social media platforms like Facebook, Instagram, LinkedIn,
                      and Twitter provide businesses with the opportunity to
                      engage with their target audience. By creating compelling
                      content, running paid ads, and interacting with followers,
                      businesses can build brand awareness, drive website
                      traffic, and increase sales. Social media marketing also
                      helps with customer feedback and community building.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      03 What is SEO and how does it affect my business?
                    </Accordion.Header>
                    <Accordion.Body>
                      SEO (Search Engine Optimization) is the practice of
                      optimizing your website and content to rank higher in
                      search engine results, such as Google. By targeting
                      relevant keywords, improving site performance, and
                      creating valuable content, businesses can increase organic
                      traffic to their websites. SEO helps businesses become
                      more visible to potential customers who are actively
                      searching for their products or services.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      04 How do email campaigns fit into digital marketing
                      strategies?
                    </Accordion.Header>
                    <Accordion.Body>
                      Email marketing allows businesses to reach their customers
                      directly in their inboxes with personalized messages. It
                      is a highly effective strategy for building relationships,
                      promoting products, offering discounts, and driving
                      conversions. With segmentation and automation tools,
                      businesses can send relevant content to different customer
                      groups, ensuring higher engagement rates.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      05 What role does content marketing play in business
                      growth?
                    </Accordion.Header>
                    <Accordion.Body>
                      Content marketing involves creating and sharing valuable,
                      relevant, and consistent content to attract and retain a
                      target audience. It can include blogs, videos, podcasts,
                      infographics, and more. Content marketing helps businesses
                      build trust with customers, increase engagement, and
                      position themselves as industry leaders. It’s an essential
                      tool for driving traffic, leads, and sales.
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
            }}
          >
            Digital Marketing Strategy Process
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
                To ensure sustainable growth and a competitive edge, we follow a
                structured
                <br /> digital marketing strategy process. This allows us to
                collaborate with our clients,
                <br /> thoroughly analyze their business goals, and design
                targeted campaigns that drive <br />
                results. We focus on continuous optimization, data-driven
                decisions, and
                <br />
                measurable outcomes to help you reach your business objectives
                effectively.
              </p>
            </div>

            <div className="col-12 text-center">
              <img
                src="assets/Images/Digital Marketing.png"
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
            Digital Marketing Canvas
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
                  style={{ fontWeight: 400, fontSize: "30px" }}
                >
                  Benefits of Digital Marketing Services
                  <span className="rectanglefullstop"></span>
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    fontWeight: "400",
                  }}
                >
                  An analysis of your brand’s unique value proposition, target
                  audience, customer engagement, and channels. The elements of
                  your digital marketing strategy should align seamlessly to
                  maximize growth and scalability based on business goals. We
                  create tailored digital marketing strategies that reflect your
                  business’s specific needs and objectives. A successful digital
                  marketing canvas is dynamic, with continuous feedback loops
                  that strengthen brand positioning, drive conversions, and
                  foster long-term growth.
                </p>
                {/* <a
                  href="https://www.example.com"
                  style={{ color: "purple", textDecoration: "underline" }}
                >
                  Evaluate your Competitors
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
          {/* First Column  */}
          <div className="col-12 col-md-5 text-center text-md-start">
            <h2
              style={{
                fontWeight: 600,
                marginTop: "0px",
                marginRight: "10vh",
              }}
            >
              Business Values <br />
              Added by Choosing
              <br /> Digital Marketing Services
              <span className="rectangle1"></span>
            </h2>
          </div>

          {/* Second Column */}
          <div className="col-12 col-sm-6 col-md-2 text-md-left">
            <div>
              <img
                src="assets/Images/Brand Visibility.jpg"
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
                Brand Visibility
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Boost your brand's reach with SEO, social media, and targeted
                ads to connect with a broader audience.
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
                src="assets/Images/Customer engagements.jpg"
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
                Customer Engagement
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Enhance connections with customers through effective digital
                tools, improving loyalty and relationships.
              </p>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="col-12 col-md-2  text-md-left" style={{}}>
            <div>
              <img
                src="assets/Images/Data insights.jpg"
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
                Data Insights
              </h4>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Make informed decisions using real-time data to maximize your
                marketing efforts and ROI.
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
              Make real-time data to improve marketing and ROI.
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
              src="assets/Images/1578102169739.png"
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
                Digital Marketing Solutions for Business Growth
              </h3>
              <div className="custom-list">
                <div className="line-items">
                  SEO & Search Engine Optimization
                </div>
                <div className="line-items">
                  Social Media Marketing Strategies
                </div>
                <div className="line-items">Paid Advertising Campaigns</div>
                <div className="line-items">Content Marketing & Strategy</div>
                <div className="line-items">Email Marketing Automation</div>
                <div className="line-items">
                  Analytics & Data-Driven Insights
                </div>
                <div className="line-items">
                  Ongoing Campaign Management & Support
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
            Achieve Digital Excellence with Marketing Solutions
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
            Utilize innovative strategies to thrive in a competitive digital
            world. Enhance
            <br /> customer interactions, boost brand awareness, and drive
            growth with adaptive,
            <br /> results-driven marketing approaches.
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
              Search Engine Optimization (SEO)
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
              Social Media Campaigns
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
              Content Strategy & Creation
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
              Paid Advertising & PPC
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
              Audience Targeting
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
              Analytics & Insights
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
              Campaign Optimization
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
              Multi-channel Integrations
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
          style={{ fontSize: "20px", fontWeight: "400" }}
        >
          We have successfully crafted tailored digital marketing strategies for
          clients across various industries worldwide. Our team's deep industry
          knowledge and efficient processes empower us to deliver solutions that
          drive measurable results for startups, SMBs, and large enterprises
          alike. Here's a glimpse of the industries where we excel:
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
              Why Choose Us for <br />
              Digital Marketing Services
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
              As a full-service digital marketing agency, we prioritize every
              phase, from strategy and execution to growth and optimization. Our
              team of experts is committed to helping you navigate the digital
              landscape, implement innovative marketing strategies, and overcome
              challenges with a results-driven approach.
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

export default DigitalMarketing;
