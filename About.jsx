// import React from "react";
import React, { useState } from "react";
import "../Styles/About.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Grid from '@mui/material/Grid';

import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Pagination,
} from "@mui/material";

const About = () => {
  const navigate = useNavigate();










  const employees = [
    {
      id: 1,
      name: "Srividhya",
      role: "Talent Acquisition Lead",
      photo: "assets/Images/Srividhya.jpg",
      socialLink: "https://www.linkedin.com/in/sri-vidhya-430b9a23b/",
    },
    {
      id: 2,
      name: "Navaneetha",
      role: "Project Manager",
      photo: "assets/Images/Navaneetha.jpg",
      socialLink: "https://www.linkedin.com/in/navaneethasanthanam/",
    },
    {
      id: 3,
      name: "Neeraja",
      role: "Software Engineer",
      secondaryrole: "",
      photo: "assets/Images/Neeraja.jpg",
      socialLink: "",
    },
    {
      id: 4,
      name: "Seetha",
      role: "Team Lead SEO Analyst",
      photo: "assets/Images/Seetha.jpg",
      socialLink: "https://github.com/bradleygreer",
    },
    {
      id: 5,
      name: "Sudha",
      role: "Software Engineer",
      photo: "assets/Images/Sudha.jpg",
      socialLink: "https://www.linkedin.com/in/sudha-priyadharshini-34102353/",
    },
    {
      id: 6,
      name: "Jitesh",
      role: "Software Engineer",
      photo: "assets/Images/Jitesh.jpg",
      socialLink: "https://twitter.com/briellewilliamson",
    },
    {
      id: 7,
      name: "Nithya",
      role: "Lead Software Engineer",
      photo: "assets/Images/Nithya.jpg",
      socialLink: "https://twitter.com/briellewilliamson",
    },
    {
      id: 8,
      name: "Vijayalakshmi",
      role: "Lead Software Engineer",
      photo: "assets/Images/Viji.jpg",
      socialLink: "",
    },
    {
      id: 9,
      name: "Chetna",
      role: "Software Engineer",
      photo: "assets/Images/Chetna.jpg",
      socialLink: "https://www.linkedin.com/in/chetna-kshirsagar/",
    },
    {
      id: 10,
      name: "Sellamuthu",
      role: "Software Test Engineer",
      photo: "assets/Images/Sellamuthu.jpg",
      socialLink: "https://twitter.com/briellewilliamson",
    },
    {
      id: 11,
      name: "Ashmika",
      role: "Sr Analyst",
      photo: "assets/Images/Ashmika.jpg",
      socialLink: "https://www.linkedin.com/in/ashmika-nama/",
    },
    {
      id: 12,
      name: "Lavanya",
      role: "Software Engineer",
      photo: "assets/Images/Lavanya.jpg",
      socialLink: "https://twitter.com/briellewilliamson",
    },
    {
      id: 13,
      name: "Dhanunjaya",
      role: "Software Test Engineer",
      photo: "assets/Images/Dhanunjaya.webp",
      socialLink: "https://twitter.com/briellewilliamson",
    },
    {
      id: 14,
      name: "Menaka",
      role: "Technical Project Manager",
      photo: "assets/Images/Menaka.jpg",
      socialLink: "https://www.linkedin.com/in/menaka-santhanam-231b331a1",
    },
    {
      id: 15,
      name: "Yasmean",
      role: "Lead Software Engineer",
      photo: "assets/Images/Yashmean.jpg",
      socialLink: "https://twitter.com/briellewilliamson",
    },
    {
      id: 16,
      name: "Lalitha",
      role: "Lead Software Engineer",
      photo: "assets/Images/Lalitha.jpg",
      socialLink: "https://www.linkedin.com/in/lalitha-s-92000b5b/",
    },
    {
      id: 17,
      name: "Kavitha",
      role: "Software Engineer",
      photo: "assets/Images/Kavitha.jpg",
      socialLink: "",
    },
    {
      id: 18,
      name: "Navya Sri",
      role: "Software Test Engineer",
      photo: "assets/Images/Navya.jpg",
      socialLink: "",
    },
    {
      id: 19,
      name: "Deepak",
      role: "Software Engineer",
      photo: "assets/Images/Deepak.jpg",
      socialLink: "https://www.linkedin.com/in/deepak-anbalagan-51681726b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 20,
      name: "Lakshmana",
      role: "Software Engineer",
      photo: "assets/Images/Lakshmana.jpg",
      socialLink: "",
    },
    {
      id: 21,
      name: "Irai Anbu",
      role: "Software Engineer",
      photo: "assets/Images/Irai.jpg",
      socialLink: "",
    },
    {
      id: 22,
      name: "Mohan",
      role: "Software Engineer",
      photo: "assets/Images/Mohan.jpg",
      socialLink: "",
    },
    {
      id: 23,
      name: "Kannan",
      role: "Software Engineer",
      photo: "assets/Images/Kannan.jpg",
      socialLink: "",
    },
    {
      id: 24,
      name: "Yogasanjeevarayan",
      role: "Software Engineer",
      photo: "assets/Images/Yogasanjeevarayan.jpg",
      socialLink: "https://www.linkedin.com/in/yogasanjeevarayan-n-a1091123b/",
    },
    {
      id: 25,
      name: "Vijayalakshmi Seenivasan",
      role: "Software Engineer",
      photo: "assets/Images/Vijayalakshmi.jpg",
      socialLink: "",
    },
    {
      id: 26,
      name: "Nayana",
      role: "Software Engineer",
      photo: "assets/Images/Nayana.jpg",
      socialLink: "",
    },
    {
      id: 27,
      name: "Nishanth",
      role: "Software Engineer",
      photo: "assets/Images/Nishanth.jpg",
      socialLink: "",
    },
    {
      id: 28,
      name: "Vasundhara",
      role: "PowerBI Developer",
      photo: "assets/Images/Vasundhra.jpg",
      socialLink: "",
    },
    {
      id: 29,
      name: "Sumi Philip",
      role: "PowerBI Developer",
      photo: "assets/Images/Sumi.jpg",
      socialLink: "",
    },
    {
      id: 30,
      name: "Karthika",
      role: "Senior Technical Specialist",
      photo: "assets/Images/Karthika.jpg",
      socialLink: "",
    },
    {
      id: 31,
      name: "Harini",
      role: "BI Architect",
      photo: "assets/Images/Harini.jpg",
      socialLink: "",
    },
    {
      id: 32,
      name: "Raghavendra",
      role: "Software Engineer",
      photo: "assets/Images/Raghav.jpg",
      socialLink: "https://www.linkedin.com/in/raghavendra-d-n-a518191b5/",
    },
    {
      id: 33,
      name: "Immanuel",
      role: "Software Engineer",
      photo: "assets/Images/Immanuel.jpg",
      socialLink: "https://www.linkedin.com/in/immanuel-a-358ba22a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 34,
      name: "Saravanan",
      role: "Software Test Engineer",
      photo: "assets/Images/Saravanan.jpg",
      socialLink: "https://www.linkedin.com/in/saravanan-kannan-823b3a323/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 35,
      name: "Fathima",
      role: "Software Test Engineer",
      photo: "assets/Images/Fathima.jpg",
      socialLink: "",
    },
    {
      id: 36,
      name: "Akshay",
      role: "Software Engineer",
      photo: "assets/Images/Akshay.jpg",
      socialLink: "",
    },
    {
      id: 37,
      name: "Kanmani",
      role: "Software Test Engineer",
      photo: "assets/Images/Kanmani.jpg",
      socialLink: "",
    },
    {
      id: 38,
      name: "Mohamed",
      role: "Software Test Engineer",
      photo: "assets/Images/Mohamed.jpg",
      socialLink: "",
    },
    {
      id: 39,
      name: "Sethuraman Murugaiyan",
      role: "Intern",
      photo: "assets/Images/Sethu.webp",
      socialLink: "",
    },
    // Add more employee details here
  ];
  
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 6;
  
    // Calculate pagination
    const totalPages = Math.ceil(employees.length / employeesPerPage);
    const startIndex = (currentPage - 1) * employeesPerPage;
    const currentEmployees = employees.slice(startIndex, startIndex + employeesPerPage);
  
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };









  return (
    <>
      {/* Meta Data */}
      <Helmet>
        <meta
          name="description"
          content="Learn about Piquota, a leader in digital transformation, delivering innovative IT solutions with a client-centric approach to drive business success."
        />
        <meta
          name="keywords"
          content="About Piquota, Digital transformation, IT solutions provider, Technology consulting, Client-centric innovation, Business growth solutions, IT expertise"
        />
        <meta name="author" content="Piquota" />
        <meta
          property="og:title"
          content="About Us | Piquota - Digital Transformation and Business Solutions"
        />
        <meta
          property="og:description"
          content="Discover how Piquota helps businesses thrive by integrating modern technologies with human expertise, delivering end-to-end solutions across industries, and accelerating digital transformation."
        />
        <meta
          property="og:image"
          content="assets/Images/pexels-ron-lach-8100071.jpg"
        />
        <meta property="og:url" content="https://www.piquota.ai/about" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="About Us | Piquota - Digital Transformation and Business Solutions"
        />
        <meta
          name="twitter:description"
          content="Piquota's approach focuses on delivering innovative and adaptable solutions, driving growth, and improving performance for businesses of all sizes."
        />
        <meta
          name="twitter:image"
          content="assets/Images/pexels-ron-lach-8100071.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Banner Section */}
      <div
        className="container-fluid"
        style={{
          // backgroundImage: `
          // linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
          // url('assets/Images/pexels-vlado-paunovic-1567547-3038740.jpg')`,
          backgroundImage: `url('assets/Images/pexels-themob000-28428592.jpg')`,
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
            {" "}
            {/*  style={{ marginLeft: "70px" }} */}
            {/* Small Heading */}
            <h1
              className="fs-4"
              style={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                textAlign: "left",
                color: "#fff",
              }}
            >
              Piquota
            </h1>
            <h2
              className="display-3"
              style={{
                fontWeight: 700,
                marginTop: "10px",
                textAlign: "left",
                color: "#fff",
              }}
            >
              An Inside View
              <div className="white-underline mb-3"></div>
            </h2>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4" style={{ fontWeight: 600, color: "#333" }}>
              Empowering Change and Innovation
              <span class="rectanglefullstop"></span>
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#555",
                marginRight: "80px",
                fontWeight: "400",
              }}
            >
              We catalyze growth in our clients' businesses by championing
              innovation and a deep-rooted dedication to excellence. Our
              cross-functional team blends diverse perspectives, advanced
              technology, and data-driven insights to deliver transformative
              solutions across industries. With a global reach, we aim to create
              lasting, sustainable impact for a brighter tomorrow.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <img
              src="assets/Images/pexels-divinetechygirl-1181472.jpg"
              alt="About Us"
              className="img-fluid"
              style={{
                border: "none",
                borderRadius: "3px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4" style={{ fontWeight: 600, color: "#333" }}>
              Our Roots
              <span className="rectanglefullstop"></span>
            </h2>
            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.6",
                color: "#555",
                marginRight: "10px",
                fontWeight: "400",
              }}
            >
              At Piquota Digital Solutions, we are dedicated to walking
              alongside our clients through their Digital Transformation
              journey. By providing targeted business value, we address complex
              challenges and deliver impactful solutions. Our core
              values—Integrity, Customer Success, and Respect for
              Individuals—are at the heart of everything we do. We focus on
              aligning business strategies with technological solutions,
              ensuring a seamless transition from vision to execution through
              comprehensive technology and system integration services.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.6",
                color: "#555",
                marginRight: "10px",
                fontWeight: "400",
                marginTop: "60px",
              }}
            >
              We are committed to empowering organizations to thrive in a
              rapidly changing digital world. At Piquota, we approach each
              project with a collaborative mindset, tailoring our solutions to
              meet the unique needs of each client. With an emphasis on
              long-term partnerships, we help businesses navigate the evolving
              technological landscape, driving efficiency, growth, and
              innovation. Through our end-to-end solutions, we bridge the gap
              between strategy and implementation, ensuring that every project
              delivers tangible value and measurable success.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="container py-4">
        <div className="row mx-0">
          {/* Column 1 */}
          <div className="col-md-6 d-flex align-items-start mb-4 equal-column bg-vision">
            <i className="fas fa-rocket rounded-icon"></i>
            <div>
              <h4 style={{ fontWeight: "600" }}>Our Vision</h4>
              <p>
                Our goal is to be a leading IT services provider, focused on
                delivering impactful solutions that drive our clients’ success.
                We aim to create long-term value with every project we take on.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-6 d-flex align-items-start mb-4 equal-column bg-innovation">
            <i className="fas fa-cogs rounded-icon"></i>
            <div>
              <h4 style={{ fontWeight: "600" }}>Innovation</h4>
              <p>
                We value creativity and strive to deliver innovative solutions
                using the best technology. Our approach is to harness technology
                to solve real-world business challenges efficiently.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-6 d-flex align-items-start mb-4 equal-column bg-mission">
            <i className="fas fa-cogs rounded-icon"></i>
            <div>
              <h4 style={{ fontWeight: "600" }}>Our Mission</h4>
              <p>
                We are committed to providing timely, high-quality solutions
                that meet client expectations. Our mission is to always add
                value through transparency, efficiency, and expertise.
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-6 d-flex align-items-start mb-4 equal-column bg-customer">
            <i className="fas fa-users rounded-icon"></i>
            <div>
              <h4 style={{ fontWeight: "600" }}>Customer-Centric Approach</h4>
              <p>
                We focus on understanding our clients’ needs to deliver tailored
                solutions that drive their success. Building strong, lasting
                relationships is at the core of our approach.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="container-fluid p-0">
        <div className="row mx-0 no-gutters">
          {/* Left Column */}
          <div
            className="col-12 col-md-6 d-flex flex-column justify-content-center"
            style={{
              backgroundColor: "#1c1c1c",
              color: "#fff",
              minHeight: "50vh",
              padding: "70px",
            }}
          >
            <div>
              <h2 className="mb-4" style={{ fontWeight: 600 }}>
                Our Culture
                <span className="rectanglefullstop"></span>
              </h2>
              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.6",
                  fontWeight: "300",
                  color: "#fff",
                }}
              >
                In our clients' businesses by embracing a bold spirit of
                innovation with an unwavering commitment. Our multidisciplinary
                team implements a dynamic formula of an unmatched combination of
                perspectives, technology, data, and operational know-how to
                deliver capabilities across sectors globally for a more
                sustainable tomorrow.
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
                minHeight: "50vh",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div
        className="container-fluid p-0 "
        style={{ marginTop: "60px", marginBottom: "60px", height: "auto" }}
      >
        <div className="row mx-0 no-gutters justify-content-center">
          {/* First Column */}
          <div
            className="col-12 col-md-3 p-0 d-flex justify-content-center align-items-center"
            style={{
              padding: "15px",
              borderRadius: "12px",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              height: "350px",
              marginTop: "50px",
            }}
          >
            <img
              src="assets/Images/ganesh1.webp"
              alt="Ganesh Ramakrishnan"
              className="img-fluid"
              style={{
                objectFit: "cover",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.09)",
                maxWidth: "60%",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <div
              style={{
                color: "#333",
                fontWeight: "700",
                fontSize: "22px",
                marginTop: "10px",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: "600" }}>
                Ganesh Ramakrishnan
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#777",
                  marginTop: "5px",
                }}
              >
                CEO & Founder
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div
            className="col-12 col-md-3 p-0"
            style={{
              height: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              // marginRight: '10px',
            }}
          >
            <h2
              style={{
                fontWeight: 600,
                color: "#333",
                fontSize: "28px",
                marginBottom: "15px",
                textAlign: "left",
                padding: "0 15px",
                marginTop: "120px",
              }}
            >
              Our Values
              <span class="rectanglefullstop"></span>
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                fontWeight: "400",
                color: "#555",
                textAlign: "left",
                padding: "0 15px",
              }}
            >
              We are committed to upholding sustainable, ethical, and
              transparent business practices. By fostering a collaborative and
              innovative culture, we transform ideas into actionable business
              solutions, enabling our clients to achieve a strong competitive
              advantage.
            </p>
          </div>

          {/* Third Column  */}
          <div
            className="col-12 col-md-3 p-0"
            style={{
              height: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                fontWeight: "400",
                color: "#555",
                textAlign: "left",
                padding: "0 15px",
                marginTop: "26vh",
              }}
            >
              Our adaptable and results-driven approach ensures swift execution
              of decisions while staying flexible to meet our clients' evolving
              needs. Our cross-functional teams thrive on change, continuously
              delivering value in an ever-changing business landscape.
            </p>
          </div>
        </div>
      </div>




      {/* Section 6 */}
      <div
        className="container-fluid p-0"
        style={{ marginTop: "60px", marginBottom: "60px" }}
      >
        <div className="row mx-0 no-gutters justify-content-center">
          {/* Image 1 with Text */}
          <div className="col-12 col-md-2 p-2 text-center">
            <div>
              <img
                src="assets/Images/shield_5724408.png"
                alt="Trust"
                style={{ width: "90px", height: "90px", marginBottom: "15px" }}
              />{" "}
              <p style={{ fontWeight: "600", fontSize: "20px", color: "#333" }}>
                Trust
              </p>{" "}
            </div>
          </div>

          {/* Image 2 with Text */}
          <div className="col-12 col-md-2 p-2 text-center">
            <div>
              <img
                src="assets/Images/search_7706356.png"
                alt="Transparency"
                style={{ width: "90px", height: "90px", marginBottom: "15px" }}
              />{" "}
              <p style={{ fontWeight: "600", fontSize: "20px", color: "#333" }}>
                Transparency
              </p>{" "}
            </div>
          </div>

          {/* Image 3 with Text */}
          <div className="col-12 col-md-2 p-2 text-center">
            <div>
              <img
                src="assets/Images/teamwork_9157620.png"
                alt="Collaboration"
                style={{ width: "90px", height: "90px", marginBottom: "15px" }}
              />{" "}
              <p style={{ fontWeight: "600", fontSize: "20px", color: "#333" }}>
                Collaboration
              </p>{" "}
            </div>
          </div>

          {/* Image 4 with Text */}
          <div className="col-12 col-md-2 p-2 text-center">
            <div>
              <img
                src="assets/Images/agile_7270547.png"
                alt="Agility"
                style={{ width: "90px", height: "90px", marginBottom: "15px" }}
              />{" "}
              <p style={{ fontWeight: "600", fontSize: "20px", color: "#333" }}>
                Agility
              </p>{" "}
            </div>
          </div>

          {/* Image 5 with Text */}
          <div className="col-12 col-md-2 p-2 text-center">
            <div>
              <img
                src="assets/Images/check_6659897.png"
                alt="Perfection"
                style={{ width: "90px", height: "90px", marginBottom: "15px" }}
              />{" "}
              <p style={{ fontWeight: "600", fontSize: "20px", color: "#333" }}>
                Perfection
              </p>{" "}
            </div>
          </div>
        </div>
      </div>







