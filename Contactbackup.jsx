import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Styles/Contact.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.submit();
  };

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Get in touch with Piquota. Fill out our contact form for inquiries, consultations, or project discussions. We are here to assist you with your business needs."
        />
        <meta
          name="keywords"
          content="contact, business inquiries, project consultation, contact form, Piquota, digital solutions, tech consultation"
        />
        <meta name="author" content="Piquota" />
        <meta property="og:title" content="Contact Us | Piquota" />
        <meta
          property="og:description"
          content="Reach out to Piquota today! Our team is ready to assist with your project needs, business inquiries, or consultations."
        />
        <meta
          property="og:image"
          content="https://www.fatbit.com/media/banner-for-contact-us.jpg"
        />
        <meta property="og:url" content="https://www.piquota.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact Us | Piquota" />
        <meta
          name="twitter:description"
          content="Have a question or a project in mind? Fill out our contact form to connect with Piquota's team."
        />
        <meta
          name="twitter:image"
          content="https://www.fatbit.com/media/banner-for-contact-us.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Banner Section */}
      <div
        style={{
          position: "relative",
          backgroundImage: `url("https://www.fatbit.com/media/banner-for-contact-us.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "180px 0",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <Container
          className="text-left"
          style={{ position: "relative", zIndex: 2 }}
        >
          <h1
            className="banner-heading"
            style={{ fontSize: "2.5rem", fontWeight: "400" }}
          >
            Activate Next Now
          </h1>
          <p
            className="banner-paragraph"
            style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "white" }}
          >
            <span>
              Please fill the form and we will guide you to the best solution.
              Our
            </span>
            <br />
            experts will get in touch soon.
          </p>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <Form
              action="https://formsubmit.co/sethuraman.murugaiyan@outlook.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <Row className="mb-4">
                <Col md={4} className="d-flex align-items-top">
                  <h4 style={{ fontWeight: 400 }}>Basic Information</h4>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
                      Name{" "}
                      <span style={{ color: "grey", fontSize: "12px" }}>
                        (required)
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="John Smith"
                      name="name"
                      required
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        borderRadius: "0px",
                        height: "50px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
                      Email{" "}
                      <span style={{ color: "grey", fontSize: "12px" }}>
                        (Required)
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="james.smith@company.com"
                      name="email"
                      required
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        borderRadius: "0px",
                        height: "50px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
                      Phone Number{" "}
                      <span style={{ color: "grey", fontSize: "12px" }}>
                        (Required)
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="+91 93483722947"
                      name="phone"
                      required
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        borderRadius: "0px",
                        height: "50px",
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr style={{ borderTop: "1px solid black", margin: "20px 0" }} />

              <Row className="mb-4">
                <Col md={4} className="d-flex align-items-top">
                  <h4 style={{ fontWeight: 400 }}>About Your Project</h4>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
                      Message{" "}
                      <span style={{ color: "grey", fontSize: "12px" }}>
                        (Required)
                      </span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write details about your project here"
                      name="message"
                      required
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        borderRadius: "0px",
                        height: "120px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
                      Budget
                    </Form.Label>
                    <div>
                      <Form.Check
                        type="radio"
                        label="Above $50,000"
                        name="budget"
                        value="Above $50,000"
                        id="budgetAbove50000"
                        required
                      />
                      <Form.Check
                        type="radio"
                        label="From $20,000 - $50,000"
                        name="budget"
                        value="From $20,000 - $50,000"
                        id="budget20000to50000"
                        required
                      />
                      <Form.Check
                        type="radio"
                        label="From $5,000 - $10,000"
                        name="budget"
                        value="From $5,000 - $10,000"
                        id="budget5000to10000"
                        required
                      />
                      <Form.Check
                        type="radio"
                        label="From $1,000 - $2,500"
                        name="budget"
                        value="From $1,000 - $2,500"
                        id="budget1000to2500"
                        required
                      />
                    </div>
                  </Form.Group>

                  {/* File Upload Field */}
                  <Form
                    action="https://formsubmit.co/sethuraman.murugaiyan@outlook.com"
                    method="POST"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                  >
                    <Form.Group className="mb-3" controlId="formFileUpload">
                      <Form.Label
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Upload Files
                      </Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="Choose files"
                        name="attachments"
                        multiple
                        required
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <hr style={{ borderTop: "1px solid black", margin: "20px 0" }} />

              <Row className="mb-4">
                <Col md={4} className="d-flex align-items-top">
                  <h4 style={{ fontWeight: 400 }}>
                    Services that Interest You
                  </h4>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <div>
                      <Form.Check
                        type="checkbox"
                        label="Piquota Products"
                        name="services[]"
                        value="Piquota Products"
                        id="serviceFATbitProducts"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Web design & Development"
                        name="services[]"
                        value="Web design & Development"
                        id="serviceWebDesignDevelopment"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Mobile App Development"
                        name="services[]"
                        value="Mobile App Development"
                        id="serviceMobileAppDevelopment"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Custom eCommerce Solutions"
                        name="services[]"
                        value="Custom eCommerce Solutions"
                        id="serviceCustomEcommerce"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Online Reputation Management"
                        name="services[]"
                        value="Online Reputation Management"
                        id="serviceReputationManagement"
                      />
                      <Form.Check
                        type="checkbox"
                        label="SEO & Marketing Services"
                        name="services[]"
                        value="SEO & Marketing Services"
                        id="serviceSEOMarketing"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Consultancy"
                        name="services[]"
                        value="Consultancy"
                        id="serviceConsultancy"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Partnership"
                        name="services[]"
                        value="Partnership"
                        id="servicePartnership"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Other"
                        name="services[]"
                        value="Other"
                        id="serviceOther"
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Button
                variant="primary"
                type="submit"
                style={{
                  padding: "10px 60px",
                  backgroundColor: "#772c93",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
