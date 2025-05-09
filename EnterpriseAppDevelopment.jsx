import React, { useState } from "react";
import "../Styles/EnterpriseAppDevelopment.css";
import { Accordion, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EnterpriseAppDevelopment = () => {
  const [selectedService, setSelectedService] = useState(1);

  const handleClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const getServiceContent = (serviceId) => {
    switch (serviceId) {
      case 1:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Custom Enterprise Solutions</h3>
            <p>
              We specialize in designing and developing custom enterprise
              applications that align perfectly with your business objectives.
              From simplifying daily operations to driving innovation, our
              solutions are designed to streamline workflows and maximize
              efficiency. Whether you're looking to improve customer engagement,
              automate processes, or integrate multiple systems, we create
              scalable applications that seamlessly integrate with your existing
              technology stack. With our expert team, we ensure that every
              solution is not only functional but also future-proof, adaptable,
              and built to grow with your business needs.
            </p>
          </div>
        );
      case 2:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>ERP Systems for Efficiency</h3>
            <p>
              Our ERP solutions offer businesses the opportunity to centralize
              and automate critical operations. Whether it’s managing finances,
              human resources, supply chain, or customer relationships, our ERP
              systems streamline processes across departments, ensuring smooth
              collaboration and data flow. We build systems that enhance
              operational efficiency, reduce administrative burden, and provide
              real-time visibility into key metrics. With an ERP system in
              place, your business can make data-driven decisions with
              confidence, eliminate redundancies, and ensure that all teams work
              from the same source of truth.
            </p>
          </div>
        );
      case 3:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>CRM Systems for Growth</h3>
            <p>
              Customer Relationship Management (CRM) systems are essential for
              businesses looking to build strong, long-term relationships with
              their customers. Our custom CRM solutions allow you to manage
              contacts, sales opportunities, and customer interactions more
              effectively. With integrated marketing automation, sales process
              management, and customer service features, we enable you to
              enhance the customer experience at every touchpoint. Our CRM
              systems centralize customer data, making it easier to track leads,
              monitor communications, and provide personalized services. This
              results in increased customer satisfaction, loyalty, and overall
              business growth.
            </p>
          </div>
        );
      case 4:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Mobile Apps for Enterprise</h3>
            <p>
              In today’s fast-paced business environment, mobility is crucial.
              Our mobile app solutions are crafted to meet the unique needs of
              enterprises. Whether it’s for field employees, internal staff, or
              customer-facing applications, we build secure, intuitive, and
              scalable mobile apps that enhance productivity and engagement. Our
              apps support real-time collaboration, allow access to critical
              data, and provide tools that streamline workflows, no matter where
              your team is located. With seamless integration into your
              enterprise systems, our mobile apps improve efficiency, foster
              communication, and empower your workforce.
            </p>
          </div>
        );
      case 5:
        return (
          <div style={{ marginTop: "30px" }}>
            <h3>Cloud Applications for Flexibility</h3>
            <p>
              We help businesses transition to the cloud with secure, scalable
              applications that enhance collaboration, reduce costs, and ensure
              flexibility. Cloud solutions allow your teams to access
              applications and data from anywhere, at any time, improving both
              productivity and agility. With our cloud-based systems, you can
              scale resources easily, reduce the overhead of maintaining
              physical infrastructure, and provide real-time updates.
              Additionally, cloud solutions offer better disaster recovery,
              enhanced data security, and seamless integration with existing
              enterprise applications, ensuring you’re always ready for the next
              phase of growth.
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
        <title>Enterprise App Development | Piquota</title>
        <meta
          name="description"
          content="Transform your business with Piquota’s enterprise app development, delivering scalable, secure solutions for operational efficiency.."
        />
        <meta
          name="keywords"
          content="Enterprise app development, Custom enterprise solutions ,Business process automation  , Scalable enterprise software,Enterprise mobility,ERP development,Secure app development "
        />
        <meta
          property="og:title"
          content="Enterprise App Development Services | Piquota"
        />
        <meta
          property="og:description"
          content="Partner with Piquota for enterprise app development that drives efficiency, scalability, and seamless integration into your business processes. Tailored solutions for enterprise success."
        />
        <meta
          property="og:url"
          content="https://www.piquota.ai/enterprise-app-development"
        />
        <meta
          property="og:image"
          content="https://piquota.ai/assets/images/enterprise-app-development.jpg"
        />{" "}
        {/* Replace with your actual image URL */}
        <meta
          name="twitter:title"
          content="Enterprise App Development Services | Piquota"
        />
        <meta
          name="twitter:description"
          content="Unlock the full potential of your business with Piquota's scalable and secure enterprise app development services designed to enhance operations, integration, and growth."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://piquota.ai/assets/images/enterprise-app-development.jpg"
        />{" "}
        {/* Replace with your actual image URL */}
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('assets/Images/pexels-steve-29506613.jpg')`,
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
              className="display-5"
              style={{
                fontWeight: 600,
                textAlign: "left",
                color: "#fff",
                marginLeft: "80px",
              }}
            >
              Drive Success with
              <br /> Scalable Enterprise Apps
              <span className="rectangle1"></span>
            </h1>

            <p
              style={{
                fontWeight: 300,
                marginTop: "10px",
                textAlign: "left",
                color: "#fff",
                marginLeft: "80px",
                fontSize: "22px",
              }}
            >
              Our flexible teams, combined with Agile practices, ensure that
              your
              <br /> enterprise app is built to scale, adapt, and deliver
              results. We provide efficient, <br />
              robust solutions tailored to meet your business needs. With the
              right
              <br /> tools and expertise, we help you stay ahead in the <br />
              fast-changing tech world.
            </p>
            {/* Button */}
            <a
              href="#"
              className="btn btn-lg mt-4"
              style={{
                textAlign: "left",
                borderRadius: "0px",
                marginLeft: "80px",
                backgroundColor: "#772c93",
                color: "white",
              }}
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </div>

      {/*Section 1*/}
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
              Empower Your Business with Scalable <br />
              Enterprise App Development
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
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              In today’s fast-paced business world, successful enterprises need
              adaptable, secure, and high-performance applications to stay
              competitive. Our enterprise app development services focus on
              building solutions that integrate seamlessly with your existing
              workflows, drive operational
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
              efficiencies, and support business growth. We ensure the delivery
              of robust applications that are scalable, secure, and built to
              meet the unique demands of your business environment, enabling you
              to achieve seamless business operations with real-time insights.
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
              Enterprise App Development
              <br /> for Streamlined Business Operations
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
              Your enterprise application is the backbone of your business,
              facilitating seamless operations and enabling real-time
              decision-making. At Piquota, we understand that every business has
              unique needs, which is why we provide custom enterprise app
              development services designed to optimize workflows, enhance
              efficiency, and boost productivity. Our team of skilled developers
              ensures your enterprise apps are built with the latest
              technologies, making them scalable, secure, and easy to integrate
              with your existing systems. We focus on delivering solutions that
              meet your long-term goals, offering you the most innovative and
              reliable enterprise app development services available.
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

      {/* Section 4 */}
      <div className="container-fluid">
        <div className="row mx-0 text-center">
          <div className="col-12">
            <h2
              style={{
                fontWeight: 600,
                marginBottom: "30px",
                fontSize: "35px",
              }}
            >
              Our Clients Say
              <span className="rectangle1"></span>
            </h2>
          </div>
        </div>

        {/* Client's Image */}
        <div className="row mx-0 justify-content-center">
          <div className="col-12 text-center">
            <img
              src="assets/Images/avatar-photo-default-user-icon-person-image-picture-face-social-vector-human-head-284266057.webp"
              alt="Client"
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />
          </div>
        </div>

        {/* Paragraph */}
        <div className="row mx-0 text-center">
          <div className="col-12">
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                fontWeight: "400",
              }}
            >
              Working with Team Piquota for our website redesign effort was a
              great experience.
              <br /> They delivered impressive results and also made the entire
              process enjoyable and insightful.
              <br /> I can't recommend them enough!
            </p>
          </div>
        </div>

        {/* Client Name and Position */}
        <div className="row mx-0 text-center">
          <div className="col-12">
            <p
              style={{
                fontSize: "1.2rem",
                color: "#333",
                fontWeight: "600",
              }}
            >
              Giri Gubbala
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              Xlsoftek
            </p>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-12" style={{ marginBottom: "30px" }}></div>
        </div>

        {/* Left and Right column*/}
        <div
          className="container"
          style={{ maxWidth: "85%", margin: "0 auto" }}
        >
          <div className="row mx-0 no-gutters">
            {/* Left Column */}
            <div
              className="col-12 col-md-6 d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "#0a121f",
                color: "#fff",
                minHeight: "50vh",
                padding: "80px",
              }}
            >
              <div>
                <h2
                  className="mb-3"
                  style={{ fontWeight: 450, fontSize: "30px" }}
                >
                  Custom Solutions for Business Growth
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
                  Our app development packages are crafted after in-depth market
                  analysis, client feedback, and a focus on delivering
                  high-impact solutions. We prioritize efficiency, scalability,
                  and innovation in every project, ensuring your business
                  operates smoothly and stays competitive in today’s fast-paced
                  market. By aligning with your goals, we deliver tailored apps
                  that enhance workflows, improve customer experiences, and
                  foster business success.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6 p-0">
              <img
                src="assets/Images/team-working-together-project.jpg"
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

      {/*Section 5 */}
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
              Custom App Development Solutions for Transforming
              <br /> Your Business Idea
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

      {/*Section 6 */}
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
              Accelerating Your Digital Success with Advanced Solutions
              <span className="rectanglefullstop"></span>
            </h2>
          </div>
        </div>
      </div>

      {/*Section 7 */}
      <div className="container  py-1">
        <div className="row  mx-0 g-4 d-flex">
          {/* Box 1 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Drive Seamless Experiences
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We believe in building intuitive digital experiences that
                captivate users and drive engagement. Our solutions are tailored
                to meet the unique needs of your audience, ensuring seamless and
                impactful interactions.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Unlock New Opportunities
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                By integrating the latest technologies, we enable businesses to
                explore new avenues for growth. We focus on creating solutions
                that open doors to new markets and possibilities.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Empower Your Team
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                Our solutions empower businesses with tools that streamline
                workflows, improve collaboration, and enhance productivity. We
                ensure your team can work smarter, not harder.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="p-5 border rounded bg-white flex-fill">
              <h3 className="fs-5" style={{ fontWeight: "600" }}>
                Lead with Innovation
              </h3>
              <div className="purple-underline mb-3"></div>
              <p className="mt-2">
                We are committed to pushing the boundaries of technology,
                helping businesses stay at the forefront of innovation. We
                believe in developing solutions that drive meaningful change and
                make a lasting impact.
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
              Stay Ahead with Cutting-Edge <br />
              Integrations
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
              Revolutionize Your Business with Custom Enterprise Application
              Solutions
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
              {/* Custom Enterprise Solutions */}
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
                  className="fas fa-cogs"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 1 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Custom Enterprise Solutions
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

              {/* ERP Systems for Efficiency */}
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
                  className="fas fa-sync-alt"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 2 ? "white" : "#B0B0B0",
                  }}
                ></i>
                ERP Systems for Efficiency
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

              {/* CRM Systems for Growth */}
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
                  className="fas fa-users"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 3 ? "white" : "#B0B0B0",
                  }}
                ></i>
                CRM Systems for Growth
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

              {/* Mobile Apps for Enterprise */}
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
                  className="fas fa-mobile-alt"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 4 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Mobile Apps for Enterprise
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

              {/* Cloud Applications for Flexibility */}
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
                  className="fas fa-cloud"
                  style={{
                    fontSize: "36px",
                    marginRight: "15px",
                    color: selectedService === 5 ? "white" : "#B0B0B0",
                  }}
                ></i>
                Cloud Applications for Flexibility
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
              Consult with our experts to shape your mobile strategy.
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
          {/* Left Column  */}
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
              Implement a mobile-first <br />
              strategy with agility for
              <br /> impactful results.
            </h3>

            <p
              style={{
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "1.6",
                marginBottom: "40px",
              }}
            >
              In today’s interconnected world, various factors influence
              business success. By adopting an agile methodology, businesses can
              test and refine their ideas with continuous improvements. Our
              approach ensures quality at every step, driving transformational
              outcomes through iterative development.
            </p>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ paddingRight: "100px" }}
          >
            <img
              src="assets/Images/8d31f213-95e3-406f-be97-dbffc953dd1c_20241230_192437_0000.jpg"
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
                  marginBottom: "15px",
                }}
              >
                Featured Enterprise Solutions
              </h4>

              <p
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                We specialize in creating robust, scalable, and customized
                enterprise applications, leveraging cutting-edge technologies.
                Here are some key features of our enterprise app development
                services:
              </p>

              {/* Points */}
              <div className="custom-list">
                <div className="line-items">Custom Enterprise Applications</div>
                <div className="line-items">Cloud-Based Solutions</div>
                <div className="line-items">Business Process Automation</div>
                <div className="line-items">Data Integration & Analytics</div>
                <div className="line-items">CRM & ERP Systems</div>
                <div className="line-items">Mobile Enterprise Solutions</div>
                <div className="line-items">Ongoing Support & Maintenance</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <img
              src="assets/Images/pexels-mareklevak-2265482.jpg"
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
              Why Choose Us for Custom <br />
              Enterprise App Development?
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
              We are a full-service enterprise app development company committed
              to delivering high-quality solutions across every stage of the
              development lifecycle. Our skilled team ensures that your
              enterprise apps are scalable, secure, and optimized to meet your
              specific business needs, enabling you to stay ahead in a rapidly
              evolving technological landscape.
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
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div
                style={{
                  marginBottom: "10px",
                  textAlign: "left",
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
                <span style={{ fontWeight: "bold" }}>- </span>50+ Skilled
                Professionals
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
                <span style={{ fontWeight: "bold" }}>- </span>Flexible
                Development Approach
              </div>
              <div
                style={{
                  textAlign: "left", // Left-align the text
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                <span style={{ fontWeight: "bold" }}>- </span>Collaborative
                Process
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
                What type of enterprise app development services do you provide?
              </Accordion.Header>
              <Accordion.Body>
                At Piquota, we specialize in developing comprehensive enterprise
                applications that streamline business processes, improve
                workflow efficiency, and integrate seamlessly with existing
                systems. Whether you need customer relationship management (CRM)
                systems, enterprise resource planning (ERP) solutions, or
                business intelligence tools, we tailor our development approach
                to meet the specific needs of your business.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How do you ensure the scalability of enterprise applications?
              </Accordion.Header>
              <Accordion.Body>
                Scalability is a cornerstone of our enterprise app development
                process. We design applications that can handle increased user
                traffic and larger datasets without compromising performance. By
                utilizing cloud technologies, microservices architecture, and
                efficient database management, we ensure that your enterprise
                application can grow alongside your business.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What platforms and technologies do you use for enterprise app
                development?
              </Accordion.Header>
              <Accordion.Body>
                We work with a wide range of platforms and technologies to
                develop enterprise applications that fit your business needs.
                Our expertise includes Java, .NET, Python, and mobile app
                frameworks like React Native. We also leverage popular
                enterprise tools like Salesforce, SAP, and Microsoft Azure to
                ensure our apps are secure, reliable, and scalable.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How do you handle data security in enterprise app development?
              </Accordion.Header>
              <Accordion.Body>
                Data security is a top priority in our enterprise app
                development process. We implement strong encryption, secure
                APIs, and access control mechanisms to protect sensitive
                business data. Our team follows industry best practices and
                complies with regulatory requirements to ensure your enterprise
                app is secure against potential threats.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default EnterpriseAppDevelopment;
