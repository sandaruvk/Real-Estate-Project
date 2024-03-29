import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <img
              src="/src/assets/home/realestate.jpg"
              alt="Skyline Estate"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2 className="home-heading">"Unearth Your Ideal Home: Where Your Perfect Property Awaits!"</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="home-description">
            "Embark on a Journey of Discovery with Us - From Elegant Homes to Urban Retreats, We Curate the Finest Selection Tailored to Your Unique Lifestyle. Your Dream Home Awaits, Let's Find It Together!"
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        {/* Hero Section */}
        <Row className="hero-section">
          <Col>
            <h1 className="hero-heading">Welcome to Skyline Estates Dubai</h1>
            <p className="hero-description">
            Explore our diverse range of properties and find your dream home in the heart of Dubai
            </p>
          </Col>
        </Row>


        {/* Testimonials Section */}
        <Row className="testimonials-section mt-4">
        <Col>
          <h2 className="section-heading">Feedbacks from our Customers</h2>
          <Row className="testimonial-cards-container">
            <Col lg={4} md={6} sm={12}>
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text>
                  "We express our utmost satisfaction with the exceptional service offered by Skyline Estates Dubai. Their unwavering dedication and meticulous attention to detail have transformed the entire process into a seamless and enjoyable journey."
                  </Card.Text>
                  <Card.Title>- Jimmy Anderson, Long time resident</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text>
                  "We couldn't be happier with the exceptional service provided by Skyline Estates Dubai. Their unwavering commitment and meticulous attention to detail have truly set them apart. The entire process was not only smooth but also a truly enjoyable experience. Highly recommended for a top-notch real estate journey!"
                  </Card.Text>
                  <Card.Title>- Steven Smith, Happy Customer</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text>
                  "Choosing Skyline Estates Dubai was the best decision for our real estate needs. Their exceptional service, attention to detail, and commitment to client satisfaction made the entire journey smooth and stress-free."
                  </Card.Text>
                  <Card.Title>- Floyd Warner, Buyer</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default HomePage;
