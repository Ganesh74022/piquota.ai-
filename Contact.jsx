import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    budget: "",
    service: [],
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file") {
      setFormData({ ...formData, attachment: files[0] });
    } else if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, service: [...formData.service, value] });
      } else {
        setFormData({
          ...formData,
          service: formData.service.filter((s) => s !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone_number", formData.phone_number);
    submitData.append("message", formData.message);
    submitData.append("budget", formData.budget);

    formData.service.forEach((service) => {
      submitData.append("service[]", service);
    });

    if (formData.attachment) {
      submitData.append("attachment", formData.attachment);
    }

    try {
      const response = await axios.post(
        "https://piquota.ai/apis/form-submit",
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("🎉 Form submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      // Reset form if needed
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        message: "",
        budget: "",
        service: [],
        attachment: null,
      });
    } catch (error) {
      console.error(error);
      toast.error("❌ There was an error submitting the form.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Contact Piquota for inquiries or consultations."
        />
      </Helmet>

      {/* Banner Section */}
      <div
        style={{
          position: "relative",
          backgroundImage: `url("assets/Images/pexels-josh-hild-1270765-14449287.jpg")`,
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
        <Container style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "600" }}>
            Take the Next Step Today
          </h1>
          <p style={{ fontSize: "1.4rem", lineHeight: "1.8", color:"#fff" }}>
            Please fill the form, and our experts will guide you with the best solution.<br/>
            We’ll get in touch soon.
          </p>
        </Container>
      </div>

      {/* Contact Form */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <Form onSubmit={handleSubmit}>
              {/* Basic Information */}
              <Row className="mb-4">
                <Col md={4}>
                  <h4 style={{ fontWeight: 400 }}>Basic Information</h4>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name (Required)</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email (Required)</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number (Required)</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              {/* Project Details */}
              <Row className="mb-4">
                <Col md={4}>
                  <h4 style={{ fontWeight: 400 }}>About Your Project</h4>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Message (Required)</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Budget</Form.Label>
                    {[
                      "Above $50,000",
                      "From $20,000 - $50,000",
                      "From $5,000 - $10,000",
                      "From $1,000 - $2,500",
                    ].map((option, index) => (
                      <Form.Check
                        key={index}
                        type="radio"
                        label={option}
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={handleChange}
                        required
                      />
                    ))}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Upload Files</Form.Label>
                    <Form.Control
                      type="file"
                      name="attachment"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              {/* Services Selection */}
              <Row className="mb-4">
                <Col md={4}>
                  <h4 style={{ fontWeight: 400 }}>Services that Interest You</h4>
                </Col>
                <Col md={6}>
                  {[
                    "Piquota Products",
                    "Web design & Development",
                    "Mobile App Development",
                    "Custom eCommerce Solutions",
                    "Online Reputation Management",
                    "SEO & Marketing Services",
                    "Consultancy",
                    "Partnership",
                    "Other",
                  ].map((service, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={service}
                      name="service"
                      value={service}
                      checked={formData.service.includes(service)}
                      onChange={handleChange}
                    />
                  ))}
                </Col>
              </Row>

              <div style={{ textAlign: "right" }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  style={{
                    width: "200px",
                    padding: "10px",
                    backgroundColor: "#653081",
                    border: "none",
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Toast Notifications Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