{/* Section 7 */}
<div className="container py-5">
<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Typography variant="h4" align="center" gutterBottom marginBottom={6}>
      Meet the Crew
      <span className="rectangle1"></span>
      </Typography>

      {/* Grid layout */}
      <Grid container spacing={4} justifyContent="center">
        {currentEmployees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} key={employee.id}>
            <Card
              style={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* Avatar with clickable link */}
              <a
                href={employee.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  alt={employee.name}
                  src={employee.photo}
                  style={{
                    width: "170px",
                    height: "170px",
                    margin: "0 auto",
                    border: "3px solid #1976d2",
                    cursor: "pointer",
                  }}
                />
              </a>
              <CardContent>
                <Typography variant="h6" style={{ marginTop: "10px", fontSize:'25px' }}>
                  {employee.name}
                </Typography>
                <Typography color="textSecondary" style={{ fontSize: "18px" }}>
                  {employee.role}
                  <Typography color="textsecondaryrole" style={{ fontSize: "18px" }}>
                  {employee.secondaryrole}
                </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
</div>







      {/* Section 8 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4" style={{ fontWeight: 600, color: "#333" }}>
              Our Focus
              <span className="rectanglefullstop"></span>
            </h2>
            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.6",
                color: "#555",
                marginRight: "10px",
                fontWeight: "400",
              }}
            >
              We aim to integrate modern technologies with human expertise at
              every key touchpoint in enterprises, SMBs, and startups. By
              unlocking growth, enhancing workforce performance, improving cost
              efficiency, elevating product quality, and accelerating time to
              market, we provide end-to-end strategic and technological
              solutions. We help businesses transition from offline to online
              within ambitious timelines, deploying custom digital solutions
              tailored to your unique needs.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.6",
                color: "#555",
                marginRight: "10px",
                fontWeight: "400",
                marginTop: "30px",
              }}
            >
              Our solutions focus on optimizing various business functions, such
              as human capital management, risk management, daily operations,
              and inventory management. Whether it's streamlining processes or
              boosting efficiency, we devise digital capabilities for
              high-impact use cases across areas like warehouse, supply-chain,
              and procurement management, ultimately driving business
              performance and increasing profitability.
            </p>
          </div>
        </div>
      </div>

      {/* Section 9 */}
      <div
        className="container-fluid p-0"
        style={{ marginBottom: "60px", height: "auto" }}
      >
        <div className="row mx-0 no-gutters justify-content-center">
          {/* Image Section */}
          <div
            className="col-12 p-0 d-flex justify-content-center align-items-center"
            style={{
              justifyContent: "center",
              textAlign: "center",
              height: "400px",
              maxWidth: "100%",
            }}
          >
            <img
              src="assets/Images/getty.png"
              alt="Your Image"
              className="img-fluid"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                marginLeft: "120px",
                marginRight: "120px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 10 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column (Now on the Right) */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start"
            style={{
              marginBottom: "20px",
            }}
          >
            <h2
              className="mb-4"
              style={{
                fontWeight: 600,
                color: "#333",
              }}
            >
              Accelerating Outcomes
              <br /> From Agile
            </h2>
            <p
              style={{
                fontSize: "19px",
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              How we lead in the exponentially changing technology landscape. We
              empower businesses by driving innovation, delivering agile
              solutions, and adapting swiftly to market changes to ensure you
              stay ahead.
            </p>
            {/* <a
              href="#"
              className=" mx-auto mx-md-0"
              style={{
                border: "none",
                fontSize: "18px",
                fontWeight: "600",
                borderRadius: "0px",
                cursor: "pointer",
                maxWidth: "250px",
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              Explore
            </a> */}
          </div>

          {/* Right Column (Now on the Left) */}
          <div className="col-md-6">
            <img
              src="assets/Images/pexels-ron-lach-8100071.jpg"
              alt="About Us"
              className="img-fluid"
              style={{
                border: "none",
                borderRadius: "3px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Section 11 */}
      <div className="container py-5">
        <div className="row mx-0 align-items-center">
          {/* Left Column */}

          <div className="col-md-6">
            <img
              src="assets/Images/pexels-olly-3769021.jpg"
              alt="About Us"
              className="img-fluid"
              style={{
                border: "none",
                borderRadius: "3px",
                width: "100%",
              }}
            />
          </div>

          {/* Right Column */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start mt-4"
            style={{}}
          >
            <h2
              className="mb-4"
              style={{
                fontWeight: 600,
                color: "#333",
              }}
            >
              Ready To Start Your Digital Transformation?
            </h2>
            <button
              className="btn btn-primary mx-auto mx-md-0"
              style={{
                backgroundColor: "#772c93",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "0px",
                cursor: "pointer",
                maxWidth: "250px",
                textAlign: "center",
                marginTop: "10px",
              }}
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>













    </>
  );
};

export default About;
